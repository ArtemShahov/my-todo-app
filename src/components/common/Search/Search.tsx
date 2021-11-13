import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React from "react";
import classes from "./styles.module.scss";

function Search() {
  return (
    <div className={classes.todoItemsSearch}>
      <TextField label="Search" size="small" variant="standard" sx={{ flexGrow: 1 }} />
      <FormControlLabel control={<Checkbox />} label="Label" />
      <Button>Clear</Button>
    </div>
  );
}

export default Search;
