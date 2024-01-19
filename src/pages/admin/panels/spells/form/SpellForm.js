import React, { useState, useEffect } from "react";
import CustomButton from "../../../../../components/ui/button/CustomButton";
import CustomAutocomplete from "../../../../../components/ui/autocomplete/CustomAutocomplete";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { useSpells } from "../../../../../context/spells/SpellsProvider";
import { useAlert } from "../../../../../context/alerts/AlertProvider";
import { useArmies } from "../../../../../context/armies/ArmyProvider";
import TextField from "@mui/material/TextField";
import LoadingBackdropSpinner from "../../../../../components/ui/loading/LoadingBackdropSpinner";
import styles from "./SpellForm.module.css";

export default function SpellForm({ id, handleClose }) {
  const { createAlert } = useAlert();
  const { getSpell, createSpell, editSpell } = useSpells();
  const { armies } = useArmies();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");
  const [description, setDescription] = useState("");
  const [army, setArmy] = useState(null);
  const [formTitle, setFormTitle] = useState("New Spell");

  useEffect(() => {
    if (id) {
      async function getSpellById() {
        setIsLoading(true);
        const spell = await getSpell(id);
        setName(spell.name);
        setValue(spell.value);
        setDescription(spell.description);
        setArmy(spell.army);
        setFormTitle(`Edit Spell: ${spell.name}`);
      }
      getSpellById();
      setIsLoading(false);
    }
  }, [getSpell, id]);

  function handleReset() {
    setName("");
    setValue("");
    setDescription("");
    setArmy(null);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!army) {
      createAlert("error", "Please select an army.");
      return;
    }

    const selectedArmy = {
      name: army?.name,
      description: army?.description,
      id: army?.id,
    };

    const spell = {
      name,
      value,
      description,
      army: selectedArmy,
    };

    try {
      setIsLoading(true);
      if (id) {
        await editSpell(id, spell);
        createAlert("success", `'${name}' successfully edited.`);
      } else {
        await createSpell(spell);
        createAlert("success", `'${name}' successfully created.`);
      }
      handleReset();
      handleClose();
    } catch (error) {
      createAlert("error", "Something went wrong. Please try again.");
    }
    setIsLoading(false);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {isLoading && <LoadingBackdropSpinner />}
      <h2 className={styles.title}>{formTitle}</h2>

      <CustomAutocomplete
        options={armies}
        label="Army"
        value={army}
        onChange={(event, newValue) => {
          setArmy(newValue);
        }}
      />

      <TextField
        type="text"
        value={name}
        label="Name"
        onChange={(e) => setName(e.target.value)}
        required
      />

      <TextField
        type="number"
        value={value}
        label="Value"
        inputProps={{ min: 1 }}
        sx={{ mt: 3 }}
        onChange={(e) => setValue(e.target.value)}
        required
      />

      <TextField
        multiline
        value={description}
        label="Description"
        sx={{ mt: 3, mb: 3 }}
        onChange={(e) => setDescription(e.target.value)}
        required
      />

      <div className={styles.buttonsContainer}>
        <CustomButton
          text="Reset"
          variant="outlined"
          color="error"
          icon={<RestartAltOutlinedIcon />}
          onClick={handleReset}
        />
        <CustomButton
          type="submit"
          text="Submit"
          variant="contained"
          color="primary"
          icon={<CheckCircleOutlineOutlinedIcon />}
        />
      </div>
    </form>
  );
}
