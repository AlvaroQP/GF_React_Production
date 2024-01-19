import React from "react";
import MiniDrawer from "../../../components/ui/drawer/MiniDrawer";
import armyIcon from "../../../assets/icons/armies.png";
import keywordIcon from "../../../assets/icons/keywords.png";
import spellIcon from "../../../assets/icons/spells.png";
import ArmiesAdminPanel from "../panels/armies/container/ArmiesAdminPanel";
import KeywordsAdminPanel from "../panels/keywords/container/KeywordsAdminPanel";
import SpellsAdminPanel from "../panels/spells/container/SpellsAdminPanel";
import styles from "./AdminPanelContainer.module.css";

export default function AdminPanel() {
  const icons = [armyIcon, keywordIcon, spellIcon];
  const content = [
    <ArmiesAdminPanel />,
    <KeywordsAdminPanel />,
    <SpellsAdminPanel />,
  ];

  return (
    <MiniDrawer
      drawerTitle="Admin Panel"
      listLabels={["Armies", "Keywords", "Spells"]}
      listIcons={icons.map((icon) => (
        <img src={icon} alt="icon" className={styles.icons} />
      ))}
      listContent={content}
    />
  );
}
