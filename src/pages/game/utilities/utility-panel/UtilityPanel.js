import React, { useState } from "react";
import { useGame } from "../../../../context/game/GameProvider";
import { Box } from "@mui/material";
import CasterDialog from "../dialogs/casters/CasterDialog";
import TransportDialog from "../dialogs/transport/TransportDialog";
import AircraftDialog from "../dialogs/aircraft/AircraftDialog";
import ObjectiveMarkersDialog from "../dialogs/objective-markers/ObjectiveMarkersDialog";
import CustomDialog from "../../../../components/ui/dialog/CustomDialog";
import CustomButton from "../../../../components/ui/button/CustomButton";
import styles from "./UtilityPanel.module.css";

export default function UtilityPanel() {
  const { roundNumber, endGame } = useGame();
  const [isCasterDialogOpen, setIsCasterDialogOpen] = useState(false);
  const [isTransportDialogOpen, setIsTransportDialogOpen] = useState(false);
  const [isAircraftDialogOpen, setIsAircraftDialogOpen] = useState(false);
  const [isObjectiveMarkersDialogOpen, setIsObjectiveMarkersDialogOpen] =
    useState(false);
  const [isEndGameDialogOpen, setIsEndGameDialogOpen] = useState(false);

  function handleOpenCasterDialog() {
    setIsCasterDialogOpen(true);
  }

  function handleCloseEndGameDialog() {
    setIsEndGameDialogOpen(false);
  }

  function handleEndGame() {
    setIsEndGameDialogOpen(true);
  }

  return (
    <div className={styles.container}>
      <div
        className={
          roundNumber === 4
            ? `${styles["round-number-base"]} ${styles["round-number-4"]}`
            : `${styles["round-number-base"]} ${styles["round-number"]}`
        }
      >
        ROUND {roundNumber}
      </div>
      <Box className={styles["buttons-container"]}>
        <CustomButton
          text="Casters & Spells"
          variant="outlined"
          color="primary"
          onClick={handleOpenCasterDialog}
        />
        <CustomButton
          text="Transport(X)"
          variant="outlined"
          color="primary"
          onClick={() => setIsTransportDialogOpen(true)}
        />
        <CustomButton
          text="Aircraft"
          variant="outlined"
          color="primary"
          onClick={() => setIsAircraftDialogOpen(true)}
        />
        <CustomButton
          text="OM"
          variant="outlined"
          color="primary"
          onClick={() => setIsObjectiveMarkersDialogOpen(true)}
        />
        <CustomButton
          text="End Game"
          variant="outlined"
          color="error"
          onClick={handleEndGame}
        />
      </Box>
      <CasterDialog open={isCasterDialogOpen} setOpen={setIsCasterDialogOpen} />
      <TransportDialog
        open={isTransportDialogOpen}
        setOpen={setIsTransportDialogOpen}
      />
      <AircraftDialog
        open={isAircraftDialogOpen}
        setOpen={setIsAircraftDialogOpen}
      />
      <ObjectiveMarkersDialog
        open={isObjectiveMarkersDialogOpen}
        setOpen={setIsObjectiveMarkersDialogOpen}
      />
      <CustomDialog
        open={isEndGameDialogOpen}
        handleClose={handleCloseEndGameDialog}
        title={"End Game?"}
        description={"Are you sure you want to end the game?"}
        acceptText={"Yes"}
        cancelText={"No"}
        acceptAction={endGame}
      />
    </div>
  );
}
