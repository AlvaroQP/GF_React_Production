import { Outlet } from "react-router-dom";
import spellsBanner from "../../../assets/images/spells-banner.png";
import styles from "./SpellsRootLayout.module.css";

export default function SpellsRootLayout() {
  return (
    <>
      <div>
        <img
          src={spellsBanner}
          alt="Spells"
          className={styles["spells-banner"]}
        />
      </div>

      <Outlet />
    </>
  );
}
