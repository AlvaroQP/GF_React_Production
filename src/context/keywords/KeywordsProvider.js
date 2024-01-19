import React, { createContext, useState, useContext, useEffect } from "react";
import {
  getKeywords,
  getKeywordById,
  getKeywordsByArmyId,
  getUniversalKeywords,
  postKeyword,
  putKeyword,
  deleteKeyword,
} from "../../api/requests/keywords/KeywordRequests";

const KeywordContext = createContext();

export function KeywordProvider({ children }) {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    getAllKeywords();
  }, []);

  async function getAllKeywords() {
    const keywords = (await getKeywords())
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((keyword) => ({
        id: keyword.id,
        keyword: keyword.name,
        description: keyword.description,
        idArmy: keyword.idArmy,
      }));
    setKeywords(keywords);
  }

  async function getKeyword(id) {
    return getKeywordById(id);
  }

  async function getByArmyId(id) {
    return getKeywordsByArmyId(id);
  }

  async function getByUniversal() {
    return getUniversalKeywords();
  }

  async function createKeyword(keyword) {
    await postKeyword(keyword);
    await getAllKeywords();
  }

  async function editKeyword(id, keyword) {
    await putKeyword(id, keyword);
    await getAllKeywords();
  }

  async function deleteKeywordById(id) {
    await deleteKeyword(id);
    await getAllKeywords();
  }

  async function getOncePerActivationKeywords(armyId) {
    const keywords = await getByArmyId(armyId);
    const oncePerActivationKeywords = keywords.filter((keyword) =>
      keyword.description.toLowerCase().includes("once per activation")
    );
    return oncePerActivationKeywords;
  }

  async function getOncePerGameKeywords(armyId) {
    const keywords = await getByArmyId(armyId);
    const oncePerGameKeywords = keywords.filter((keyword) =>
      keyword.description.toLowerCase().includes("once per game")
    );
    return oncePerGameKeywords;
  }

  return (
    <KeywordContext.Provider
      value={{
        keywords,
        getAllKeywords,
        getKeyword,
        getByArmyId,
        getByUniversal,
        createKeyword,
        editKeyword,
        deleteKeywordById,
        getOncePerGameKeywords,
        getOncePerActivationKeywords,
      }}
    >
      {children}
    </KeywordContext.Provider>
  );
}

export function useKeywords() {
  const context = useContext(KeywordContext);
  if (context === undefined) {
    throw new Error("useKeywords must be used within a KeywordsProvider");
  }
  return context;
}
