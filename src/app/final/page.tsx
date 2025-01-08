"use client";

import { useEffect } from "react";
import useUserStore from "../../store/useUserStore";
import { useRouter } from "next/navigation";

export default function FinalPage() {
  const router = useRouter();
  const { cardNumber, ageGroup, tags, puzzles } = useUserStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://guarded-dawn-90951-86b2b35b4d83.herokuapp.com/api/v1/tapes/construct",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              //user: cardNumber, // Assuming cardNumber is the userId
              age: ageGroup,
              selectedTopics: tags.map((tag) => tag.toLowerCase()),
              selectedPuzzles: puzzles.map((puzzle) => puzzle.toLowerCase()),
            }),
          }
        );

        if (!response.ok) {
          throw new Error(`Server Error: ${response.statusText}`);
        }

        const res = await response.json();
        const tapeId = res.data.tape._id;
        console.log("Tape ID:", tapeId); // Log the response

        // Redirect to another page or display the result if needed
        router.push(
          `https://guarded-dawn-90951-86b2b35b4d83.herokuapp.com/tape/${tapeId}`
        );
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchData(); // Call the function on component mount
  }, [cardNumber, ageGroup, tags, puzzles, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full px-8 py-8 bg-white text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-black">
        Submitting your data...
      </h1>
      <p className="text-gray-700">
        Please wait while we process your request.
      </p>
    </div>
  );
}
