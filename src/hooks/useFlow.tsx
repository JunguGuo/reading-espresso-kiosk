// useFlow.tsx
"use client";

import { usePathname } from "next/navigation";
import { FLOW_STEPS } from "../constants/constants";

export function useFlow() {
  const pathname = usePathname();

  const totalSteps = FLOW_STEPS.length;
  const currentIndex = FLOW_STEPS.findIndex((step) => step.route === pathname);

  const currentStepNumber = currentIndex >= 0 ? currentIndex + 1 : 0;
  const nextStep =
    currentIndex >= 0 && currentIndex < totalSteps - 1
      ? FLOW_STEPS[currentIndex + 1].route
      : null;

  const prevStep = currentIndex > 0 ? FLOW_STEPS[currentIndex - 1].route : null;

  return {
    totalSteps,
    currentIndex,
    currentStepNumber,
    nextStep,
    prevStep,
  };
}
