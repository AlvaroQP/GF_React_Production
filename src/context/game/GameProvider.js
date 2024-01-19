import React, { createContext, useState, useContext } from "react";
import { useKeywords } from "../keywords/KeywordsProvider";
import { useSpells } from "../spells/SpellsProvider";

const GameContext = createContext();

export function GameProvider({ children }) {
  const [playingGame, setPlayingGame] = useState(false);
  const [roundNumber, setRoundNumber] = useState(1);
  const [activeTab, setActiveTab] = useState(1);
  const { getOncePerActivationKeywords, getOncePerGameKeywords } =
    useKeywords();
  const { getByArmyId } = useSpells();
  const [playerA, setPlayerA] = useState({
    name: "",
    army: "",
    spells: [],
    oncePerActivationAbilities: [],
    oncePerGameAbilities: [],
  });

  const [playerB, setPlayerB] = useState({
    name: "",
    army: "",
    spells: [],
    oncePerActivationAbilities: [],
    oncePerGameAbilities: [],
  });

  const [casters, setCasters] = useState(
    Array(6)
      .fill()
      .map((_, i) => ({
        id: i + 1,
        name: "",
        player: "",
        spellTokens: 0,
      }))
  );

  const [objectiveMarkers, setObjectiveMarkers] = useState(
    Array(5)
      .fill()
      .map((_, i) => ({
        id: i + 1,
        name: `OM ${i + 1}`,
        seizedBy: "Neutral",
      }))
  );

  function handleRoundChange(event) {
    setRoundNumber(event.target.value);
  }

  function updateCaster(id, newName, newPlayer, newTokens) {
    setCasters((prevCasters) =>
      prevCasters.map((caster) =>
        caster.id === id
          ? {
              ...caster,
              name: newName,
              player: newPlayer,
              spellTokens: newTokens,
            }
          : caster
      )
    );
  }

  function updateObjectiveMarker(id, newSeizedBy) {
    setObjectiveMarkers((prevObjectiveMarkers) =>
      prevObjectiveMarkers.map((objectiveMarker) =>
        objectiveMarker.id === id
          ? { ...objectiveMarker, seizedBy: newSeizedBy }
          : objectiveMarker
      )
    );
  }

  function updatePlayerName(player, newName) {
    if (player === "a") {
      setPlayerA({
        ...playerA,
        name: newName,
      });
    } else {
      setPlayerB({
        ...playerB,
        name: newName,
      });
    }
  }

  function updatePlayerArmy(player, newArmy) {
    if (player === "a") {
      setPlayerA({
        ...playerA,
        army: newArmy,
      });
    } else {
      setPlayerB({
        ...playerB,
        army: newArmy,
      });
    }
  }

  async function updatePlayerSpellsAndAbilities() {
    setPlayerA({
      ...playerA,
      spells: await getByArmyId(playerA.army.id),
      oncePerActivationAbilities: await getOncePerActivationKeywords(
        playerA.army.id
      ),
      oncePerGameAbilities: await getOncePerGameKeywords(playerA.army.id),
    });

    setPlayerB({
      ...playerB,
      spells: await getByArmyId(playerB.army.id),
      oncePerActivationAbilities: await getOncePerActivationKeywords(
        playerB.army.id
      ),
      oncePerGameAbilities: await getOncePerGameKeywords(playerB.army.id),
    });
  }

  function handleTabChange(newTab) {
    setActiveTab(newTab);
  }

  function startGame() {
    setPlayingGame(true);
  }

  function nextRound() {
    setRoundNumber(roundNumber + 1);
  }

  function endGame() {
    setPlayingGame(false);
    setRoundNumber(1);
    setActiveTab(1);
    setPlayerA({
      name: "",
      army: "",
      spells: [],
      oncePerActivationAbilities: [],
      oncePerGameAbilities: [],
    });
    setPlayerB({
      name: "",
      army: "",
      spells: [],
      oncePerActivationAbilities: [],
      oncePerGameAbilities: [],
    });
    setCasters(
      Array(6)
        .fill()
        .map((_, i) => ({
          id: i + 1,
          name: "",
          player: "",
          spellTokens: 0,
        }))
    );
    setObjectiveMarkers(
      Array(5)
        .fill()
        .map((_, i) => ({
          id: i + 1,
          name: `OM ${i + 1}`,
          seizedBy: "Neutral",
        }))
    );
  }

  return (
    <GameContext.Provider
      value={{
        roundNumber,
        handleRoundChange,
        casters,
        updateCaster,
        objectiveMarkers,
        updateObjectiveMarker,
        playerA,
        playerB,
        updatePlayerName,
        updatePlayerArmy,
        updatePlayerSpellsAndAbilities,
        playingGame,
        startGame,
        nextRound,
        endGame,
        activeTab,
        handleTabChange,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
}
