import React, { useState, useEffect } from "react";
import CustomTable from "../../../../../components/ui/table/CustomTable";
import CustomButton from "../../../../../components/ui/button/CustomButton";
import { useSpells } from "../../../../../context/spells/SpellsProvider";
import { useArmies } from "../../../../../context/armies/ArmyProvider";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useAlert } from "../../../../../context/alerts/AlertProvider";
import CustomScrollableTabs from "../../../../../components/ui/tabs/general/CustomScrollableTabs";
import { Box } from "@mui/material";
import SpellDialogs from "../dialogs/SpellDialogs";

export default function SpellsAdminPanel() {
  const { spells, deleteSpellById } = useSpells();
  const { armies } = useArmies();
  const { createAlert } = useAlert();
  const [openDialogs, setOpenDialogs] = useState({
    deleteSpell: false,
    newSpell: false,
    editSpell: false,
  });
  const [spellDetails, setSpellDetails] = useState({
    id: 0,
    name: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleOpenDialog(dialogType, row = {}) {
    setSpellDetails({ id: row.id, name: row.name });
    setOpenDialogs((prevState) => ({ ...prevState, [dialogType]: true }));
  }

  function handleCloseDialog(dialogType) {
    setOpenDialogs((prevState) => ({ ...prevState, [dialogType]: false }));
  }

  function handleDeleteSpell() {
    try {
      deleteSpellById(spellDetails.id);
      createAlert("success", `'${spellDetails.name}' successfully deleted.`);
    } catch (error) {
      createAlert("error", "Something went wrong. Please try again.");
    }
    handleCloseDialog("deleteSpell");
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CustomButton
        text="New Spell"
        variant="contained"
        color="primary"
        icon={<AddCircleOutlineIcon />}
        onClick={() => handleOpenDialog("newSpell")}
      />

      <SpellDialogs
        openDialogs={openDialogs}
        handleCloseDialog={handleCloseDialog}
        spellDetails={spellDetails}
        handleDeleteSpell={handleDeleteSpell}
      />

      <CustomScrollableTabs
        tabs={[
          ...armies.map((army) => {
            const armySpells = spells
              .filter((spell) => spell.army.id === army.id)
              .map(({ id, name, description, ...rest }) => ({
                id,
                spell: name,
                description,
                ...rest,
              }));

            return {
              id: army.id,
              name: army.name,
              content:
                armySpells.length > 0 ? (
                  <CustomTable
                    rows={armySpells}
                    filterHeaders={["id", "army", "value"]}
                    onEdit={(row) => handleOpenDialog("editSpell", row)}
                    onDelete={(row) => handleOpenDialog("deleteSpell", row)}
                    adminTable={true}
                    spellTable={true}
                  />
                ) : (
                  <Box sx={{ width: "100%", textAlign: "center" }}>
                    No spells found
                  </Box>
                ),
            };
          }),
        ]}
      />
    </Box>
  );
}
