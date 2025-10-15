import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full text-gray-500 flex justify-between items-center bg-white sticky top-0 z-50 py-8 px-32">
      <Link href="/" className="hover:text-black">
        Charlotte Tsui
      </Link>
      <div className="space-x-6">
        <Link href="/#work" className="hover:text-black">
          Work
        </Link>
        <Link href="/" className="hover:text-black">
          About
        </Link>
        <a
          href="/images/CharlotteTsui_Resume_2025.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
