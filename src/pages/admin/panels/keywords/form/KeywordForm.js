import React, { useState, useEffect } from "react";
import CustomButton from "../../../../../components/ui/button/CustomButton";
import CustomAutocomplete from "../../../../../components/ui/autocomplete/CustomAutocomplete";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useAlert } from "../../../../../context/alerts/AlertProvider";
import { useKeywords } from "../../../../../context/keywords/KeywordsProvider";
import { useArmies } from "../../../../../context/armies/ArmyProvider";
import globeIcon from "../../../../../assets/icons/globe.png";
import armyIcon from "../../../../../assets/icons/armies.png";
import TextField from "@mui/material/TextField";
import LoadingBackdropSpinner from "../../../../../components/ui/loading/LoadingBackdropSpinner";
import styles from "./KeywordForm.module.css";

export default function KeywordForm({ id, handleClose }) {
  const { createAlert } = useAlert();
  const { getKeyword, createKeyword, editKeyword } = useKeywords();
  const { armies } = useArmies();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [idArmy, setIdArmy] = useState(0);
  const [isUniversal, setIsUniversal] = useState(true);
  const [formTitle, setFormTitle] = useState("New Keyword");

  useEffect(() => {
    if (id) {
      async function getKeywordById() {
        setIsLoading(true);
        const keyword = await getKeyword(id);
        setName(keyword.name);
        setDescription(keyword.description);
        setIdArmy(keyword.idArmy);
        setFormTitle(`Edit Keyword: ${keyword.name}`);
      }
      getKeywordById();
      setIsLoading(false);
    }
  }, [getKeyword, id]);

  function handleReset() {
    setName("");
    setDescription("");
    setIdArmy(0);
    setIsUniversal(true);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (idArmy === null) {
      createAlert("error", "Please select an army.");
      return;
    }

    const keyword = {
      name,
      description,
      idArmy: isUniversal ? "universal" : idArmy.id,
    };

    try {
      setIsLoading(true);
      if (id) {
        await editKeyword(id, keyword);
        createAlert("success", `'${name}' successfully edited.`);
      } else {
        await createKeyword(keyword);
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

      <ToggleButtonGroup
        value={isUniversal}
        exclusive
        onChange={(event, newValue) => {
          if (newValue !== null) {
            setIsUniversal(newValue);
            setIdArmy(null);
          }
        }}
        sx={{ m: "1rem 0", display: "flex", justifyContent: "center" }}
      >
        <ToggleButton value={true}>
          <img src={globeIcon} alt="globe" className={styles.icon} />
          Universal
        </ToggleButton>
        <ToggleButton value={false}>
          <img src={armyIcon} alt="army" className={styles.icon} />
          Army Specific
        </ToggleButton>
      </ToggleButtonGroup>

      {isUniversal ? null : (
        <CustomAutocomplete
          options={armies}
          label="Army"
          value={idArmy}
          onChange={(event, value) => setIdArmy(value)}
          required
        />
      )}

      <TextField
        type="text"
        value={name}
        label="Name"
        sx={{ mt: 2 }}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <TextField
        multiline
        value={description}
        label="Description"
        sx={{ mt: 2, mb: 3 }}
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
