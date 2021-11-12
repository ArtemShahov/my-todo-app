import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store/types";
import Button from "../../common/Button";
import actions from "../../common/Modal/state/actions";
import { ADD_CATEGORY, DELETE_CATEGORY, ModalName } from "../../common/Modal/state/modalTypes";
import Progress from "../../common/Progress";
import { todo_interface } from "../../common/TodoItem/interface";
import selectors from "../state/selectors";
import classes from "./styles.module.scss";

const mapStateToProps = (state: RootState) => ({
  activeCategory: selectors.getActiveCategory(state),
  todoItems: selectors.getTodoItems(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  openModal: (modalName: ModalName) => void;
  activeCategoryId: string;
}

function CategoryControl(props: Props) {
  const { openModal, activeCategoryId, todoItems } = props;
  const doneTodoItems = todoItems.filter((item: todo_interface) => item.isDone);
  return (
    <Paper className={classes.categoryControl} elevation={3} sx={{ p: 2, mb: 2 }}>
      <Typography variant="h5">Categories</Typography>
      <div className={classes.categoryControlProgress}>
        <Progress title="All progress" all={todoItems.length} done={doneTodoItems.length} />
      </div>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button text="Add" fn={() => openModal(ADD_CATEGORY)} />
        <Button text="Delete" disabled={!activeCategoryId} fn={() => openModal(DELETE_CATEGORY)} />
      </Box>
    </Paper>
  );
}

export default connector(CategoryControl);
