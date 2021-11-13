import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store/types";
import actions from "../../Categories/state/actions";
import selectors from "../../Categories/state/selectors";
import classes from "./styles.module.scss";


const mapStateToProps = (state: RootState) => ({
  value: selectors.getFilterText(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

function Search(props: PropsFromRedux) {
  const { value, setFilterText } = props;

  function onChangeHandler(event: any) {
    setFilterText(event.target.value);
  }

  return (
    <div className={classes.todoItemsSearch}>
      <TextField label="Search" size="small" variant="standard" sx={{ flexGrow: 1 }} value={value} onChange={onChangeHandler} />
      <FormControlLabel control={<Checkbox />} label="Done" />
      <Button>Clear</Button>
    </div>
  );
}

export default connector(Search);
