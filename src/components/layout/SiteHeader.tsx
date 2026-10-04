import Link from "next/link";

export default function SiteHeader() {
  return (
    <nav aria-label="Main navigation" className="site-navigation sticky top-0 z-50">
      <div className="site-navigation-inner">
        <div className="flex items-center gap-6 sm:gap-8 text-sm sm:text-base font-medium">
          <Link href="/" className="navigation-link">
            Work
          </Link>
          <a
            href="/images/UXE_Charlotte_Tsui_Resume_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navigation-link"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
