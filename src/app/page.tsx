import "../styles/globals.css";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-6 sm:px-8 py-12 sm:py-16 bg-white">
      {/* Left Column: Illustration */}
      <div className="flex-1 flex justify-center mb-8 md:mb-0">
        <div className="relative w-80 h-80 md:w-[420px] md:h-[420px]">
          <Image
            src="/images/img_read.svg"
            alt="Reading Espresso hero illustration"
            priority // Helps with LCP
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Right Column: Text and CTA */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left md:pl-12 lg:pl-16">
        {/* Increase heading size */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-black leading-tight">
          Reading Espresso
        </h1>
        {/* Increase paragraph size and allow for a wider max-width */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6 sm:mb-8 max-w-xs sm:max-w-sm md:max-w-md leading-relaxed">
          Grab your daily shot of literary espresso, and savor personalized
          reading on the move.
        </p>
        {/* Slightly larger button */}
        <Link
          href="/how-it-works"
          className="inline-flex items-center bg-blue-600 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-full text-lg sm:text-xl font-medium hover:bg-blue-700 transition-colors"
        >
          Start
          {/* Inline SVG for the arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 sm:w-6 sm:h-6 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14m0 0l-6-6m6 6l-6 6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
