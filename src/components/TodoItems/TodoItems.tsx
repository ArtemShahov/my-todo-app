import { Paper } from "@mui/material";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/types";
import actions from "../Categories/state/actions";
import selectors from "../Categories/state/selectors";
import TodoItem from "../common/TodoItem";
import { todo_interface } from "../common/TodoItem/interface";
import './styles.scss';

const mapStateToProps = (state: RootState) => ({
  allTodoItems: selectors.getTodoItems(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  items: todo_interface[] | null;
}

function TodoItems(props: Props) {
  const { items } = props;

  return (
    <Paper elevation={3}>
      <div className="todo-items">
        {items ?
        (items.length ? items.map((item: todo_interface) => <TodoItem key={item.id} { ...item } />) : 'Nothing')
      : "Choose category"}
      </div>
    </Paper>

  );
}

export default connector(TodoItems);
