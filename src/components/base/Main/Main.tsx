/* eslint-disable react-hooks/exhaustive-deps */
import { Paper } from "@mui/material";
import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store/types";
import Category from "../../Categories/Category";
import CategoryControl from "../../Categories/CategoryControl";
import actions from "../../Categories/state/actions";
import selectors from "../../Categories/state/selectors";
import { todo_interface } from "../../common/TodoItem/interface";
import TodoItems from "../../TodoItems";
import "./styles.scss";

const mapStateToProps = (state: RootState) => ({
  activeCategory: selectors.getActiveCategory(state),
  activeCategoryId: selectors.getActiveCategoryId(state),
  todoItems: selectors.getTodoItems(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

function Main(props: PropsFromRedux) {
  const { activeCategory, loadTodoItems, todoItems, activeCategoryId, loadCategories } = props;

  useEffect(() => {
    loadTodoItems();
    loadCategories();
  }, []);

  const items = activeCategory ? todoItems.filter((item: todo_interface) => item.parentId === activeCategory.id) : null;

  return (
    <main className="main">
      <CategoryControl activeCategoryId={activeCategoryId} />
      <Paper className="category" elevation={3}>
        <Category parentId={null} />
      </Paper>
      <TodoItems items={items} />
    </main>
  );
}

export default connector(Main);
