import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/types";
import actions from "../Categories/state/actions";
import selectors from "../Categories/state/selectors";
import Form from "../common/Form";

const mapStateToProps = (state: RootState) => ({
  getFieldValue: (field: string) => selectors.getFieldValue(state, field),
  parent: selectors.getActiveCategory(state),
  parentId: selectors.getActiveCategoryId(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  close?: any;
}

function AddCategoryForm(props: Props) {
  const {
    getFieldValue,
    changeInputValue,
    addCategory,
    parent,
    parentId,
    close,
  } = props;
  const parentName = parent ? parent.name : null;
  const categoryNameField = "categoryName";

  function useInputState(field: string) {
    return {
      value: getFieldValue(field),
      onChange: (event: any) => changeInputValue(field, event.target.value),
    };
  }

  function clearForm() {
    changeInputValue(categoryNameField, "");
  }

  function onSubmitHandler(event: any) {
    console.log(event);
    event.preventDefault();
    addCategory(getFieldValue(categoryNameField), parentId);
    clearForm();
    close();
  }

  const categoryName = useInputState(categoryNameField);

  return (
    <div>
      <h4>Add new category{parentName ? ` in ${parentName}` : ""}</h4>
      <Form
        fields={[
          { name: categoryNameField, type: "text", label: "Category name", placeHolder: "Enter category name", valueHandler: categoryName },
        ]}
        submitFunc={onSubmitHandler}
      />
    </div>
  );
}

export default connect(mapStateToProps, { ...actions })(AddCategoryForm);
