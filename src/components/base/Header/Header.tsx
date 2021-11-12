import { Paper } from "@mui/material";
import React from "react";
import ThemeToggler from "../../common/ThemeToggler";
import Logo from "./Logo";
import classes from "./styles.module.scss";

function Header() {
  return (
    <Paper className={classes.header} elevation={3}>
      <Logo />
      <ThemeToggler />
    </Paper>
  );
}

export default Header;
