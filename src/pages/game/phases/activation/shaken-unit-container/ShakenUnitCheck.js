import React from "react";
import { Box } from "@mui/material";
import CustomButton from "../../../../../components/ui/button/CustomButton";
import styles from "./ShakenUnitCheck.module.css";

export default function ShakenUnitCheck({
  handleShakenUnitTrue,
  handleShakenUnitFalse,
}) {
  return (
    <Box className={styles.container}>
      <h4>Is the unit Shaken? 🚩</h4>

      <Box className={styles["buttons-container"]}>
        <CustomButton
          text="Yes"
          variant="contained"
          color="error"
          onClick={() => handleShakenUnitTrue()}
        />
        <CustomButton
          text="No"
          variant="contained"
          color="success"
          onClick={() => handleShakenUnitFalse()}
        />
      </Box>
    </Box>
  );
}
