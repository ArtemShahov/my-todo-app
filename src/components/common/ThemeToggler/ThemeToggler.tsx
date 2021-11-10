import React from "react";
import { connect } from "react-redux";
import actions from "./state/actions";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import selectors from "./state/selectors";
import './styles.scss';

function ThemeToggler(props: any) {
  const { toggleTheme, mode } = props;
  return (
    <div className="control__theme-toggler">
    <IconButton onClick={toggleTheme} aria-label="delete">
      {mode ? <Brightness4Icon /> : <Brightness7Icon />}
    </IconButton>
    </div>
  );
}

const mapStateToProps = (state: object) => ({
  mode: selectors.mode(state),
});

export default connect(mapStateToProps, { ...actions })(ThemeToggler);
