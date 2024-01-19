import React, { useState, useEffect } from "react";
import CustomTable from "../../../../../components/ui/table/CustomTable";
import CustomButton from "../../../../../components/ui/button/CustomButton";
import { useKeywords } from "../../../../../context/keywords/KeywordsProvider";
import { useArmies } from "../../../../../context/armies/ArmyProvider";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useAlert } from "../../../../../context/alerts/AlertProvider";
import CustomScrollableTabs from "../../../../../components/ui/tabs/general/CustomScrollableTabs";
import { Box } from "@mui/material";
import KeywordDialogs from "../dialogs/KeywordDialogs";

export default function KeywordsAdminPanel() {
  const { keywords, deleteKeywordById } = useKeywords();
  const { armies } = useArmies();
  const { createAlert } = useAlert();
  const [openDialogs, setOpenDialogs] = useState({
    deleteKeyword: false,
    newKeyword: false,
    editKeyword: false,
  });
  const [keywordDetails, setKeywordDetails] = useState({
    id: 0,
    name: "",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function handleOpenDialog(dialogType, row = {}) {
    setKeywordDetails({ id: row.id, name: row.keyword });
    setOpenDialogs((prevState) => ({ ...prevState, [dialogType]: true }));
  }

  function handleCloseDialog(dialogType) {
    setOpenDialogs((prevState) => ({ ...prevState, [dialogType]: false }));
  }

  function handleDeleteKeyword() {
    try {
      deleteKeywordById(keywordDetails.id);
      createAlert("success", `'${keywordDetails.name}' successfully deleted.`);
    } catch (error) {
      createAlert("error", "Something went wrong. Please try again.");
    }
    handleCloseDialog("deleteKeyword");
  }

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CustomButton
        text="New Keyword"
        variant="contained"
        color="primary"
        icon={<AddCircleOutlineIcon />}
        onClick={() => handleOpenDialog("newKeyword")}
      />

      <KeywordDialogs
        openDialogs={openDialogs}
        handleCloseDialog={handleCloseDialog}
        keywordDetails={keywordDetails}
        handleDeleteKeyword={handleDeleteKeyword}
      />

      <CustomScrollableTabs
        tabs={[
          {
            id: 0,
            name: "Universal",
            content: (
              <CustomTable
                rows={keywords.filter(
                  (keyword) => keyword.idArmy === "universal"
                )}
                filterHeaders={["id", "idArmy"]}
                onEdit={(row) => handleOpenDialog("editKeyword", row)}
                onDelete={(row) => handleOpenDialog("deleteKeyword", row)}
                adminTable={true}
              />
            ),
          },

          ...armies.map((army) => {
            const armyKeywords = keywords.filter(
              (keyword) => keyword.idArmy === army.id
            );
            return {
              id: army.id,
              name: army.name,
              content:
                armyKeywords.length > 0 ? (
                  <CustomTable
                    rows={armyKeywords}
                    filterHeaders={["id", "idArmy"]}
                    onEdit={(row) => handleOpenDialog("editKeyword", row)}
                    onDelete={(row) => handleOpenDialog("deleteKeyword", row)}
                    adminTable={true}
                  />
                ) : (
                  <Box sx={{ width: "100%", textAlign: "center" }}>
                    No keywords found
                  </Box>
                ),
            };
          }),
        ]}
      />
    </Box>
  );
}
