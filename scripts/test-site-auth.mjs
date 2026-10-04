import assert from 'node:assert/strict';
import fs from 'node:fs';
import ts from 'typescript';
import {createHmac} from 'node:crypto';

// Compile the shared server/Edge helper without adding a separate test runner.
const source = ts.transpileModule(fs.readFileSync('src/lib/site-auth.ts', 'utf8'), {
  compilerOptions: {target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022},
}).outputText;
const auth = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
process.env.SITE_PASSWORD_HASH = '1'.repeat(64);
process.env.SITE_SESSION_SECRET = '2'.repeat(64);
assert.equal(auth.authConfigured(), true);
const token = await auth.createSession();
assert.equal(await auth.validSession(token), true);
assert.equal(await auth.validSession(undefined), false);
assert.equal(await auth.validSession('malformed'), false);
assert.equal(await auth.validSession(token.slice(0, -1) + (token.at(-1) === 'a' ? 'b' : 'a')), false);
const signed = expires => `${expires}.${createHmac('sha256', process.env.SITE_SESSION_SECRET)
  .update(`${expires}.${process.env.SITE_PASSWORD_HASH}`).digest('hex')}`;
assert.equal(await auth.validSession(signed(Math.floor(Date.now()/1000)-1)), false);
assert.equal(await auth.validSession(signed(Math.floor(Date.now()/1000)+86401)), false);
process.env.SITE_PASSWORD_HASH = '3'.repeat(64);
assert.equal(await auth.validSession(token), false, 'Password rotation revokes existing sessions');
for (const destination of [null, 'https://example.com', '//example.com', '/\\example.com', '/unlock', '/api/unlock', '/\n/example.com']) {
  assert.equal(auth.safeReturnPath(destination), '/');
}
assert.equal(auth.safeReturnPath('/sas?section=1#details'), '/sas?section=1#details');
delete process.env.SITE_SESSION_SECRET;
assert.equal(auth.authConfigured(), false);
assert.equal(await auth.validSession(token), false);
await assert.rejects(auth.createSession());
console.log('Passed: signed sessions, expiry, signature tampering, password rotation, missing configuration, and redirect safety.');
