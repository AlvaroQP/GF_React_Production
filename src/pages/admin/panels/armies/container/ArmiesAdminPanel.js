import React, { useState, useEffect } from "react";
import CustomButton from "../../../../../components/ui/button/CustomButton";
import { useArmies } from "../../../../../context/armies/ArmyProvider";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useAlert } from "../../../../../context/alerts/AlertProvider";
import { Box } from "@mui/material";
import ArmyCard from "../../../../../components/ui/card/ArmyCard";
import GetArmyImage from "../../../../../utils/GetArmyImage";
import ArmyDialogs from "../dialogs/ArmyDialogs";
import styles from "./ArmiesAdminPanel.module.css";

export default function ArmiesAdminPanel() {
  const { armies, deleteArmyById } = useArmies();
  const { createAlert } = useAlert();
  const [openDialogs, setOpenDialogs] = useState({
    deleteArmy: false,
    newArmy: false,
    editArmy: false,
  });
  const [armyDetails, setArmyDetails] = useState({
    id: null,
    name: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleOpenDialog(dialogType, army = {}) {
    setArmyDetails({ id: army.id, name: army.name });
    setOpenDialogs((prevState) => ({ ...prevState, [dialogType]: true }));
  }

  function handleCloseDialog(dialogType) {
    setOpenDialogs((prevState) => ({ ...prevState, [dialogType]: false }));
  }

  function handleDeleteArmy() {
    try {
      deleteArmyById(armyDetails.id);
      createAlert("success", `'${armyDetails.name}' successfully deleted.`);
    } catch (error) {
      createAlert("error", "Something went wrong. Please try again.");
    }
    handleCloseDialog("deleteArmy");
  }

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CustomButton
        text="New Army"
        variant="contained"
        color="primary"
        icon={<AddCircleOutlineIcon />}
        onClick={() => handleOpenDialog("newArmy")}
      />

      <ArmyDialogs
        openDialogs={openDialogs}
        handleCloseDialog={handleCloseDialog}
        armyDetails={armyDetails}
        handleDeleteArmy={handleDeleteArmy}
      />

      <div className={styles["armies-container"]}>
        {armies.map((army) => {
          return (
            <ArmyCard
              key={army.id}
              id={army.id}
              armyName={army.name}
              armyImage={GetArmyImage(army.name)}
              armyDescription={army.description}
              adminArmyCard={true}
              handleOpenEditDialog={() => handleOpenDialog("editArmy", army)}
              handleOpenDeleteDialog={() =>
                handleOpenDialog("deleteArmy", army)
              }
              className={styles["army-card"]}
            />
          );
        })}
      </div>
    </Box>
  );
}
