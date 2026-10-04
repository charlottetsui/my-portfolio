import { NextRequest, NextResponse } from "next/server";
import { authConfigured, safeReturnPath, SESSION_COOKIE, validSession } from "@/lib/site-auth";

export async function middleware(request: NextRequest) {
  if (!authConfigured()) return new NextResponse("Site access is temporarily unavailable.", {
    status: 503, headers: { "Cache-Control": "private, no-store" },
  });
  const { pathname, search, searchParams } = request.nextUrl;
  const headers = new Headers(request.headers);
  headers.set("x-portfolio-return-path", safeReturnPath(pathname === "/unlock" ? searchParams.get("next") : pathname + search));
  headers.set("x-portfolio-auth-error", pathname === "/unlock" && searchParams.get("error") === "1" ? "1" : "0");
  const authenticated = await validSession(request.cookies.get(SESSION_COOKIE)?.value);
  let response: NextResponse;
  if (pathname === "/unlock" && authenticated) {
    response = NextResponse.redirect(new URL(safeReturnPath(searchParams.get("next")), request.url));
  } else if (["/unlock", "/api/unlock", "/api/lock"].includes(pathname) || authenticated) {
    response = NextResponse.next({ request: { headers } });
  } else {
    const unlock = new URL("/unlock", request.url);
    unlock.searchParams.set("next", safeReturnPath(pathname + search));
    response = NextResponse.redirect(unlock);
  }
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("X-Robots-Tag", "noindex, nofollow");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static/|_next/webpack-hmr|favicon.ico).*)"],
};
