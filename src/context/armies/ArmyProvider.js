import React, { createContext, useState, useContext, useEffect } from "react";
import {
  getArmies,
  getArmyById,
  postArmy,
  putArmy,
  deleteArmy,
} from "../../api/requests/armies/ArmyRequests";

const ArmyContext = createContext();

export function ArmyProvider({ children }) {
  const [armies, setArmies] = useState([]);

  useEffect(() => {
    getAllArmies();
  }, []);

  async function getAllArmies() {
    const armies = (await getArmies()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setArmies(armies);
  }

  async function getArmy(id) {
    return getArmyById(id);
  }

  async function createArmy(army) {
    await postArmy(army);
    await getAllArmies();
  }

  async function editArmy(id, army) {
    await putArmy(id, army);
    await getAllArmies();
  }

  async function deleteArmyById(id) {
    await deleteArmy(id);
    await getAllArmies();
  }

  return (
    <ArmyContext.Provider
      value={{
        armies,
        getAllArmies,
        getArmy,
        createArmy,
        editArmy,
        deleteArmyById,
      }}
    >
      {children}
    </ArmyContext.Provider>
  );
}

export function useArmies() {
  const context = useContext(ArmyContext);
  if (context === undefined) {
    throw new Error("useArmy must be used within an ArmyProvider");
  }
  return context;
}
