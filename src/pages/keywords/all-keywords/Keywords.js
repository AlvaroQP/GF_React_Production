import React, { useEffect } from "react";
import CustomTable from "../../../components/ui/table/CustomTable";
import { useKeywords } from "../../../context/keywords/KeywordsProvider";
import { useArmies } from "../../../context/armies/ArmyProvider";
import CustomScrollableTabs from "../../../components/ui/tabs/general/CustomScrollableTabs";
import { Box } from "@mui/material";

export default function Keywords() {
  const { keywords } = useKeywords();
  const { armies } = useArmies();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
  );
}
