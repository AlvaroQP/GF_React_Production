import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  IconButton,
} from "@mui/material";
import CustomButton from "../../../../../components/ui/button/CustomButton";
import CustomAccordion from "../../../../../components/ui/accordion/CustomAccordion";
import CloseIcon from "@mui/icons-material/Close";

export default function AbilitiesDialog({ player, open, setOpen }) {
  function handleClose() {
    setOpen(false);
  }

  const oncePerActivationAbilities = player.oncePerActivationAbilities;
  const oncePerGameAbilities = player.oncePerGameAbilities;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ textAlign: "center" }}>
        {player.army.name} Abilities
      </DialogTitle>

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
        {oncePerActivationAbilities.length > 0 && (
          <CustomAccordion
            title="Once Per Activation Abilities"
            content={
              <>
                {oncePerActivationAbilities.map((ability, index) => (
                  <p key={index}>
                    <strong>{ability.name}:</strong> {ability.description}
                  </p>
                ))}
              </>
            }
            expanded={true}
          />
        )}

        {oncePerGameAbilities.length > 0 && (
          <CustomAccordion
            title="Once Per Game Abilities"
            content={
              <>
                {oncePerGameAbilities.map((ability, index) => (
                  <p key={index}>
                    <strong>{ability.name}:</strong> {ability.description}
                  </p>
                ))}
              </>
            }
            expanded={true}
          />
        )}

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
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
