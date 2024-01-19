import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  IconButton,
} from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useGame } from "../../../../../context/game/GameProvider";
import CustomButton from "../../../../../components/ui/button/CustomButton";
import CustomDivider from "../../../../../components/ui/divider/CustomDivider";
import styles from "./ObjectiveMarkersDialog.module.css";

export default function ObjectiveMarkersDialog({ open, setOpen }) {
  const { objectiveMarkers, updateObjectiveMarker, playerA, playerB } =
    useGame();

  function handleClose() {
    setOpen(false);
  }

  return (
    <Dialog open={open} onClose={handleClose} className={styles.container}>
      <DialogTitle sx={{ textAlign: "center" }}>Objective Markers</DialogTitle>

      <CustomDivider />

      <div className={styles.subtitle}>
        Select the player that controls each Objective Marker.
      </div>

      <CustomDivider />

      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
        }}
      >
        <CloseIcon />
      </IconButton>
      <DialogContent>
        {objectiveMarkers.map((objectiveMarker, index) => (
          <Box
            key={index}
            sx={{ display: "flex", alignItems: "center", mb: 2 }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <strong>{objectiveMarker.name}</strong>
            </Box>

            <Select
              value={objectiveMarker.seizedBy}
              onChange={(event) =>
                updateObjectiveMarker(objectiveMarker.id, event.target.value)
              }
              sx={{ ml: 1, mr: 1, width: "80%" }}
            >
              <MenuItem value="Neutral">Neutral</MenuItem>
              <MenuItem
                value={playerA}
              >{`${playerA.name} (${playerA.army.name})`}</MenuItem>
              <MenuItem
                value={playerB}
              >{`${playerB.name} (${playerB.army.name})`}</MenuItem>
            </Select>
          </Box>
        ))}
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CustomButton
            text="Done"
            variant="contained"
            color="primary"
            onClick={handleClose}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
