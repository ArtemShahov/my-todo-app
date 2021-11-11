/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store/types";
import Categories from "../../Categories";
import actions from "../../Categories/state/actions";
import selectors from "../../Categories/state/selectors";
import { todo_interface } from "../../common/TodoItem/interface";
import TodoItems from "../../TodoItems";
import "./styles.scss";

const mapStateToProps = (state: RootState) => ({
  activeCategory: selectors.getActiveCategory(state),
  todoItems: selectors.getTodoItems(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

function Main(props: PropsFromRedux) {
  const { activeCategory, loadTodoItems, todoItems } = props;

  useEffect(() => {
    loadTodoItems();
  }, []);

  const items = activeCategory
    ? todoItems.filter(
        (item: todo_interface) => item.parentId === activeCategory.id
      )
    : null;

  return (
    <main className="main">
      <Categories />
      <TodoItems items={items} />
    </main>
  );
}

export default connector(Main);
