import { Paper, Typography } from "@mui/material";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/types";
import actions from "../Categories/state/actions";
import modalActions from "../common/Modal/state/actions";
import selectors from "../Categories/state/selectors";
import Button from "../common/Button";
import TodoItem from "../common/TodoItem";
import { todo_interface } from "../common/TodoItem/interface";
import classes from "./styles.module.scss";
import { ADD_TODO_ITEM } from "../common/Modal/state/modalTypes";
import Progress from "../common/Progress";

const mapStateToProps = (state: RootState) => ({
  allTodoItems: selectors.getTodoItems(state),
  activeCategory: selectors.getActiveCategory(state),
});

const connector = connect(mapStateToProps, { ...actions, ...modalActions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  items: todo_interface[];
  openModal: (modalType: string) => void;
}

function TodoItems(props: Props) {
  const { items, activeCategory, openModal } = props;
  const doneItems = items.filter((item: todo_interface) => item.isDone);

  return (
    <Paper className={classes.todoItems} elevation={3}>
      <header className={classes.todoItemsHeader}>
        <Typography variant="h5">{activeCategory ? activeCategory.name : "All"}</Typography>
        <div className={classes.todoItemsHeaderProgress}>
          <Progress title="Progress" all={items.length} done={doneItems.length} />
        </div>
        <Button text="Add" disabled={!activeCategory} fn={() => openModal(ADD_TODO_ITEM)} />
      </header>
      <div className={classes.todoItemsContent}>
        {items.length ? items.map((item: todo_interface) => <TodoItem key={item.id} {...item} />) : "Empty"}
      </div>
    </Paper>
  );
}

export default connector(TodoItems);
