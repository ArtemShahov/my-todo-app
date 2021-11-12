import React from "react";
import { styled } from "@mui/material/styles";
import { LinearProgress, linearProgressClasses } from "@mui/material";
import classes from "./styles.module.scss";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

interface Props {
  title: string;
  all: number;
  done: number;
}

function Progress(props: Props) {
  const { title, all, done } = props;
  const progress = done / all * 100;
  return (
    <div className={classes.progress}>
      {title}
      <BorderLinearProgress sx={{ flexGrow: 1 }} variant="determinate" value={progress} />
      <div>{done} / {all}</div>
    </div>
  );
}

export default Progress;
