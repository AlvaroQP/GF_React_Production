import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function CustomAccordion({ title, content, expanded }) {
  return (
    <Accordion defaultExpanded={expanded}>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon sx={{ color: "#FFF" }} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{ backgroundColor: "#1976d2", color: "#FFF" }}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{content}</AccordionDetails>
    </Accordion>
  );
}
