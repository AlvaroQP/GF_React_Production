import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Box,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomAccordion from "../../../../../components/ui/accordion/CustomAccordion";
import CustomButton from "../../../../../components/ui/button/CustomButton";
import CustomDivider from "../../../../../components/ui/divider/CustomDivider";
import MoraleTestStepper from "./morale-test-stepper/MoraleTestStepper";
import { useGame } from "../../../../../context/game/GameProvider";

import styles from "./CasterDialog.module.css";

export default function CasterDialog({ open, setOpen }) {
  const { casters, updateCaster, playerA, playerB } = useGame();
  const [showButton, setShowButton] = useState(true);
  const [showMoraleTestStepper, setShowMoraleTestStepper] = useState(false);

  function handleClose() {
    setOpen(false);
  }

  function handleShowMoraleStepper() {
    setShowButton(false);
    setShowMoraleTestStepper(true);
  }

  function handleHideMoraleStepper() {
    setShowButton(true);
    setShowMoraleTestStepper(false);
  }

  const casterAccordionContent = (
    <ul className={styles.list}>
      <li>Casters can't hold more than 6 ST at once.</li>
      <li>
        <strong>In an activation, at any point before attacking:</strong> spend
        as many ST as the spell's value to try casting 1+ spells (one try per
        spell). This model and other casters within 18'' in line of sight may
        spend any number of ST at the same time before rolling, to give the
        caster +1/-1 to the roll per token.
      </li>
      <li>
        <strong>Roll one die</strong> -&gt; <strong> 4+:</strong> resolve the
        effect on a target in LOS.
      </li>
      <CustomDivider />
      <li>
        <span className={styles["after-spell-p"]}>
          <strong>After Casting a Spell:</strong>
        </span>{" "}
        <strong>
          Enemy unit &lt;= 50% of its starting size or Tough value?{" "}
        </strong>
        {showButton && (
          <div className={styles["morale-test-button-container"]}>
            <CustomButton
              text="Yes: Take Morale Test"
              variant="contained"
              color="success"
              onClick={handleShowMoraleStepper}
            />
          </div>
        )}
        {showMoraleTestStepper && (
          <MoraleTestStepper
            handleHideMoraleStepper={handleHideMoraleStepper}
          />
        )}
      </li>
    </ul>
  );

  function SpellsAccordionContent({ spells }) {
    return (
      <ul className={styles.list}>
        {spells.map((spell) => (
          <li key={spell.id}>
            <strong>
              {spell.name}({spell.value})
            </strong>
            : {spell.description}
          </li>
        ))}
      </ul>
    );
  }

  const playerASpellsAccordionContent = (
    <SpellsAccordionContent spells={playerA.spells} />
  );

  const playerBSpellsAccordionContent = (
    <SpellsAccordionContent spells={playerB.spells} />
  );

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle sx={{ textAlign: "center", position: "relative" }}>
        Casters & Spells
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 10,
            top: 8,
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <CustomAccordion
          title="Casting Spells"
          content={casterAccordionContent}
        />

        {playerA.army.name === playerB.army.name ? (
          <CustomAccordion
            title={`${playerA.army.name} Spells`}
            content={playerASpellsAccordionContent}
          />
        ) : (
          <>
            <CustomAccordion
              title={`${playerA.army.name} Spells`}
              content={playerASpellsAccordionContent}
            />

            <CustomAccordion
              title={`${playerB.army.name} Spells`}
              content={playerBSpellsAccordionContent}
            />
          </>
        )}

        <br />
        <CustomDivider />

        {casters.map((caster, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              mt: 2,
              mb: 2,
            }}
          >
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                label="Caster"
                value={caster.name}
                sx={{ mr: 2, width: "90%" }}
                onChange={(event) =>
                  updateCaster(
                    caster.id,
                    event.target.value,
                    caster.player,
                    caster.spellTokens
                  )
                }
              />
            </Box>

            <FormControl sx={{ width: "30%" }}>
              <InputLabel id="player">Player</InputLabel>
              <Select
                labelId="player"
                label="Player"
                value={caster.player}
                sx={{ mr: 2 }}
                onChange={(event) =>
                  updateCaster(
                    caster.id,
                    caster.name,
                    event.target.value,
                    caster.spellTokens
                  )
                }
              >
                <MenuItem key={playerA.id} value={playerA.name}>
                  {playerA.name}
                </MenuItem>
                <MenuItem key={playerB.id} value={playerB.name}>
                  {playerB.name}
                </MenuItem>
              </Select>
            </FormControl>

            <Box>
              <strong>ST</strong>
              <Select
                value={caster.spellTokens}
                onChange={(event) =>
                  updateCaster(
                    caster.id,
                    caster.name,
                    caster.player,
                    event.target.value
                  )
                }
                sx={{ ml: 1, mr: 1 }}
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={6}>6</MenuItem>
              </Select>
            </Box>
          </Box>
        ))}

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CustomButton
            text="Done"
            variant="contained"
            color="primary"
            onClick={handleClose}
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
}
