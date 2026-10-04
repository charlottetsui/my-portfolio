"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return (
    <>
      {isMounted && (
        <>
          <SiteHeader />
          <div key={pathname} className={pathname === "/" ? "homepage-container" : "project-container"}>
            {children}
          </div>
          <SiteFooter />
        </>
      )}
    </>
  );
}
