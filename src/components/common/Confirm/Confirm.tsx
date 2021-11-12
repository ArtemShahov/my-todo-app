import { Paper, Typography } from "@mui/material";
import React from "react";
import Button from "../Button";
import classes from "./styles.module.scss";

interface Props {
  title: string;
  callback: () => void;
  close?: any;
}

function Confirm(props: Props) {
  const { title, callback, close } = props;
  const onClickHandler = (result: boolean) => {
    close();
    if (result) {
      callback();
    }
  };
  return (
    <Paper sx={{ p: 3, width: "300px" }} elevation={6}>
      <Typography
        sx={{
          textAlign: "center",
          textOverflow: "ellipsis",
          overflow: "hidden",
        }}
        variant="h5"
        gutterBottom
        component="div"
      >
        {title}
      </Typography>
      <div className={classes.confirmButtons}>
        <Button text="Yes" fn={() => onClickHandler(true)} />
        <Button text="No" fn={() => onClickHandler(false)} />
      </div>
    </Paper>
  );
}

export default Confirm;
