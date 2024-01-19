import PlayersPanel from "../utilities/players-panel/PlayersPanel";
import UtilityPanel from "../utilities/utility-panel/UtilityPanel";
import GameScrollableTabs from "../../../components/ui/tabs/game/GameScrollableTabs";
import Preparation from "../phases/preparation/Preparation";
import Deployment from "../phases/deployment/Deployment";
import BeginningOfRound from "../phases/beginning-of-round/BeginningOfRound";
import Activation from "../phases/activation/activation-container/Activation";
import EndOfRound from "../phases/end-of-round/EndOfRound";
import NewGameForm from "../new-game-form/NewGameForm";
import { useGame } from "../../../context/game/GameProvider";

export default function GameContainer() {
  const { playingGame, activeTab, handleTabChange } = useGame();

  const tabs = [
    { id: 1, name: "Preparation", content: <Preparation /> },
    { id: 2, name: "Deployment", content: <Deployment /> },
    { id: 3, name: "Beginning of Round", content: <BeginningOfRound /> },
    { id: 4, name: "Activation", content: <Activation /> },
    { id: 5, name: "End of Round", content: <EndOfRound /> },
  ];

  return (
    <>
      {playingGame ? (
        <>
          <PlayersPanel />
          <UtilityPanel />
          <GameScrollableTabs
            tabs={tabs}
            activeTab={activeTab}
            handleTabChange={handleTabChange}
          />
        </>
      ) : (
        <NewGameForm />
      )}
    </>
  );
}
