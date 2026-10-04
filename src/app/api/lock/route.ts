import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE } from "@/lib/site-auth";

export async function POST(request: NextRequest) {
  if (request.headers.get("origin") !== request.nextUrl.origin) return new NextResponse("Forbidden", { status: 403 });
  const response = NextResponse.redirect(new URL("/unlock", request.url), { status: 303 });
  response.cookies.set(SESSION_COOKIE, "", {
    httpOnly: true, secure: request.nextUrl.protocol === "https:",
    sameSite: "lax", path: "/", maxAge: 0,
  });
  response.headers.set("Cache-Control", "private, no-store");
  return response;
}
