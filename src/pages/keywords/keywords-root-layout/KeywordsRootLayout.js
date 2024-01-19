import { Outlet } from "react-router-dom";
import keywordsBanner from "../../../assets/images/keywords-banner.png";
import styles from "./KeywordsRootLayout.module.css";

export default function KeywordsRootLayout() {
  return (
    <>
      <div>
        <img
          src={keywordsBanner}
          alt="Keywords"
          className={styles["keywords-banner"]}
        />
      </div>

      <Outlet />
    </>
  );
}
