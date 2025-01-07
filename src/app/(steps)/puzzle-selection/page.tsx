"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import useUserStore from "../../../store/useUserStore";
import { useUserInput } from "../../../context/UserInputContext";

import { PUZZLE_OPTIONS } from "@/constants/constants";

export default function PuzzleSelectionPage() {
  const { puzzles, setPuzzles } = useUserStore();
  const { setHasUserInput } = useUserInput(); // Access UserInputContext
  const [selectedPuzzles, setSelectedPuzzles] = useState<string[]>(puzzles);

  // Sync Zustand store and update validation state
  useEffect(() => {
    setPuzzles(selectedPuzzles); // Save to global store
    setHasUserInput(selectedPuzzles.length > 0); // Enable "Next" if at least one puzzle is selected
  }, [selectedPuzzles, setPuzzles, setHasUserInput]);

  const togglePuzzle = (puzzleName: string) => {
    setSelectedPuzzles((prev) =>
      prev.includes(puzzleName)
        ? prev.filter((p) => p !== puzzleName)
        : [...prev, puzzleName]
    );
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full px-8 py-8 bg-white text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
        Do you want a puzzle?
      </h1>

      <div className="flex flex-wrap gap-8 justify-center mb-12 max-w-xl mx-auto">
        {PUZZLE_OPTIONS.map((puzzle) => {
          const isSelected = selectedPuzzles.includes(puzzle.name);
          return (
            <button
              key={puzzle.name}
              onClick={() => togglePuzzle(puzzle.name)}
              className="flex flex-col items-center focus:outline-none"
            >
              <div className="relative w-24 h-24 mb-4">
                <Image
                  src={puzzle.imgSrc}
                  alt={`${puzzle.name} icon`}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <span
                className={`text-sm md:text-base font-medium py-2 px-4 rounded-full border-2 transition-colors ${
                  isSelected
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-blue-600 text-blue-600 hover:bg-blue-100"
                }`}
              >
                {puzzle.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
