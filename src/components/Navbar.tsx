export default function Navbar() {
  return (
    <nav className="w-full text-gray-500 flex justify-between items-center bg-white sticky top-0 z-50 py-8 px-32">
      <a href="/" className="hover:text-black">
        Charlotte Tsui
      </a>
      <div className="space-x-6">
        <a href="/#work" className="hover:text-black">
          Work
        </a>
        <a href="#about" className="hover:text-black">
          About
        </a>
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
