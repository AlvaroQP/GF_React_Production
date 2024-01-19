import React, { useState } from "react";
import CustomButton from "../../components/ui/button/CustomButton";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useAlert } from "../../context/alerts/AlertProvider";
import { useAuth } from "../firebase/AuthProvider";
import AuthFormAlert from "../../components/ui/alert/AuthFormAlert";
import PasswordRegex from "../../utils/PasswordRegex";
import Box from "@mui/material/Box";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LoadingBackdropSpinner from "../../components/ui/loading/LoadingBackdropSpinner";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import styles from "./Signup.module.css";

export default function Signup() {
  const { signup } = useAuth();
  const { createAlert } = useAlert();
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [error, setError] = useState(null);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSignup(e) {
    e.preventDefault();
    setIsSigningUp(true);

    if (password !== passwordConfirmation) {
      setIsSigningUp(false);
      return setError("Passwords do not match.");
    } else if (!PasswordRegex().test(password)) {
      setIsSigningUp(false);
      return setError(
        "Password must be at least 6 characters, include at least one uppercase character and one special symbol."
      );
    }

    try {
      const userCredential = await signup(email, password, displayName);
      createAlert("success", `Welcome, ${userCredential.user.displayName}!`);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("The email address is already in use by another account.");
      } else {
        setError("Could not create account. Please try again later.");
      }
    } finally {
      setIsSigningUp(false);
    }
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <form onSubmit={handleSignup} className={styles.form}>
      <h2 className={styles["form-title"]}>Sign Up</h2>
      <Box sx={{ width: "100%", border: ".5px solid #9f9f9f" }} />

      {error && <AuthFormAlert severity="error" message={error} />}
      {isSigningUp && <LoadingBackdropSpinner />}

      <TextField
        type="text"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
        label="Name"
        variant="filled"
        required
        sx={{ backgroundColor: "white", mt: 2 }}
      />
      <TextField
        type="email"
        value={email}
        label="Email"
        variant="filled"
        required
        sx={{ backgroundColor: "white", mt: 2 }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <TextField
        type={showPassword ? "text" : "password"}
        value={password}
        label="Password"
        variant="filled"
        required
        sx={{ backgroundColor: "white" }}
        onChange={(e) => setPassword(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <br />
      <TextField
        type={showPassword ? "text" : "password"}
        value={passwordConfirmation}
        label="Confirm Password"
        variant="filled"
        required
        sx={{ backgroundColor: "white", mb: 3 }}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
      />
      <CustomButton
        variant="contained"
        color="success"
        text="Create Account"
        icon={<PersonAddIcon />}
        type="submit"
      />
      <br />
    </form>
  );
}
