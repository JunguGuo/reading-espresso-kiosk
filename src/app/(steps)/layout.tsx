"use client";

import { ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useFlow } from "../../hooks/useFlow";
import { FLOW_STEPS } from "../../constants/constants";
import {
  useUserInput,
  UserInputProvider,
} from "../../context/UserInputContext";
import useUserStore from "../../store/useUserStore"; // Import Zustand store

export default function StepsLayoutWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <UserInputProvider>
      <StepsLayout>{children}</StepsLayout>
    </UserInputProvider>
  );
}

function StepsLayout({ children }: { children: ReactNode }) {
  const { totalSteps, currentStepNumber, nextStep, prevStep } = useFlow();
  const router = useRouter();
  const { resetUserStore } = useUserStore(); // Access the reset function from Zustand store
  const { hasUserInput } = useUserInput(); // Access input state from context

  const progressPercent =
    totalSteps > 0 ? (currentStepNumber / totalSteps) * 100 : 0;

  const isCurrentStepOptional =
    FLOW_STEPS[currentStepNumber - 1]?.optional || false;

  const isNextDisabled = !isCurrentStepOptional && !hasUserInput;

  const handleNextClick = () => {
    if (nextStep) {
      router.push(nextStep);
    } else {
      router.push("/final");
    }
  };

  const handleCloseClick = () => {
    resetUserStore(); // Reset all user data
    router.push("/"); // Navigate back to the home page
  };

  return (
    <div className="min-h-screen bg-white w-full flex flex-col">
      {/* Top bar */}
      <div className="relative w-full px-4 py-4 border-b border-gray-200">
        <div className="absolute left-0 bottom-0 h-1 bg-gray-300 w-full"></div>
        <div
          className="absolute left-0 bottom-0 h-1 bg-blue-600 transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        ></div>
        {currentStepNumber > 0 && (
          <div className="flex justify-center">
            <span className="text-sm text-black">
              {currentStepNumber} of {totalSteps}
            </span>
          </div>
        )}
        <button
          onClick={handleCloseClick} // Handle close button click
          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 text-lg"
          aria-label="Close"
        >
          &times;
        </button>
      </div>

      {/* Content area */}
      <div className="flex-1 flex flex-col items-center justify-start text-center px-8 py-8 pb-24">
        {children}
      </div>

      {/* Navigation bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 py-4">
        <div className="max-w-md mx-auto flex justify-between px-4">
          <button
            onClick={() => router.push(prevStep || "/")}
            className="inline-block bg-white text-gray-700 border border-gray-300 py-2 px-6 rounded-full text-sm hover:bg-gray-100 transition-colors"
          >
            Back
          </button>
          <button
            onClick={handleNextClick}
            className={`inline-block py-2 px-6 rounded-full text-sm font-medium transition-colors ${
              isNextDisabled
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
            disabled={isNextDisabled}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
