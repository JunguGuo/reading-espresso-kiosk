import "../styles/globals.css";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-8 py-8 bg-white">
      {/* Left Column: Illustration */}
      <div className="flex-1 flex justify-center mb-8 md:mb-0">
        <div className="relative w-64 h-64">
          <Image
            src="/images/img_read.svg"
            alt="Reading Espresso hero illustration"
            priority // Add this to optimize LCP
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>

      {/* Right Column: Text and CTA */}
      <div className="flex-1 flex flex-col items-start md:pl-16 text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
          Reading Espresso
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-sm leading-relaxed">
          Grab your daily shot of literary espresso, and savor personalized
          reading on the move.
        </p>
        <Link
          href="/how-it-works"
          className="inline-block bg-blue-600 text-white py-3 px-6 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Start
        </Link>
      </div>
    </div>
  );
}
