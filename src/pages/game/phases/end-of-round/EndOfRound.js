import React from "react";
import CustomStepper from "../../../../components/ui/stepper/CustomStepper";
import { useGame } from "../../../../context/game/GameProvider";
import styles from "./EndOfRound.module.css";
import CustomButton from "../../../../components/ui/button/CustomButton";
import CustomDivider from "../../../../components/ui/divider/CustomDivider";
import CustomTooltip from "../../../../components/ui/tooltip/CustomTooltip";
import { fatigue } from "../../utilities/tooltip-content/TooltipContent";

export default function EndOfRound() {
  const { roundNumber, nextRound, handleTabChange } = useGame();

  const steps = [
    ...(roundNumber !== 4
      ? [
          {
            title: "Remove Fatigue",
            content: (
              <p>
                Remove <CustomTooltip keyword={fatigue} /> 🚩 from units.
              </p>
            ),
          },
        ]
      : []),
    {
      title: "Check Objective Markers",
      content: (
        <ul className={styles.list}>
          <li>
            <strong>
              Unit (not Shaken) within 3'' of an OM whilst no enemies are?
            </strong>{" "}
            OM seized by that player.
          </li>
          <li>
            <strong>Units from both sides contesting an OM?</strong> The OM
            becomes neutral.
          </li>
          <li>OMs remain seized even if the unit moves away.</li>
          <li>Shaken units can't seize or stop others from seizing OMs.</li>
          <li>Aircrafts can't seize OMs.</li>
          {roundNumber === 4 && (
            <li>
              <u>
                Units deployed with Ambush on the last round can’t seize or
                contest OMs.{" "}
              </u>
            </li>
          )}
        </ul>
      ),
    },
  ];

  const completedMessage = (
    <>
      {roundNumber === 4 ? (
        <>
          <CustomDivider />
          <p>
            <strong>Check the victory condition and end the game.</strong>
          </p>
        </>
      ) : (
        <CustomButton
          text="Next Round"
          variant="contained"
          onClick={() => {
            nextRound();
            handleTabChange(3);
          }}
        />
      )}
    </>
  );

  return <CustomStepper steps={steps} completedMessage={completedMessage} />;
}
