import React from "react";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import { Typography } from "@mui/material";
import classes from '../styles.module.scss';

function Logo() {
  return (
    <div className={classes.headerLogo}>
      <ListAltRoundedIcon fontSize="large" />
      <Typography ml={2} fontSize="large" >TODO APP</Typography>
    </div>
  );
}

export default Logo;
