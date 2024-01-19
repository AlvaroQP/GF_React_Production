import Button from "@mui/material/Button";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { useNavigate } from "react-router-dom";

export default function BackButton(props) {
  const { path } = props;
  const navigate = useNavigate();

  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<ArrowBackOutlinedIcon />}
      sx={{ m: "0 0.5rem", width: "min-content" }}
      onClick={() => navigate(path)}
    >
      Back
    </Button>
  );
}
