// UserInputContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

interface UserInputContextType {
  hasUserInput: boolean;
  setHasUserInput: (value: boolean) => void;
}

const UserInputContext = createContext<UserInputContextType | undefined>(
  undefined
);

export function UserInputProvider({ children }: { children: React.ReactNode }) {
  const [hasUserInput, setHasUserInput] = useState<boolean>(true);

  return (
    <UserInputContext.Provider value={{ hasUserInput, setHasUserInput }}>
      {children}
    </UserInputContext.Provider>
  );
}

export function useUserInput() {
  const context = useContext(UserInputContext);
  if (!context) {
    throw new Error("useUserInput must be used within a UserInputProvider");
  }
  return context;
}
