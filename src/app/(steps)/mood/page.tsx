"use client";

import { useState, useEffect } from "react";
import useUserStore from "../../../store/useUserStore";
import { useUserInput } from "../../../context/UserInputContext";
import { GENRE_OPTIONS, THEME_OPTIONS } from "@/constants/constants";

export default function MoodPage() {
  const { tags, setTags } = useUserStore();
  const { setHasUserInput } = useUserInput(); // Access UserInputContext
  const [selectedGenres, setSelectedGenres] = useState<string[]>(
    tags.filter((tag) => GENRE_OPTIONS.includes(tag))
  );
  const [selectedThemes, setSelectedThemes] = useState<string[]>(
    tags.filter((tag) => THEME_OPTIONS.includes(tag))
  );
  const [activeTab, setActiveTab] = useState<"genre" | "themes">("genre");

  // Sync Zustand store and update validation state
  useEffect(() => {
    const combinedTags = [...selectedGenres, ...selectedThemes];
    setTags(combinedTags); // Update global store
    setHasUserInput(combinedTags.length > 0); // Enable "Next" if at least one tag is selected
  }, [selectedGenres, selectedThemes, setTags, setHasUserInput]);

  const toggleSelection = (option: string, isGenre: boolean) => {
    if (isGenre) {
      setSelectedGenres((prev) =>
        prev.includes(option)
          ? prev.filter((o) => o !== option)
          : [...prev, option]
      );
    } else {
      setSelectedThemes((prev) =>
        prev.includes(option)
          ? prev.filter((o) => o !== option)
          : [...prev, option]
      );
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full px-8 py-8 bg-white text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
        What are you in the mood for?
      </h1>

      {/* Tabs */}
      <div className="mb-8 flex items-center justify-center space-x-8">
        <button
          onClick={() => setActiveTab("genre")}
          className={`text-lg pb-2 font-semibold transition-colors ${
            activeTab === "genre"
              ? "text-black border-b-4 border-blue-600"
              : "text-gray-300 hover:text-gray-400"
          }`}
        >
          Genre
        </button>
        <button
          onClick={() => setActiveTab("themes")}
          className={`text-lg pb-2 font-semibold transition-colors ${
            activeTab === "themes"
              ? "text-black border-b-4 border-blue-600"
              : "text-gray-300 hover:text-gray-400"
          }`}
        >
          Themes
        </button>
      </div>

      {/* Options */}
      <div className="flex flex-wrap gap-4 justify-center mb-12 max-w-xl mx-auto">
        {activeTab === "genre" &&
          GENRE_OPTIONS.map((genre) => {
            const isSelected = selectedGenres.includes(genre);
            return (
              <button
                key={genre}
                onClick={() => toggleSelection(genre, true)}
                className={`px-4 py-2 rounded-full border-2 transition-colors text-sm font-medium ${
                  isSelected
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-blue-600 text-blue-600 hover:bg-blue-100"
                }`}
              >
                {genre}
              </button>
            );
          })}

        {activeTab === "themes" &&
          THEME_OPTIONS.map((theme) => {
            const isSelected = selectedThemes.includes(theme);
            return (
              <button
                key={theme}
                onClick={() => toggleSelection(theme, false)}
                className={`px-4 py-2 rounded-full border-2 transition-colors text-sm font-medium ${
                  isSelected
                    ? "border-blue-600 bg-blue-600 text-white"
                    : "border-blue-600 text-blue-600 hover:bg-blue-100"
                }`}
              >
                {theme}
              </button>
            );
          })}
      </div>
    </div>
  );
}
