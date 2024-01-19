import React from "react";
import CustomStepper from "../../../../components/ui/stepper/CustomStepper";
import casterImage from "../../../../assets/images/caster.png";
import aircraftImage from "../../../../assets/images/aircraft.jpeg";
import ambushImage from "../../../../assets/images/ambush.png";
import CustomTooltip from "../../../../components/ui/tooltip/CustomTooltip";
import CustomButton from "../../../../components/ui/button/CustomButton";
import CustomDivider from "../../../../components/ui/divider/CustomDivider";
import {
  beacon,
  darkAssault,
  hunter,
  psychicPsynapse,
  shadowProtocol,
  surpriseAttack,
  tunneller,
  warningCry,
} from "../../utilities/tooltip-content/TooltipContent";
import { useGame } from "../../../../context/game/GameProvider";
import styles from "./BeginningOfRound.module.css";

export default function BeginningOfRound() {
  const { playerA, playerB, handleTabChange } = useGame();

  const steps = [
    {
      title: "Who Activates First?",
      content: (
        <>
          <p>
            <strong>Round 1:</strong> The player that won the deployment
            roll-off.
          </p>
          <p>
            <strong>Rounds 2+:</strong> The player that finished activating
            first on the last round.
          </p>
        </>
      ),
    },
    {
      title: "Casters",
      content: (
        <>
          <p>
            <strong>Casters(X)</strong> get +X Spell Tokens (can't hold more
            than 6 at once).
          </p>

          {(playerA.army.name === "Alien Hives" ||
            playerB.army.name === "Alien Hives") && (
            <p>
              <strong>Alien Hives:</strong> Synapse Floaters with{" "}
              <CustomTooltip keyword={psychicPsynapse} />.
            </p>
          )}
          <img src={casterImage} alt="Caster" className={styles.image} />
        </>
      ),
    },
    {
      title: "Off-Table Aircrafts",
      content: (
        <>
          <p>
            <strong>Off-Table Aircrafts</strong> redeploy on any table edge.
          </p>
          <img src={aircraftImage} alt="Aircraft" className={styles.image} />
        </>
      ),
    },
    {
      title: "Units with Ambush",
      content: (
        <>
          <p>
            <strong>Both players have Ambush?</strong> Roll-off to see who goes
            first and alternate deploying.
          </p>
          <CustomDivider />
          <p>
            <strong>Units with Ambush (Rounds 2+):</strong> May be placed
            anywhere &gt;9'' from enemy units.
          </p>

          {(playerA.army.name === "Alien Hives" ||
            playerB.army.name === "Alien Hives") && (
            <p>
              <strong>Alien Hives (Rounds 2+):</strong> Units with {""}
              <CustomTooltip keyword={surpriseAttack} />.
            </p>
          )}

          {(playerA.army.name === "Dark Brothers" ||
            playerB.army.name === "Dark Brothers") && (
            <p>
              <strong>Dark Brothers (Rounds 1+):</strong> Units with {""}
              <CustomTooltip keyword={darkAssault} />.
            </p>
          )}

          {(playerA.army.name === "DAO Union" ||
            playerB.army.name === "DAO Union") && (
            <p>
              <strong>DAO Union:</strong> {""}
              <CustomTooltip keyword={beacon} />.
            </p>
          )}

          {(playerA.army.name === "Dwarf Guilds" ||
            playerB.army.name === "Dwarf Guilds") && (
            <p>
              <strong>Dwarf Guilds:</strong> Units with {""}
              <CustomTooltip keyword={tunneller} />.
            </p>
          )}

          {(playerA.army.name === "Robot Legions" ||
            playerB.army.name === "Robot Legions") && (
            <p>
              <strong>Robot Legions:</strong> Units with {""}
              <CustomTooltip keyword={hunter} /> |{" "}
              <CustomTooltip keyword={shadowProtocol} /> |{" "}
              <CustomTooltip keyword={tunneller} /> |{" "}
              <CustomTooltip keyword={warningCry} />.
            </p>
          )}

          <CustomDivider />
          <p>
            <strong>Last Round?</strong> Units that deploy like this on the last
            round can’t seize or contest OMs.
          </p>
          <img src={ambushImage} alt="Ambush" className={styles.image} />
        </>
      ),
    },
  ];

  const completedMessage = (
    <CustomButton
      text="Activations"
      variant="contained"
      onClick={() => {
        handleTabChange(4);
      }}
    />
  );

  return <CustomStepper steps={steps} completedMessage={completedMessage} />;
}
