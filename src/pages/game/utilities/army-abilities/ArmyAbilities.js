import React, { useState } from "react";
import { useGame } from "../../../../context/game/GameProvider";
import CustomDivider from "../../../../components/ui/divider/CustomDivider";
import CustomButton from "../../../../components/ui/button/CustomButton";
import AbilitiesDialog from "../dialogs/abilities/AbilitiesDialog";
import styles from "./ArmyAbilities.module.css";

export default function ArmyAbilities() {
  const { playerA, playerB } = useGame();
  const [isPlayerAAbilityDialogOpen, setIsPlayerAAbilityDialogOpen] =
    useState(false);
  const [isPlayerBAbilityDialogOpen, setIsPlayerBAbilityDialogOpen] =
    useState(false);

  return (
    <>
      <div className={styles["abilities-container"]}>
        {playerA.army.name === playerB.army.name ? (
          <CustomButton
            text={`${playerA.army.name} Abilities`}
            onClick={() => setIsPlayerAAbilityDialogOpen(true)}
          />
        ) : (
          <>
            <CustomButton
              text={`${playerA.army.name} Abilities`}
              onClick={() => setIsPlayerAAbilityDialogOpen(true)}
            />

            <CustomButton
              text={`${playerB.army.name} Abilities`}
              onClick={() => setIsPlayerBAbilityDialogOpen(true)}
            />
          </>
        )}
      </div>

      <CustomDivider />

      <AbilitiesDialog
        player={playerA}
        open={isPlayerAAbilityDialogOpen}
        setOpen={setIsPlayerAAbilityDialogOpen}
      />

      <AbilitiesDialog
        player={playerB}
        open={isPlayerBAbilityDialogOpen}
        setOpen={setIsPlayerBAbilityDialogOpen}
      />
    </>
  );
}
