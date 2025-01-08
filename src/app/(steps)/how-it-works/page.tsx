"use client";

import Image from "next/image";
//import { useEffect } from "react";
//import { useFlow } from "../../../hooks/useFlow"; // Adjust path as needed
// import { useUserInput } from "../../../context/UserInputContext";
export default function HowItWorksPage() {
  //const { currentStepNumber, totalSteps } = useFlow();
  // const { setHasUserInput } = useUserInput();

  // useEffect(() => {
  //   setHasUserInput(true); // Always valid
  // }, [setHasUserInput]);

  return (
    <div className="flex flex-col items-center min-h-screen w-full px-6 py-8 sm:px-8 sm:py-12 bg-white text-center">
      {/* Header */}
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-12">
        How it works
      </h1>

      {/* Steps */}
      <div className="flex flex-col sm:flex-row items-start justify-center gap-10 sm:gap-16 mb-12 sm:mb-16">
        {/* Step 1: Scan */}
        {/* <div className="flex flex-col items-center max-w-xs">
          <div className="relative w-20 h-20 sm:w-32 sm:h-32 mb-6">
            <Image
              src="/images/step_scan.svg" // Replace with your actual icon path
              alt="Scan"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center w-8 h-8 sm:w-8 sm:h-8 bg-blue-600 text-white text-sm sm:text-base font-bold rounded-full">
              1
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold">Scan</h2>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Start by scanning your library card for personalized suggestions.
          </p>
        </div> */}

        {/* Step 2: Tailor */}
        <div className="flex flex-col items-center max-w-xs">
          <div className="relative w-20 h-20 sm:w-32 sm:h-32 mb-6">
            <Image
              src="/images/step_customize.svg" // Replace with your actual icon path
              alt="Tailor"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          {/* Number and Heading on Same Line */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center w-8 h-8 sm:w-8 sm:h-8 bg-blue-600 text-white text-sm sm:text-base font-bold rounded-full">
              1
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold">Tailor</h2>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Answer a few quick questions to customize your reading experience.
          </p>
        </div>

        {/* Step 3: Print */}
        <div className="flex flex-col items-center max-w-xs">
          <div className="relative w-20 h-20 sm:w-32 sm:h-32 mb-6">
            <Image
              src="/images/step_read.svg" // Replace with your actual icon path
              alt="Print"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          {/* Number and Heading on Same Line */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center justify-center w-8 h-8 sm:w-8 sm:h-8 bg-blue-600 text-white text-sm sm:text-base font-bold rounded-full">
              2
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold">Print</h2>
          </div>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            Receive a personalized printout of curated readings, ready to go!
          </p>
        </div>
      </div>
    </div>
  );
}
