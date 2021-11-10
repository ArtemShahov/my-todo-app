import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/types";
import actions from "../Categories/state/actions";
import selectors from "../Categories/state/selectors";
import Form from "../common/Form";

const mapStateToProps = (state: RootState) => ({
  parent: selectors.getActiveCategory(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  close?: any;
}

function AddToDoItemForm(props: Props) {
  const { parent, close, addTodoItem } = props;
  const fields = [
    { name: "title", label: "To do title", placeHolder: "Enter title" },
    { name: "content", label: "To do content", placeHolder: "Enter content" },
  ];

  function submitFunc(dataFields: {title: string, content: string,  parentId: string}) {
    console.log(dataFields);
    addTodoItem({ ...dataFields, parentId: parent.id });
    close();
  }
  return (
    <div>
      <h4>Add new to do item in {parent?.name}</h4>
      <Form fields={fields} submitFunc={submitFunc} />
    </div>
  );
}

export default connector(AddToDoItemForm);
