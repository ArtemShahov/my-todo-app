import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store/types";
import actions from "../../Categories/state/actions";
import selectors from "../../Categories/state/selectors";
import Form from "../../common/Form";

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
  const formTitle = `New "TODO" in category: ${parent?.name}`;
  const fields = [
    { name: "title", label: "Title", placeHolder: "Enter title", },
    { name: "content", label: "Content", placeHolder: "Enter content", },
  ];

  function submitFunc(dataFields: {title: string, content: string,  parentId: string}) {
    console.log(dataFields);
    addTodoItem({ ...dataFields, parentId: parent.id });
    close();
  }
  return (
      <Form title={formTitle} fields={fields} submitFunc={submitFunc} />

  );
}

export default connector(AddToDoItemForm);
