import React, { useState } from "react";
import { Box } from "@mui/material";
import ArmyAbilities from "../../../utilities/army-abilities/ArmyAbilities";
import CustomButton from "../../../../../components/ui/button/CustomButton";
import ShakenUnitCheck from "../shaken-unit-container/ShakenUnitCheck";
import ImmobileUnitCheck from "../immobile-unit-container/ImmobileUnitCheck";
import ActionsContainer from "../actions/actions-container/ActionsContainer";
import Hold from "../actions/hold/Hold";

export default function Activation() {
  const [isActivating, setIsActivating] = useState(false);
  const [isUnitShaken, setIsUnitShaken] = useState(false);
  const [isImmobile, setIsImmobile] = useState(false);
  const [shakeCheckEnded, setShakeCheckEnded] = useState(false);
  const [immobileCheckEnded, setImmobileCheckEnded] = useState(false);
  const [showActions, setShowActions] = useState(false);

  function handleStartActivation() {
    setIsActivating(true);
    setShakeCheckEnded(false);
    setShowActions(false);
  }

  function handleEndActivation() {
    setIsActivating(false);
    setIsUnitShaken(false);
    setIsImmobile(false);
    setShakeCheckEnded(false);
    setImmobileCheckEnded(false);
    setShowActions(false);
  }

  function handleShakenUnitTrue() {
    setIsUnitShaken(true);
    setShowActions(false);
  }

  function handleShakenUnitFalse() {
    setIsUnitShaken(false);
    setShakeCheckEnded(true);
    setShowActions(true);
  }

  function handleEndShake() {
    setShakeCheckEnded(true);
    handleEndActivation();
  }

  function handleImmobileUnitTrue() {
    setIsImmobile(true);
    setImmobileCheckEnded(true);
  }

  function handleImmobileUnitFalse() {
    setIsImmobile(false);
    setImmobileCheckEnded(true);
  }

  return (
    <>
      {showActions && !isImmobile && immobileCheckEnded && (
        <>
          <ArmyAbilities />
          <ActionsContainer handleEndActivation={handleEndActivation} />
        </>
      )}

      {showActions && isImmobile && immobileCheckEnded && (
        <>
          <ArmyAbilities />
          <Hold handleEndActivation={handleEndActivation} />
        </>
      )}

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {!isActivating && (
          <CustomButton
            text="New Activation"
            variant="contained"
            color="success"
            onClick={handleStartActivation}
          />
        )}
      </Box>

      {isActivating && !isUnitShaken && !showActions && (
        <ShakenUnitCheck
          handleShakenUnitTrue={handleShakenUnitTrue}
          handleShakenUnitFalse={handleShakenUnitFalse}
        />
      )}

      {isUnitShaken && !shakeCheckEnded && !showActions && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h4>Use Activation to end Shake - Remove Marker 🚩</h4>
          <CustomButton
            text="End Activation"
            variant="contained"
            color="primary"
            onClick={handleEndShake}
          />
        </Box>
      )}

      {isActivating &&
        !isUnitShaken &&
        shakeCheckEnded &&
        !immobileCheckEnded &&
        !isImmobile && (
          <ImmobileUnitCheck
            handleImmobileUnitTrue={handleImmobileUnitTrue}
            handleImmobileUnitFalse={handleImmobileUnitFalse}
          />
        )}
    </>
  );
}
