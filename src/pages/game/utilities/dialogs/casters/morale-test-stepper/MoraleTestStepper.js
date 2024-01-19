import React, { useState } from "react";
import CustomButton from "../../../../../../components/ui/button/CustomButton";
import CustomDivider from "../../../../../../components/ui/divider/CustomDivider";
import CustomTooltip from "../../../../../../components/ui/tooltip/CustomTooltip";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import {
  banner,
  canticleMegaphone,
  explode,
  fearless,
  grim,
  hero,
  noRetreat,
  robot,
  shaken,
  shootingAndSpellsMoraleTest,
} from "../../../../utilities/tooltip-content/TooltipContent";
import { useGame } from "../../../../../../context/game/GameProvider";

import styles from "./MoraleTestStepper.module.css";

export default function MoraleTestStepper({ handleHideMoraleStepper }) {
  const { playerA, playerB } = useGame();

  const [activeStep, setActiveStep] = useState(0);

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  const steps = [
    {
      title: "Enemy Shaken?",
      content: (
        <>
          <p>
            Is the enemy unit <CustomTooltip keyword={shaken} /> 🚩? {""}
            <strong>Auto-fails the morale test (remains shaken).</strong>
          </p>
          <div className={styles["buttons-container"]}>
            <CustomButton
              text="No"
              variant="contained"
              color="primary"
              onClick={handleNext}
            />
            <CustomButton
              text="Yes: Remains Shaken"
              variant="contained"
              color="primary"
              onClick={handleHideMoraleStepper}
            />
          </div>
        </>
      ),
    },
    {
      title: "Morale Test",
      content: (
        <>
          <ol>
            <li>
              <div>
                <strong>Check Keywords: </strong>
                <ul>
                  <li>
                    <p>
                      <CustomTooltip keyword={hero} />
                      {(playerA.army.name === "Alien Hives" ||
                        playerB.army.name === "Alien Hives") && (
                        <>
                          <strong> | Alien Hives: </strong>
                          <CustomTooltip keyword={explode} />
                        </>
                      )}

                      {(playerA.army.name === "Battle Brothers" ||
                        playerB.army.name === "Battle Brothers") && (
                        <>
                          <strong> | Battle Brothers: </strong>
                          <CustomTooltip keyword={banner} />
                        </>
                      )}

                      {(playerA.army.name === "Blessed Sisters" ||
                        playerB.army.name === "Blessed Sisters") && (
                        <>
                          <strong> | Blessed Sisters: </strong>
                          <CustomTooltip keyword={canticleMegaphone} />
                        </>
                      )}

                      {(playerA.army.name === "Dark Brothers" ||
                        playerB.army.name === "Dark Brothers") && (
                        <>
                          <strong> | Dark Brothers: </strong>
                          <CustomTooltip keyword={banner} />
                        </>
                      )}
                    </p>
                  </li>
                </ul>
              </div>
            </li>

            <CustomDivider />
            <li>
              <p>
                <strong>
                  Enemy unit takes a{" "}
                  <CustomTooltip keyword={shootingAndSpellsMoraleTest} />.{" "}
                </strong>
              </p>
            </li>

            <CustomDivider />
            <li>
              <p>
                <strong>Did the unit pass the test?</strong>
              </p>

              <div className={styles["buttons-container"]}>
                <CustomButton
                  text="No"
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                />
                <CustomButton
                  text="Yes: Nothing Happens"
                  variant="contained"
                  color="primary"
                  onClick={handleHideMoraleStepper}
                />
              </div>
            </li>
          </ol>
        </>
      ),
    },
    {
      title: "After Failed Morale Test",
      content: (
        <>
          <p>Check for any of the following keywords.</p>
          <ul>
            <li>
              <p>
                <CustomTooltip keyword={fearless} /> success?
                {(playerA.army.name === "Alien Hives" ||
                  playerB.army.name === "Alien Hives") && (
                  <>
                    <strong> | Alien Hives: </strong>
                    <CustomTooltip keyword={noRetreat} />
                  </>
                )}
                {(playerA.army.name === "Robot Legions" ||
                  playerB.army.name === "Robot Legions") && (
                  <>
                    <strong> | Robot Legions: </strong>
                    <CustomTooltip keyword={robot} />
                  </>
                )}
                {(playerA.army.name === "Dark Brothers" ||
                  playerB.army.name === "Dark Brothers") && (
                  <>
                    <strong> | Dark Brothers: </strong>
                    <CustomTooltip keyword={grim} />
                  </>
                )}
              </p>
            </li>
          </ul>

          <CustomDivider />
          <p>
            <strong>Did the unit pass the test?</strong>
          </p>

          <div className={styles["buttons-container"]}>
            <CustomButton
              text="No"
              variant="contained"
              color="primary"
              onClick={handleNext}
            />
            <CustomButton
              text="Yes: Nothing Happens"
              variant="contained"
              color="primary"
              onClick={handleHideMoraleStepper}
            />
          </div>
        </>
      ),
    },
    {
      title: "Shaken",
      content: (
        <p>
          <strong>
            Unit becomes <CustomTooltip keyword={shaken} /> 🚩
          </strong>
        </p>
      ),
    },
  ];

  const completedMessage = (
    <CustomButton
      text="End Morale Test"
      variant="contained"
      onClick={handleHideMoraleStepper}
    />
  );

  return (
    <div className={styles["stepper-container"]}>
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
                      step.title !== "Enemy Shaken?" &&
                      step.title !== "Morale Test" &&
                      step.title !== "After Failed Morale Test" && (
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
    </div>
  );
}
