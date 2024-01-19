import React, { useState } from "react";
import Login from "../../auth/login/Login";
import Signup from "../../auth/signup/Signup";
import logo from "../../assets/images/gf-logo.png";
import styles from "./AuthForm.module.css";

export default function AuthForm() {
  const [isLogging, setIsLogging] = useState(true);

  return (
    <div className={styles["auth-container"]}>
      <img src={logo} alt="logo" className={styles.logo} />

      {isLogging ? <Login /> : <Signup />}

      <p className={styles["login-signup-toggle-p"]}>
        {isLogging ? "Need an account?" : "Already have an account?"}
        <span className={styles.link} onClick={() => setIsLogging(!isLogging)}>
          {isLogging ? " Sign Up" : " Log In"}
        </span>
      </p>
    </div>
  );
}
