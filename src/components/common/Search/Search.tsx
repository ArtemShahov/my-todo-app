import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store/types";
import actions from "../../Categories/state/actions";
import selectors from "../../Categories/state/selectors";
import classes from "./styles.module.scss";

const mapStateToProps = (state: RootState) => ({
  textValue: selectors.getFilterText(state),
  doneValue: selectors.getFilterDone(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

function Search(props: PropsFromRedux) {
  const { textValue, doneValue, setFilterText, setFilterDone } = props;
  console.log(doneValue);

  function onChangeTextHandler(event: any) {
    setFilterText(event.target.value);
  }

  function onChangeDoneHandler(event: any) {
    setFilterDone(!doneValue);
  }

  function clear() {
    setFilterText("");
    setFilterDone(false);
  }

  return (
    <div className={classes.todoItemsSearch}>
      <TextField
        label="Search"
        size="small"
        variant="standard"
        sx={{ flexGrow: 1 }}
        value={textValue}
        onChange={onChangeTextHandler}
      />
      <FormControlLabel control={<Checkbox checked={doneValue} onChange={onChangeDoneHandler} />} label="Done" />
      <Button onClick={clear}>Clear</Button>
    </div>
  );
}

export default connector(Search);
