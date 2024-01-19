import { Outlet } from "react-router-dom";
import armiesBanner from "../../../assets/images/armies-banner.png";
import styles from "./ArmiesRootLayout.module.css";

export default function ArmiesRootLayout() {
  return (
    <>
      <div>
        <img
          src={armiesBanner}
          alt="Armies"
          className={styles["armies-banner"]}
        />
      </div>

      <Outlet />
    </>
  );
}
