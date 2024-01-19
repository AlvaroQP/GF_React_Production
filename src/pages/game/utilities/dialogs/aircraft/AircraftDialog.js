import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomAccordion from "../../../../../components/ui/accordion/CustomAccordion";
import CustomButton from "../../../../../components/ui/button/CustomButton";
import CustomDivider from "../../../../../components/ui/divider/CustomDivider";

export default function AircraftDialog({ open, setOpen }) {
  function handleClose() {
    setOpen(false);
  }

  const aircraftDialogContent = (
    <>
      <CustomDivider />
      <p>Can't be moved in contact with.</p>
      <CustomDivider />
      <p>Can't seize objectives.</p>
      <CustomDivider />
      <CustomAccordion
        title="Obligatory Action: Advance"
        content={
          <>
            <p>
              <strong>Advance:</strong> in a straight line by 30''-36'' without
              turning, ignoring all units and terrain when moving/stopping.
            </p>

            <p>
              <strong>If it moves off-table:</strong> its activation ends, and
              redeploys on any table edge at the beginning of the next round.
            </p>
          </>
        }
        expanded={true}
      />
      <CustomAccordion
        title="Shooting at the Aircraft"
        content={<p>-12'' range and -1 to hit rolls.</p>}
        expanded={true}
      />
    </>
  );

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ textAlign: "center", position: "relative" }}>
        Aircraft
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 10,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {aircraftDialogContent}
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
