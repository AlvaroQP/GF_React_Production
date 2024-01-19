import React from "react";
import CustomButton from "./CustomButton";
import { useAuth } from "../../../auth/firebase/AuthProvider";
import { NavLink } from "react-router-dom";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

export default function AdminPanelButton() {
  const { isAdmin } = useAuth();

  if (isAdmin) {
    return (
      <NavLink to="admin">
        <CustomButton
          variant="contained"
          text="Admin Panel"
          color="success"
          size="large"
          icon={<AdminPanelSettingsIcon />}
        />
      </NavLink>
    );
  } else {
    return null;
  }
}
