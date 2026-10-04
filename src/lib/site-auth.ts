export const SESSION_COOKIE = "portfolio_session";
export const SESSION_SECONDS = 86400;
const encoder = new TextEncoder();

export function authConfigured() {
  return /^[a-f0-9]{64}$/.test(process.env.SITE_PASSWORD_HASH ?? "") &&
    (process.env.SITE_SESSION_SECRET?.length ?? 0) >= 64;
}

export function safeReturnPath(value: string | null | undefined) {
  if (!value?.startsWith("/") || value.startsWith("//") || /[\\\r\n]/.test(value)) return "/";
  try {
    const url = new URL(value, "https://portfolio.invalid");
    if (url.origin !== "https://portfolio.invalid" || url.pathname === "/unlock" || url.pathname.startsWith("/api/")) return "/";
    return url.pathname + url.search + url.hash;
  } catch { return "/"; }
}

async function sessionKey() {
  return crypto.subtle.importKey("raw", encoder.encode(process.env.SITE_SESSION_SECRET!),
    { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
}

export async function createSession() {
  if (!authConfigured()) throw new Error("Site access is not configured");
  const expires = Math.floor(Date.now() / 1000) + SESSION_SECONDS;
  // Rotating the password also invalidates previously issued sessions.
  const payload = `${expires}.${process.env.SITE_PASSWORD_HASH}`;
  const signature = await crypto.subtle.sign("HMAC", await sessionKey(), encoder.encode(payload));
  const hex = Array.from(new Uint8Array(signature), byte => byte.toString(16).padStart(2, "0")).join("");
  return `${expires}.${hex}`;
}

export async function validSession(token: string | undefined) {
  if (!authConfigured() || !token || !/^\d{10}\.[a-f0-9]{64}$/.test(token)) return false;
  const [expires, signature] = token.split(".");
  const now = Math.floor(Date.now() / 1000);
  if (Number(expires) <= now || Number(expires) > now + SESSION_SECONDS) return false;
  const bytes = Uint8Array.from(signature.match(/../g)!, byte => parseInt(byte, 16));
  return crypto.subtle.verify("HMAC", await sessionKey(), bytes,
    encoder.encode(`${expires}.${process.env.SITE_PASSWORD_HASH}`));
}
