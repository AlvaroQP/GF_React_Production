import React, { useState } from "react";
import CustomButton from "../../components/ui/button/CustomButton";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { useAlert } from "../../context/alerts/AlertProvider";
import { useAuth } from "../firebase/AuthProvider";
import Box from "@mui/material/Box";
import AuthFormAlert from "../../components/ui/alert/AuthFormAlert";
import googleIcon from "../../assets/icons/google-icon.png";
import LoginIcon from "@mui/icons-material/Login";
import LoadingBackdropSpinner from "../../components/ui/loading/LoadingBackdropSpinner";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import styles from "./Login.module.css";

export default function Login() {
  const { login, loginWithGoogle } = useAuth();
  const { createAlert } = useAlert();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setIsLoggingIn(true);
    try {
      const userCredential = await login(email, password);
      createAlert("success", `Welcome, ${userCredential.user.displayName}!`);
      navigate("/");
    } catch (error) {
      setError("Invalid email or password.");
      setEmail("");
      setPassword("");
    } finally {
      setIsLoggingIn(false);
    }
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  return (
    <form onSubmit={handleLogin} className={styles.form}>
      <h2 className={styles["form-title"]}>Log In</h2>
      <Box sx={{ width: "100%", border: ".5px solid #9f9f9f" }} />

      {error && <AuthFormAlert severity="error" message={error} />}
      {isLoggingIn && <LoadingBackdropSpinner />}

      <TextField
        type="email"
        value={email}
        label="Email"
        variant="filled"
        required
        sx={{ backgroundColor: "#FFF", mt: 2 }}
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
      <CustomButton
        variant="contained"
        color="primary"
        text="Log in"
        icon={<LoginIcon />}
        type="submit"
      />

      <Box
        sx={{ width: "100%", border: ".5px solid #9f9f9f", mt: 3, mb: 1.5 }}
      />

      <CustomButton
        variant="contained"
        color="success"
        text="Log in with Google"
        icon={
          <img
            src={googleIcon}
            alt="Google icon"
            className={styles["google-icon"]}
          />
        }
        onClick={loginWithGoogle}
      />
    </form>
  );
}
