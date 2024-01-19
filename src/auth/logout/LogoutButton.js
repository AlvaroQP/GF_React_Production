import React from "react";
import CustomButton from "../../components/ui/button/CustomButton";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../context/alerts/AlertProvider";
import { useAuth } from "../firebase/AuthProvider";
import { useGame } from "../../context/game/GameProvider";
import LogoutIcon from "@mui/icons-material/Logout";

export default function LogoutButton() {
  const { logout } = useAuth();
  const { user } = useAuth();
  const { createAlert } = useAlert();
  const { endGame } = useGame();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      endGame();
      await logout();
      createAlert("success", `Goodbye, ${user.displayName}!`);
      navigate("/");
    } catch (error) {
      createAlert("error", "Failed to log out.");
    }
  }

  return (
    <CustomButton
      variant="contained"
      color="primary"
      text="Logout"
      icon={<LogoutIcon />}
      onClick={handleLogout}
    />
  );
}
