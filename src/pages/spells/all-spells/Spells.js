import React, { useEffect } from "react";
import CustomTable from "../../../components/ui/table/CustomTable";
import { useSpells } from "../../../context/spells/SpellsProvider";
import { useArmies } from "../../../context/armies/ArmyProvider";
import CustomScrollableTabs from "../../../components/ui/tabs/general/CustomScrollableTabs";
import { Box } from "@mui/material";

export default function Spells() {
  const { spells } = useSpells();
  const { armies } = useArmies();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CustomScrollableTabs
      tabs={[
        ...armies.map((army) => {
          const armySpells = spells.filter(
            (spell) => spell.army.id === army.id
          );

          return {
            id: army.id,
            name: army.name,
            content:
              armySpells.length > 0 ? (
                <CustomTable
                  rows={armySpells}
                  filterHeaders={["id", "idArmy", "value"]}
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
  );
}
