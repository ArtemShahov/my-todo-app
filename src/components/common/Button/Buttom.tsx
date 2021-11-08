import React from "react";

interface Props {
  text: string;
  fn: any;
  disabled?: boolean;
}

function Button(props: Props) {
  const { text, fn, disabled } = props;
  return (
    <button type="button" disabled={disabled} onClick={fn}>
      {text}
    </button>
  );
}

export default Button;
