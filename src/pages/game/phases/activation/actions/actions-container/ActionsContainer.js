import React, { useState } from "react";
import Hold from "../hold/Hold";
import Advance from "../advance/Advance";
import Rush from "../rush/Rush";
import Charge from "../charge/Charge";
import CustomButton from "../../../../../../components/ui/button/CustomButton";
import BoyIcon from "@mui/icons-material/Boy";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import chargeIcon from "../../../../../../assets/icons/charge.svg";
import styles from "./ActionsContainer.module.css";

export default function ActionsContainer({ handleEndActivation }) {
  const [action, setAction] = useState(null);

  function handleShowHold() {
    setAction("hold");
  }

  function handleShowAdvance() {
    setAction("advance");
  }

  function handleShowRush() {
    setAction("rush");
  }

  function handleShowCharge() {
    setAction("charge");
  }

  return (
    <div className={styles.container}>
      {!action && (
        <>
          <h4 className={styles.title}>Select an Action</h4>
          <div className={styles["buttons-container"]}>
            <CustomButton
              text="Hold"
              variant="contained"
              color="primary"
              icon={<BoyIcon />}
              onClick={handleShowHold}
            />
            <CustomButton
              text="Advance (6'')"
              variant="contained"
              color="primary"
              icon={<DirectionsWalkIcon />}
              onClick={handleShowAdvance}
            />
            <CustomButton
              text="Rush (12'')"
              variant="contained"
              color="primary"
              icon={<DirectionsRunIcon />}
              onClick={handleShowRush}
            />
            <CustomButton
              text="Charge (12'')"
              variant="contained"
              color="primary"
              icon={<img src={chargeIcon} alt="charge" />}
              onClick={handleShowCharge}
            />
          </div>
        </>
      )}

      {action === "hold" && <Hold handleEndActivation={handleEndActivation} />}
      {action === "advance" && (
        <Advance handleEndActivation={handleEndActivation} />
      )}
      {action === "rush" && <Rush handleEndActivation={handleEndActivation} />}
      {action === "charge" && (
        <Charge handleEndActivation={handleEndActivation} />
      )}
    </div>
  );
}
