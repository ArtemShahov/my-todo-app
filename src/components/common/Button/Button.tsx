import React from "react";
import {Button as MuiButton } from '@mui/material';

interface Props {
  text: string;
  fn: any;
  disabled?: boolean;
}

function Button(props: Props) {
  const { text, fn, disabled } = props;
  return (
    <MuiButton variant="contained" disabled={disabled} onClick={fn}>
      {text}
    </MuiButton>
  );
}

export default Button;
