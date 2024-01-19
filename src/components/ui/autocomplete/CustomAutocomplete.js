import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function CustomAutocomplete(props) {
  const { options, label, value, onChange } = props;

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => (option.name ? option.name : "")}
      value={value}
      onChange={onChange}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      renderInput={(params) => (
        <TextField {...params} label={label} variant="outlined" />
      )}
      sx={{ mb: "2rem" }}
      required
    />
  );
}
