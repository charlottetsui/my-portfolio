import { googleSans, geistMono } from "./fonts";
import SiteShell from "@/components/layout/SiteShell";
import { ViewTransitions } from "next-view-transitions";
import "./globals.css";
import { cookies, headers } from "next/headers";
import PasswordGate from "@/components/auth/PasswordGate";
import { safeReturnPath, SESSION_COOKIE, validSession } from "@/lib/site-auth";

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // Verify again on the server so middleware is not the only content boundary.
  const authenticated = await validSession((await cookies()).get(SESSION_COOKIE)?.value);
  const requestHeaders = await headers();
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${googleSans.variable} ${geistMono.variable} antialiased bg-white min-h-screen`}
        >
          {authenticated ? <SiteShell>{children}</SiteShell> : (
            <PasswordGate next={safeReturnPath(requestHeaders.get("x-portfolio-return-path"))}
              error={requestHeaders.get("x-portfolio-auth-error") === "1"} />
          )}
        </body>
      </html>
    </ViewTransitions>
  );
}
