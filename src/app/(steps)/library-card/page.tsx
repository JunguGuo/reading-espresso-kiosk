"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import useUserStore from "../../../store/useUserStore";
import { useUserInput } from "../../../context/UserInputContext";

export default function LibraryCardPage() {
  const { cardNumber, setCardNumber } = useUserStore();
  const { setHasUserInput } = useUserInput(); // Access UserInputContext
  const [localCardNumber, setLocalCardNumber] = useState(cardNumber || "");

  // Sync local input with global store and set input validity
  useEffect(() => {
    const isValid = localCardNumber.trim() !== ""; // Check if card number is valid
    setCardNumber(isValid ? localCardNumber : null);
    setHasUserInput(isValid); // Update validation state
  }, [localCardNumber, setCardNumber, setHasUserInput]);

  return (
    <div className="flex flex-col items-center min-h-screen w-full px-8 py-8 bg-white text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-12">
        Got a library card?
      </h1>

      <div className="w-full max-w-sm mx-auto mb-8">
        <div className="relative flex items-center border-2 border-blue-500 rounded-full px-4 py-2 mb-4">
          <input
            type="text"
            inputMode="numeric"
            placeholder="Enter or scan your library card"
            value={localCardNumber}
            onChange={(e) => setLocalCardNumber(e.target.value)}
            className="flex-1 outline-none text-sm text-gray-700 bg-transparent"
          />
          <div className="w-6 h-6 ml-2 relative">
            <Image
              src="/images/icon_scan.svg" // Replace with your own icon path
              alt="Scan Icon"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        <h5 className="text-gray-700 mt-8">or leave blank to skip</h5>
        {/* Skip Button */}
        <button
          onClick={() => console.log("Skip clicked")}
          className="mt-10 inline-block px-8 py-2 w-36 text-blue-500 border border-blue-500 rounded-full text-lg font-medium hover:bg-blue-50 transition-colors"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
