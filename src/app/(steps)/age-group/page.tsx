"use client";

import { useState, useEffect } from "react";
import useUserStore from "../../../store/useUserStore";
import { useUserInput } from "@/context/UserInputContext";
import { AGE_OPTIONS } from "@/constants/constants";

export default function AgeGroupPage() {
  const { ageGroup, setAgeGroup } = useUserStore(); // Zustand global store
  const { setHasUserInput } = useUserInput();
  const [selectedAge, setSelectedAge] = useState<number | null>(ageGroup);

  // Sync Zustand store and check input validity
  useEffect(() => {
    if (ageGroup !== null && ageGroup !== undefined) {
      setSelectedAge(ageGroup); // Sync local state with Zustand store
      setHasUserInput(true); // Set as valid if ageGroup exists
    } else {
      setHasUserInput(false); // Set as invalid if no ageGroup
    }
  }, [ageGroup, setHasUserInput]);

  // Handle local selection changes
  const handleSelectAge = (value: number) => {
    setSelectedAge(value); // Local state update
    setAgeGroup(value); // Save to Zustand global store immediately
    setHasUserInput(true); // Ensure "Next" button is enabled
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full px-8 py-8 bg-white text-center">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-12">
        What’s your age group?
      </h1>

      <div className="flex flex-col items-center gap-4 mb-12">
        {AGE_OPTIONS.map((option) => {
          const isSelected = selectedAge === option.value;
          return (
            <button
              key={option.value}
              onClick={() => handleSelectAge(option.value)}
              className={`text-sm md:text-base font-medium px-4 py-2 rounded-full border-2 transition-colors
                ${
                  isSelected
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-blue-600 text-blue-600 hover:bg-blue-100"
                }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
