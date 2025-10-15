import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full text-gray-500 bg-white py-8 px-6 md:px-32 mt-50 mb-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm">
          Made with <span aria-hidden>❤️</span> by Charlotte Tsui
        </div>

        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <Link
            href="https://github.com/charlottetsui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-black"
            aria-label="Charlotte Tsui on GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.58.1.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.38.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.99.01 1.99.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.42.36.8 1.07.8 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56C20.71 21.38 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
            </svg>
            <span className="sr-only">GitHub</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/charlottettsui"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-black"
            aria-label="Charlotte Tsui on LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M20.45 20.45h-3.56v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.86v5.49H9.4V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.49v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45z" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </Link>

          <a
            href="mailto:charlottetung@outlook.com"
            className="hover:text-black text-sm"
            aria-label="Email Charlotte Tsui"
          >
            charlottetung@outlook.com
          </a>
        </div>
      </div>
    </footer>
  );
}
