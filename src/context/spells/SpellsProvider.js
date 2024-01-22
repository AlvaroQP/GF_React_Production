import React, { createContext, useState, useContext, useEffect } from "react";
import {
  getSpells,
  getSpellById,
  getSpellsByArmyId,
  postSpell,
  putSpell,
  deleteSpell,
} from "../../api/requests/spells/SpellRequests";

const SpellContext = createContext();

export function SpellProvider({ children }) {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    getAllSpells();
  }, []);

  async function getAllSpells() {
    const spells = (await getSpells()).sort((a, b) => {
      if (a.value !== b.value) {
        return a.value - b.value;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
    setSpells(spells);
  }

  async function getSpell(id) {
    return getSpellById(id);
  }

  async function getByArmyId(id) {
    const spells = await getSpellsByArmyId(id);
    return spells.sort((a, b) => {
      if (a.value !== b.value) {
        return a.value - b.value;
      } else {
        return a.name.localeCompare(b.name);
      }
    });
  }

  async function createSpell(spell) {
    await postSpell(spell);
    await getAllSpells();
  }

  async function editSpell(id, spell) {
    await putSpell(id, spell);
    await getAllSpells();
  }

  async function deleteSpellById(id) {
    await deleteSpell(id);
    await getAllSpells();
  }

  return (
    <SpellContext.Provider
      value={{
        spells,
        getAllSpells,
        getSpell,
        getByArmyId,
        createSpell,
        editSpell,
        deleteSpellById,
      }}
    >
      {children}
    </SpellContext.Provider>
  );
}

export function useSpells() {
  const context = useContext(SpellContext);
  if (context === undefined) {
    throw new Error("useSpells must be used within a SpellProvider");
  }
  return context;
}
