import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/types";
import actions from "../Categories/state/actions";
import selectors from "../Categories/state/selectors";
import Form from "../common/Form";
import { FormComponentField } from "../common/Form/Form";

interface field {
  name: string;
  label: string;
  type?: string;
  placeHolder: string,
}

const mapStateToProps = (state: RootState) => ({
  getFieldValue: (field: string) => selectors.getFieldValue(state, field),
  parent: selectors.getActiveCategory(state),
  categories: selectors.getCategories(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  close?: any;
}

function AddToDoItemForm(props: Props) {
  const { getFieldValue, changeInputValue, parent, close } = props;
  const fields = [
    { name: "title", label: "To do title", placeHolder: "Enter title" },
    { name: "content", label: "To do content", placeHolder: "Enter content" },
  ];
  
  function useInputState(field: field): FormComponentField {
    //   changeInputValue(field.name, '');
      return {
      name: field.name,
      label: field.label,
      type: field.type || "text",
      placeHolder: field.placeHolder,
      valueHandler: {
          value: getFieldValue(field.name),
          onChange: (event: any) =>
          changeInputValue(field.name, event.target.value),
        }
    };
  }

  function submitFunc(event: any) {
      console.log('todo submit');
      close();
  }
  const mappedFields = fields.map(useInputState);

  return (
    <div>
      <h4>Add new to do item in {parent?.name}</h4>
      <Form fields={mappedFields} submitFunc={submitFunc} />
    </div>
  );
}

export default connector(AddToDoItemForm);
