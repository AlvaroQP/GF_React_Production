import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import styles from "./ArmyCard.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

export default function ArmyCard(props) {
  const {
    armyName,
    armyImage,
    armyDescription,
    adminArmyCard,
    handleOpenEditDialog,
    handleOpenDeleteDialog,
  } = props;

  return (
    <Card sx={{ maxWidth: 345, minHeight: 350 }}>
      <CardMedia
        component="img"
        height="190"
        image={armyImage}
        alt={armyName}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", textAlign: "center" }}
        >
          {armyName}
        </Typography>
        <Typography variant="body2" sx={{ textAlign: "justify" }}>
          {armyDescription}
        </Typography>

        {adminArmyCard && (
          <div className={styles["edit-delete-container"]}>
            <Tooltip
              title="Edit"
              placement="top"
              className={styles["edit-tooltip"]}
            >
              <IconButton
                aria-label="edit"
                size="small"
                onClick={handleOpenEditDialog}
              >
                <EditOutlinedIcon className={styles.edit} />
              </IconButton>
            </Tooltip>
            <Tooltip
              title="Delete"
              placement="top"
              className={styles["delete-tooltip"]}
            >
              <IconButton
                aria-label="delete"
                size="small"
                onClick={handleOpenDeleteDialog}
              >
                <DeleteOutlineIcon className={styles.delete} />
              </IconButton>
            </Tooltip>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
