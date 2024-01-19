import Tooltip from "@mui/material/Tooltip";
import styles from "./CustomTooltip.module.css";

export default function CustomTooltip({ keyword }) {
  return (
    <Tooltip
      title={<div className={styles["tooltip-content"]}>{keyword.content}</div>}
      placement="top-start"
    >
      <span className={styles["tooltip-title"]}>{keyword.title}</span>
    </Tooltip>
  );
}
