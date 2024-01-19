import React from "react";
import { Box } from "@mui/material";
import CustomButton from "../../../../../components/ui/button/CustomButton";
import CustomTooltip from "../../../../../components/ui/tooltip/CustomTooltip";
import { immobile } from "../../../utilities/tooltip-content/TooltipContent";
import styles from "./ImmobileUnitCheck.module.css";

export default function ImmobileUnitCheck({
  handleImmobileUnitTrue,
  handleImmobileUnitFalse,
}) {
  return (
    <Box className={styles.container}>
      <h4>
        Is the unit <CustomTooltip keyword={immobile} />?
      </h4>

      <Box className={styles["buttons-container"]}>
        <CustomButton
          text="Yes"
          variant="contained"
          color="error"
          onClick={() => handleImmobileUnitTrue()}
        />
        <CustomButton
          text="No"
          variant="contained"
          color="success"
          onClick={() => handleImmobileUnitFalse()}
        />
      </Box>
    </Box>
  );
}
