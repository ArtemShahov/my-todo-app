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
import Search from "../common/Search";

const mapStateToProps = (state: RootState) => ({
  allTodoItems: selectors.getTodoItems(state),
  activeCategory: selectors.getActiveCategory(state),
  filterText: selectors.getFilterText(state),
  filterDone: selectors.getFilterDone(state),
});

const connector = connect(mapStateToProps, { ...actions, ...modalActions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  items: todo_interface[];
  openModal: (modalType: string) => void;
}

function TodoItems(props: Props) {
  const { items, activeCategory, openModal, filterText, filterDone } = props;
  const doneItems = items.filter((item: todo_interface) => item.isDone);

  function filteringItems() {
    let result = items;
    if (filterDone) {
      result = result.filter((item: todo_interface) => item.isDone);
    }
    if (filterText) {
      result = result.filter(
        (item: todo_interface) => item.title.includes(filterText) || item.content.includes(filterText)
      );
    }
    return result;
  }
  const renderItems = filteringItems();

  return (
    <Paper className={classes.todoItems} elevation={3}>
      <header className={classes.todoItemsHeader}>
        <Typography variant="h5" sx={{ overflow: "hidden", mb: 2, textOverflow: "ellipsis" }}>
          {activeCategory ? activeCategory.name : "All"}
        </Typography>
        <div className={classes.todoItemsHeaderControl}>
          <Button text="Add" disabled={!activeCategory} fn={() => openModal(ADD_TODO_ITEM)} />
          <Progress title="Progress" all={items.length} done={doneItems.length} />
        </div>
      </header>
      <Search />
      <div className={classes.todoItemsContent}>
        {renderItems.length ? renderItems.map((item: todo_interface) => <TodoItem key={item.id} {...item} />) : "Empty"}
      </div>
    </Paper>
  );
}

export default connector(TodoItems);
