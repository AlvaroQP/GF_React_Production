import React, { useState, useEffect } from "react";
import CustomButton from "../../../../../components/ui/button/CustomButton";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import RestartAltOutlinedIcon from "@mui/icons-material/RestartAltOutlined";
import { useAlert } from "../../../../../context/alerts/AlertProvider";
import { useArmies } from "../../../../../context/armies/ArmyProvider";
import TextField from "@mui/material/TextField";
import LoadingBackdropSpinner from "../../../../../components/ui/loading/LoadingBackdropSpinner";
import styles from "./ArmyForm.module.css";

export default function ArmyFormContainer({ id, handleClose }) {
  const { createAlert } = useAlert();
  const { getArmy, createArmy, editArmy } = useArmies();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [formTitle, setFormTitle] = useState("New Army");

  useEffect(() => {
    if (id) {
      async function getArmyById() {
        setIsLoading(true);
        const army = await getArmy(id);
        setName(army.name);
        setDescription(army.description);
        setFormTitle(`Edit Army: ${army.name}`);
      }
      getArmyById();
      setIsLoading(false);
    }
  }, [getArmy, id]);

  function handleReset() {
    setName("");
    setDescription("");
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const army = { name, description };

    try {
      setIsLoading(true);
      if (id) {
        await editArmy(id, army);
        createAlert("success", `'${name}' successfully edited.`);
      } else {
        await createArmy(army);
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
      <TextField
        type="text"
        value={name}
        label="Name"
        required
        sx={{ mt: 2 }}
        onChange={(e) => setName(e.target.value)}
      />

      <TextField
        multiline
        value={description}
        label="Description"
        required
        sx={{ mt: 3, mb: 3 }}
        onChange={(e) => setDescription(e.target.value)}
      />

      <div className={styles.buttonsContainer}>
        <CustomButton
          text="Reset"
          variant="outlined"
          color="error"
          icon={<RestartAltOutlinedIcon />}
          onClick={() => handleReset()}
        />
        <CustomButton
          text="Submit"
          type="submit"
          variant="contained"
          icon={<CheckCircleOutlineOutlinedIcon />}
          color="primary"
        />
      </div>
    </form>
  );
}
