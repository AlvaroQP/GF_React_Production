import React, { createContext, useState, useContext } from "react";

const StepperContext = createContext();

export function StepperProvider({ children }) {
  const [activeStep, setActiveStep] = useState(0);

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  function moveToStep(step) {
    setActiveStep(step);
  }

  function resetStepper() {
    setActiveStep(0);
  }

  return (
    <StepperContext.Provider
      value={{ activeStep, handleNext, handleBack, moveToStep, resetStepper }}
    >
      {children}
    </StepperContext.Provider>
  );
}

export function useStepper() {
  const context = useContext(StepperContext);
  if (!context) {
    throw new Error("useStepper must be used within a StepperProvider");
  }
  return context;
}
