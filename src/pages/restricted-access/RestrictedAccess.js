import { useNavigate } from "react-router-dom";
import CustomButton from "../../components/ui/button/CustomButton";
import Box from "@mui/material/Box";

export default function RestrictedAccess() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: 10,
      }}
    >
      <h1>Access Denied</h1>
      <p>You do not have permission to view this page.</p>
      <CustomButton
        variant="contained"
        text="Go Home"
        color="primary"
        size="large"
        onClick={() => navigate("/")}
      />
    </Box>
  );
}
