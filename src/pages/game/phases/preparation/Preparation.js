import React from "react";
import objectivesImage from "../../../../assets/images/deployment.png";
import terrainImage from "../../../../assets/images/terrain.png";
import CustomStepper from "../../../../components/ui/stepper/CustomStepper";
import CustomButton from "../../../../components/ui/button/CustomButton";
import { useGame } from "../../../../context/game/GameProvider";
import styles from "./Preparation.module.css";

export default function Preparation() {
  const { handleTabChange } = useGame();

  const steps = [
    {
      title: "Table Size",
      content: (
        <p>
          <strong>48'' x 72''</strong>
        </p>
      ),
    },
    {
      title: "Terrain",
      content: (
        <>
          <p>
            <strong>10-15 pieces.</strong>
          </p>
          <p>
            <strong>Roll-off:</strong> Alternate placing one terrain piece each,
            starting with the player that won. Terrain pieces must be placed at
            least 6'' away from each other, and if it’s impossible to place them
            they are removed.
          </p>
          <img src={terrainImage} alt="Terrain" className={styles.image} />
        </>
      ),
    },
    {
      title: "Mission: Duel",
      content: (
        <>
          <p>
            <strong>Objective Markers (OM):</strong> D3+2
          </p>
          <p>
            <strong>Roll-off:</strong> The winner picks who places the first OM.
            They then alternate placing one OM each.
          </p>
          <p>
            <strong>Placing OMs:</strong> Outside of deployment zones and
            &gt;9'' away from other OMs.
          </p>
          <p>
            <strong>Winning Condition:</strong> After 4 Rounds, the player that
            controls most OMs wins.
          </p>
          <img
            src={objectivesImage}
            alt="Objectives"
            className={styles.image}
          />
        </>
      ),
    },
    {
      title: "Number of Rounds",
      content: (
        <p>
          <strong>4 rounds</strong>
        </p>
      ),
    },
  ];

  const completedMessage = (
    <CustomButton
      text="Deployment"
      variant="contained"
      onClick={() => {
        handleTabChange(2);
      }}
    />
  );

  return <CustomStepper steps={steps} completedMessage={completedMessage} />;
}
