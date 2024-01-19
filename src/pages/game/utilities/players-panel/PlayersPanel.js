import React from "react";
import { useGame } from "../../../../context/game/GameProvider";
import styles from "./PlayersPanel.module.css";

export default function PlayersPanel() {
  const { playerA, playerB } = useGame();

  return (
    <div className={styles.container}>
      {`${playerA.name} (${playerA.army.name})`} vs.{" "}
      {`${playerB.name} (${playerB.army.name})`}
    </div>
  );
}
