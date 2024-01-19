import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useGame } from "../../../context/game/GameProvider";
import { useArmies } from "../../../context/armies/ArmyProvider";
import CustomButton from "../../../components/ui/button/CustomButton";
import Alert from "@mui/material/Alert";
import { Select, MenuItem } from "@mui/material";
import CustomDivider from "../../../components/ui/divider/CustomDivider";
import styles from "./NewGameForm.module.css";

export default function NewGameForm() {
  const {
    playerA,
    playerB,
    updatePlayerName,
    updatePlayerArmy,
    updatePlayerSpellsAndAbilities,
    startGame,
  } = useGame();
  const { armies } = useArmies();

  const [showAlert, setShowAlert] = useState(false);

  async function handleStartGame() {
    if (playerA.name === "" || playerB.name === "") {
      setShowAlert(true);
    } else if (playerA.army === "" || playerB.army === "") {
      setShowAlert(true);
    } else {
      await updatePlayerSpellsAndAbilities();
      setShowAlert(false);
      startGame();
    }
  }

  return (
    <Box className={styles.container}>
      <Box className={styles["form-container"]}>
        <Box className={styles.title}>New Game</Box>

        <CustomDivider />

        {showAlert && (
          <Alert severity="error" sx={{ mb: 2, width: "93%" }}>
            Please, enter the players' names and armies.
          </Alert>
        )}

        <Box sx={{ width: "100%" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Player A
          </Typography>
          <TextField
            type="text"
            label="Name"
            value={playerA.name}
            required
            onChange={(event) => updatePlayerName("a", event.target.value)}
            sx={{
              width: "100%",
              mb: 3,
            }}
          />

          <FormControl fullWidth>
            <InputLabel id="army-select-a">Army</InputLabel>
            <Select
              labelId="army-select-a"
              value={playerA.army}
              label="Army"
              sx={{ width: "100%", mb: 3 }}
              onChange={(event) => updatePlayerArmy("a", event.target.value)}
            >
              {armies.map((army) => (
                <MenuItem key={army.id} value={army}>
                  {army.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <CustomDivider />

        <Box sx={{ width: "100%" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Player B
          </Typography>
          <TextField
            type="text"
            label="Name"
            value={playerB.name}
            required
            onChange={(event) => updatePlayerName("b", event.target.value)}
            sx={{ width: "100%", mb: 3 }}
          />

          <FormControl fullWidth>
            <InputLabel id="army-select-b">Army</InputLabel>
            <Select
              labelId="army-select-b"
              value={playerB.army}
              label="Army"
              sx={{ width: "100%", mb: 3 }}
              onChange={(event) => updatePlayerArmy("b", event.target.value)}
            >
              {armies.map((army) => (
                <MenuItem key={army.id} value={army}>
                  {army.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box>
          <CustomButton
            text="Start"
            variant="contained"
            color="primary"
            onClick={handleStartGame}
          />
        </Box>
      </Box>
    </Box>
  );
}
