import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useAlert } from "../../../context/alerts/AlertProvider";

export default function CustomAlert() {
  const { alert, closeAlert } = useAlert();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (alert) {
      setOpen(true);
    }
  }, [alert]);

  function handleClose() {
    setOpen(false);
    closeAlert();
  }

  return (
    alert && (
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        sx={{ mt: "3.5rem" }}
      >
        <Alert
          severity={alert.severity}
          onClose={handleClose}
          sx={{ width: "100%" }}
        >
          {alert.message}
        </Alert>
      </Snackbar>
    )
  );
}
