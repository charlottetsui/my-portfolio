import assert from 'node:assert/strict';

const origin = process.env.PORTFOLIO_TEST_URL || 'http://localhost:3003';
const password = process.env.PORTFOLIO_TEST_PASSWORD;
if (!password) throw new Error('Set PORTFOLIO_TEST_PASSWORD to the site password.');
const get = (path, headers = {}) => fetch(new URL(path, origin), {redirect: 'manual', headers});
const login = (value, next = '/', requestOrigin = origin) => fetch(`${origin}/api/unlock`, {
  method: 'POST', redirect: 'manual',
  headers: {origin: requestOrigin, 'content-type': 'application/x-www-form-urlencoded'},
  body: new URLSearchParams({password: value, next}),
});

const protectedPaths = ['/', '/sas', '/centible', '/campusnav',
  '/images/UXE_Charlotte_Tsui_Resume_2026.pdf', '/images/SAS_BANNER.png',
  '/_next/image?url=%2Fimages%2FSAS_BANNER.png&w=640&q=75'];
for (const path of protectedPaths) {
  const response = await get(path);
  assert.equal(response.status, 307, path);
  assert.equal(new URL(response.headers.get('location'), origin).pathname, '/unlock');
  assert.match(response.headers.get('cache-control'), /no-store/);
}
const gate = await get('/unlock?next=%2Fsas');
assert.equal(gate.status, 200);
const gateHtml = await gate.text();
assert.match(gateHtml, /type="password"/);
assert.match(gateHtml, /value="\/sas"/);
assert.ok(!gateHtml.includes('S.C.O.U.T.'));
const wrong = await login('incorrect-password');
assert.equal(wrong.status, 303);
assert.equal(wrong.headers.get('set-cookie'), null);
assert.equal(new URL(wrong.headers.get('location'), origin).searchParams.get('error'), '1');
assert.equal((await login(password, '/', 'https://another-site.invalid')).status, 403);
const valid = await login(password, '/sas');
assert.equal(valid.status, 303);
assert.equal(new URL(valid.headers.get('location'), origin).pathname, '/sas');
const cookieHeader = valid.headers.get('set-cookie');
assert.match(cookieHeader, /HttpOnly/i);
assert.match(cookieHeader, /SameSite=lax/i);
assert.match(cookieHeader, /Max-Age=86400/i);
const cookie = cookieHeader.split(';')[0];
for (const path of protectedPaths.filter(path => !path.startsWith('/_next/image'))) {
  const response = await get(path, {cookie});
  assert.equal(response.status, 200, `Authenticated: ${path}`);
  assert.match(response.headers.get('cache-control'), /no-store/, `Private cache: ${path}`);
}
const home = await get('/', {cookie});
const homeHtml = await home.text();
assert.ok(homeHtml.includes('/images/SAS_BANNER.png'), 'Authenticated homepage includes project images');
assert.ok(!homeHtml.includes('/_next/image?'), 'Protected images use direct URLs');
assert.equal((await get('/_next/image?url=%2Fimages%2FSAS_BANNER.png&w=640&q=75', {cookie})).status, 404);
const project = await get('/sas', {cookie});
assert.match(await project.text(), /S\.C\.O\.U\.T\./);
const signatureIndex = cookie.length - 1;
const tampered = cookie.slice(0, signatureIndex) + (cookie.at(-1) === 'a' ? 'b' : 'a');
assert.equal((await get('/', {cookie: tampered})).status, 307);
assert.equal((await get('/', {cookie: 'portfolio_session=1700000000.' + '0'.repeat(64)})).status, 307);
const escape = await login(password, '//another-site.invalid');
assert.equal(new URL(escape.headers.get('location'), origin).origin, origin);
assert.equal(new URL(escape.headers.get('location'), origin).pathname, '/');
const lock = await fetch(`${origin}/api/lock`, {method: 'POST', redirect:'manual', headers:{origin, cookie}});
assert.equal(lock.status, 303);
assert.match(lock.headers.get('set-cookie'), /Max-Age=0/i);
const bypass = await get('/sas', {'x-middleware-subrequest':'middleware:middleware:middleware:middleware:middleware'});
assert.ok(bypass.status === 307 || !(await bypass.text()).includes('S.C.O.U.T.'));
console.log('Passed: page and asset protection, login, wrong passwords, CSRF, session tampering/expiry, safe redirects, and logout.');
