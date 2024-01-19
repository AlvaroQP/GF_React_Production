import React, { useEffect } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useStepper } from "../../../context/stepper/StepperProvider";

export default function CustomStepper({ steps, completedMessage }) {
  const { activeStep, handleNext, handleBack, resetStepper } = useStepper();

  useEffect(() => {
    resetStepper();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={{ maxWidth: 800 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.title}>
            <StepLabel>{step.title}</StepLabel>
            <StepContent>
              {step.content}
              <Box sx={{ mb: 2, mt: 2 }}>
                <div>
                  {index === steps.length - 1 ? (
                    <>{completedMessage}</>
                  ) : (
                    step.title !== "Check Range and Line of Sight" &&
                    step.title !== "Enemy Unit Check" &&
                    step.title !== "Shoot?" &&
                    step.title !== "Enemy Shaken?" &&
                    step.title !== "Morale Test" &&
                    step.title !== "After Failed Morale Test" &&
                    step.title !== "Melee" &&
                    step.title !== "Loser Check" &&
                    step.title !== "Loser Unit Check" &&
                    step.title !== "Melee Morale Test" && (
                      <>
                        <Button
                          variant="contained"
                          onClick={handleNext}
                          sx={{ mr: 1 }}
                        >
                          Continue
                        </Button>
                        <Button
                          disabled={index === 0}
                          onClick={handleBack}
                          sx={{ mr: 1 }}
                        >
                          Back
                        </Button>
                      </>
                    )
                  )}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
