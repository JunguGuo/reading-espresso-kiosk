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
    <div className="flex flex-col items-center  min-h-screen w-full px-8 py-8 bg-white text-center">
      {/* Top Section: Progress Indicator & Close Button are handled by StepsLayout */}
      {/* StepsLayout should already show: "currentStepNumber of totalSteps" and the Close button */}

      <h1 className="text-3xl md:text-4xl font-bold mb-6">How it works</h1>

      <div className="flex flex-col md:flex-row items-start justify-center gap-12 md:gap-16 mb-12">
        {/* Step 1: Scan */}
        <div className="flex flex-col items-center max-w-xs">
          <div className="relative w-16 h-16 mb-4">
            <Image
              src="/images/step_scan.svg" // Replace with your actual icon path
              alt="Scan"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2 className="text-lg font-semibold mb-2">1. Scan</h2>
          <p className="text-gray-700 text-sm">
            Start by scanning your library card for personalized suggestions.
          </p>
        </div>

        {/* Step 2: Tailor */}
        <div className="flex flex-col items-center max-w-xs">
          <div className="relative w-16 h-16 mb-4">
            <Image
              src="/images/step_customize.svg" // Replace with your actual icon path
              alt="Tailor"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2 className="text-lg font-semibold mb-2">2. Tailor</h2>
          <p className="text-gray-700 text-sm">
            Answer a few quick questions to customize your reading experience.
          </p>
        </div>

        {/* Step 3: Print */}
        <div className="flex flex-col items-center max-w-xs">
          <div className="relative w-16 h-16 mb-4">
            <Image
              src="/images/step_read.svg" // Replace with your actual icon path
              alt="Print"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2 className="text-lg font-semibold mb-2">3. Print</h2>
          <p className="text-gray-700 text-sm">
            Receive a personalized printout of curated readings, ready to go!
          </p>
        </div>
      </div>
    </div>
  );
}
