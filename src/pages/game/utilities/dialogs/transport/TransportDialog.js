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
import CustomTooltip from "../../../../../components/ui/tooltip/CustomTooltip";
import CustomButton from "../../../../../components/ui/button/CustomButton";
import {
  dangerousTerrainTest,
  shaken,
} from "../../tooltip-content/TooltipContent";
import CustomDivider from "../../../../../components/ui/divider/CustomDivider";
import styles from "./TransportDialog.module.css";

export default function TransportDialog({ open, setOpen }) {
  function handleClose() {
    setOpen(false);
  }

  const destroyedTransportDialogContent = (
    <>
      <h4>Units inside:</h4>
      <ul className={styles.list}>
        <li>
          Take a <CustomTooltip keyword={dangerousTerrainTest} />.
        </li>
        <li>
          Become <CustomTooltip keyword={shaken} />. 🚩
        </li>
        <li>
          Surviving models must be placed within 6” of the transport before
          removing it.
        </li>
      </ul>
    </>
  );

  const transportDialogContent = (
    <>
      <CustomDivider />
      <p>Units may deploy inside transports at the beginning of the game.</p>
      <CustomDivider />
      <CustomAccordion
        title="Capacity"
        content={
          <>
            Up to X models or Heroes with up to Tough(6), and non-Heroes with up
            to Tough(3) which occupy 3 spaces each.
          </>
        }
        expanded={true}
      />
      <CustomAccordion
        title="Embark"
        content="Move unit into contact with the transport."
        expanded={true}
      />

      <CustomAccordion
        title="Disembark"
        content="Use any move action (including charging) and stay within 6'' of
        the transport."
        expanded={true}
      />

      <CustomAccordion
        title="Destroyed Transport"
        content={destroyedTransportDialogContent}
        expanded={true}
      />
    </>
  );

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ textAlign: "center", position: "relative" }}>
        Transport(X)
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
        {transportDialogContent}
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
