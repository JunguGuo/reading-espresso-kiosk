import { create } from "zustand";

interface UserState {
  cardNumber: string | null;
  ageGroup: number | null;
  tags: string[];
  puzzles: string[];
  setCardNumber: (val: string | null) => void;
  setAgeGroup: (val: number) => void;
  setTags: (val: string[]) => void;
  setPuzzles: (val: string[]) => void;
  resetUserStore: () => void; // Add reset function
}

const useUserStore = create<UserState>((set) => ({
  cardNumber: null,
  ageGroup: null,
  tags: [],
  puzzles: [],
  setCardNumber: (val: string | null) => set({ cardNumber: val }),
  setAgeGroup: (val: number | null) => set({ ageGroup: val }),
  setTags: (val: string[]) => set({ tags: val }),
  setPuzzles: (val: string[]) => set({ puzzles: val }),
  resetUserStore: () =>
    set({
      cardNumber: null,
      ageGroup: null,
      tags: [],
      puzzles: [],
    }), // Reset all fields
}));

export default useUserStore;
