import { Paper } from "@mui/material";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/types";
import actions from "../Categories/state/actions";
import modalActions from '../common/Modal/state/actions';
import selectors from "../Categories/state/selectors";
import Button from "../common/Button";
import TodoItem from "../common/TodoItem";
import { todo_interface } from "../common/TodoItem/interface";
import './styles.scss';
import { ADD_TODO_ITEM } from "../common/Modal/state/modalTypes";

const mapStateToProps = (state: RootState) => ({
  allTodoItems: selectors.getTodoItems(state),
  activeCategoryId: selectors.getActiveCategoryId(state),
});

const connector = connect(mapStateToProps, { ...actions, ...modalActions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  items: todo_interface[] | null;
  openModal: (modalType: string) => void;
}

function TodoItems(props: Props) {
  const { items, activeCategoryId, openModal } = props;

  return (
    <Paper elevation={3}>
      <header>
      <Button
        text="Add todo item"
        disabled={!activeCategoryId}
        fn={() => openModal(ADD_TODO_ITEM)}
      />
      </header>
      <div className="todo-items">
        {items ?
        (items.length ? items.map((item: todo_interface) => <TodoItem key={item.id} { ...item } />) : 'Nothing')
      : "Choose category"}
      </div>
    </Paper>

  );
}

export default connector(TodoItems);
