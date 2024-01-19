import React from "react";
import CustomTooltip from "../../../../../../components/ui/tooltip/CustomTooltip";
import CustomStepper from "../../../../../../components/ui/stepper/CustomStepper";
import CustomButton from "../../../../../../components/ui/button/CustomButton";
import CustomDivider from "../../../../../../components/ui/divider/CustomDivider";
import {
  battleHaste,
  dangerousTerrain,
  difficultTerrain,
  explode,
  fast,
  flying,
  movementAndCoherency,
  royalMarch,
  royalMarchOrder,
  slow,
  strider,
  swift,
} from "../../../../utilities/tooltip-content/TooltipContent";
import { useGame } from "../../../../../../context/game/GameProvider";
import styles from "./Rush.module.css";

export default function Rush({ handleEndActivation }) {
  const { playerA, playerB } = useGame();

  const steps = [
    {
      title: "Rush",
      content: (
        <>
          <ol>
            <li>
              <p>
                <strong>Check Keywords Before Rushing</strong>
              </p>
            </li>

            <ul>
              <li>
                <p>
                  <CustomTooltip keyword={fast} /> |{" "}
                  <CustomTooltip keyword={slow} /> |{" "}
                  <CustomTooltip keyword={strider} /> |{" "}
                  <CustomTooltip keyword={flying} />
                </p>
              </li>

              {(playerA.army.name === "Alien Hives" ||
                playerB.army.name === "Alien Hives") && (
                <li>
                  <p>
                    {" "}
                    <strong>Alien Hives: </strong>
                    <CustomTooltip keyword={explode} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "Dwarf Guilds" ||
                playerB.army.name === "Dwarf Guilds") && (
                <li>
                  <p>
                    {" "}
                    <strong>Dwarf Guilds: </strong>
                    <CustomTooltip keyword={battleHaste} /> |{" "}
                    <CustomTooltip keyword={swift} />
                  </p>
                </li>
              )}

              {(playerA.army.name === "Robot Legions" ||
                playerB.army.name === "Robot Legions") && (
                <li>
                  <p>
                    {" "}
                    <strong>Robot Legions: </strong>
                    <CustomTooltip keyword={royalMarch} /> |{" "}
                    <CustomTooltip keyword={royalMarchOrder} />
                  </p>
                </li>
              )}
            </ul>

            <CustomDivider />

            <li>
              <p>
                <strong>Check Terrain: </strong>
                <CustomTooltip keyword={dangerousTerrain} /> |{" "}
                <CustomTooltip keyword={difficultTerrain} />
              </p>
            </li>
            <CustomDivider />

            <li>
              <p>
                <strong>Rush (12'')</strong>
                <span className={styles["movement-and-coherency"]}>
                  [
                  <CustomTooltip keyword={movementAndCoherency} />]
                </span>
              </p>
            </li>
            <CustomDivider />
          </ol>
        </>
      ),
    },
  ];

  const completedMessage = (
    <CustomButton
      text="End Activation"
      variant="contained"
      onClick={handleEndActivation}
    />
  );

  return <CustomStepper steps={steps} completedMessage={completedMessage} />;
}
