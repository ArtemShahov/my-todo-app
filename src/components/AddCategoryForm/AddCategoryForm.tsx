import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/types";
import { category_interface } from "../Categories/interfaces";
import actions from "../Categories/state/actions";
import selectors from "../Categories/state/selectors";

const mapStateToProps = (state: RootState) => ({
  getFieldValue: (field: any) => selectors.getFieldValue(state, field),
  parentId: selectors.getActiveCategory(state),
  categories: selectors.getCategories(state),
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
    parentId,
    categories,
    close,
  } = props;
  const parent = categories.find(
    (item: category_interface) => item.id === parentId
  );
  const parentName = parent ? parent.name : null;
  const categoryNameField = 'categoryName';

  function useInputState(field: string) {
    return {
      value: getFieldValue(field),
      onChange: (event: any) => changeInputValue(field, event.target.value),
    };
  }

  function clearForm() {
    changeInputValue(categoryNameField, '')
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
      <h3>Add new category{parentName ? ` in ${parentName}` : ""}</h3>
      <form>
        <input type="text" {...categoryName} />
        <button type="button" onClick={onSubmitHandler}>
          Отправить
        </button>
      </form>
    </div>
  );
}

export default connect(mapStateToProps, { ...actions })(AddCategoryForm);
