import React from "react";
import CustomStepper from "../../../../components/ui/stepper/CustomStepper";
import deploymentImage from "../../../../assets/images/deployment.png";
import aircraftImage from "../../../../assets/images/aircraft.jpeg";
import unitImage from "../../../../assets/images/unit.png";
import transportImage from "../../../../assets/images/transport.png";
import scoutsImage from "../../../../assets/images/scouts.png";
import ambushImage from "../../../../assets/images/ambush.png";
import CustomButton from "../../../../components/ui/button/CustomButton";
import CustomTooltip from "../../../../components/ui/tooltip/CustomTooltip";
import CustomDivider from "../../../../components/ui/divider/CustomDivider";
import {
  darkAssault,
  hunter,
  shadowProtocol,
  surpriseAttack,
  tunneller,
} from "../../utilities/tooltip-content/TooltipContent";
import { useGame } from "../../../../context/game/GameProvider";
import styles from "./Deployment.module.css";

export default function Deployment() {
  const { handleTabChange, playerA, playerB } = useGame();

  const steps = [
    {
      title: "Before Deploying",
      content: (
        <>
          <p>
            <strong>Roll-off:</strong> The winner picks a deployment zone (A or
            B). Starting with the player that won the roll-off, the players
            alternate in placing one unit each within 12'' of their deployment
            zone.
          </p>
          <p>
            <strong>Distance:</strong> Armies must deploy at least 24'' apart.
          </p>
          <p>
            <strong>Check next steps before deploying.</strong>
          </p>
          <img
            src={deploymentImage}
            alt="Deployment"
            className={styles.image}
          />
        </>
      ),
    },
    {
      title: "Deploy Aircrafts",
      content: (
        <>
          <p>Deploy Aircrafts before all other units.</p>
          <img src={aircraftImage} alt="Aircraft" className={styles.image} />
        </>
      ),
    },
    {
      title: "Deploy Units",
      content: (
        <>
          <p>Deploy normal units.</p>
          <img src={unitImage} alt="Unit" className={styles.image} />
          <br />
          <p>
            <strong>Transports:</strong> Units may deploy inside transports at
            the beginning of the game.
          </p>
          <img src={transportImage} alt="Transport" className={styles.image} />
        </>
      ),
    },
    {
      title: "Deploy Scouts",
      content: (
        <>
          <p>
            <strong>Both players have scouts?</strong> Roll-off to see who goes
            first and then alternate deploying scouts.
          </p>

          <p>
            <strong>Scouts:</strong> may be deployed after all other units{" "}
            <strong>+</strong> may then move up to 12'' ignoring terrain.
          </p>
          <CustomDivider />

          <img src={scoutsImage} alt="Scouts" className={styles.image} />
        </>
      ),
    },
    {
      title: "Units with Ambush",
      content: (
        <>
          <p>
            <strong>Units with Ambush:</strong> may be kept in reserve instead
            of deploying.
          </p>
          {(playerA.army.name === "Alien Hives" ||
            playerB.army.name === "Alien Hives") && (
            <p>
              <strong>Alien Hives:</strong> Units with {""}
              <CustomTooltip keyword={surpriseAttack} /> (may be kept in
              reserve).
            </p>
          )}

          {(playerA.army.name === "Dark Brothers" ||
            playerB.army.name === "Dark Brothers") && (
            <p>
              <strong>Dark Brothers:</strong> Units with {""}
              <CustomTooltip keyword={darkAssault} /> (may be kept in reserve).
            </p>
          )}

          {(playerA.army.name === "Dwarf Guilds" ||
            playerB.army.name === "Dwarf Guilds") && (
            <p>
              <strong>Dwarf Guilds:</strong> Units with {""}
              <CustomTooltip keyword={tunneller} /> (may be kept in reserve).
            </p>
          )}

          {(playerA.army.name === "Robot Legions" ||
            playerB.army.name === "Robot Legions") && (
            <p>
              <strong>Robot Legions:</strong> Units with {""}
              <CustomTooltip keyword={hunter} /> |{" "}
              <CustomTooltip keyword={shadowProtocol} /> |{" "}
              <CustomTooltip keyword={tunneller} /> (may be kept in reserve).
            </p>
          )}

          <img src={ambushImage} alt="Ambush" className={styles.image} />
        </>
      ),
    },
  ];

  const completedMessage = (
    <CustomButton
      text="Beginning of Round"
      variant="contained"
      onClick={() => {
        handleTabChange(3);
      }}
    />
  );

  return <CustomStepper steps={steps} completedMessage={completedMessage} />;
}
