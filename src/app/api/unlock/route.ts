import { createHash, timingSafeEqual } from "node:crypto";
import { NextRequest, NextResponse } from "next/server";
import { authConfigured, createSession, safeReturnPath, SESSION_COOKIE, SESSION_SECONDS } from "@/lib/site-auth";

export async function POST(request: NextRequest) {
  if (request.headers.get("origin") !== request.nextUrl.origin) return new NextResponse("Forbidden", { status: 403 });
  if (!authConfigured()) return new NextResponse("Access unavailable", { status: 503 });
  const form = await request.formData();
  const password = form.get("password");
  const destination = form.get("next");
  const next = safeReturnPath(typeof destination === "string" ? destination : null);
  const suppliedHash = createHash("sha256").update(typeof password === "string" ? password : "").digest();
  if (!timingSafeEqual(suppliedHash, Buffer.from(process.env.SITE_PASSWORD_HASH!, "hex"))) {
    const url = new URL("/unlock", request.url);
    url.searchParams.set("error", "1");
    url.searchParams.set("next", next);
    return NextResponse.redirect(url, { status: 303, headers: { "Cache-Control": "private, no-store" } });
  }
  const response = NextResponse.redirect(new URL(next, request.url), { status: 303 });
  response.cookies.set(SESSION_COOKIE, await createSession(), {
    httpOnly: true, secure: request.nextUrl.protocol === "https:",
    sameSite: "lax", path: "/", maxAge: SESSION_SECONDS,
  });
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}
