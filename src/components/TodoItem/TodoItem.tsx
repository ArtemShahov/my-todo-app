import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/types";
import actions from "../Categories/state/actions";

const mapStateToProps = (state: RootState) => ({
  // activeCategory: selectors.getActiveCategory(state),
  // todoItems: selectors.getTodoItems(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  id: string;
  title: string;
  content: string;
  parentId: string;
}

function TodoItem(props: Props) {
  const { id, title, content, parentId, deleteTodoItem } = props;

  function onClickHandler() {
    deleteTodoItem({id, parentId});
  }
  return (
    <div>
      <h4>{title}</h4>
      <div>{content}</div>
      <button onClick={onClickHandler}>Delete</button>
    </div>
  );
}

export default connector(TodoItem);
