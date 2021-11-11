import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../../store/types";
import actions from "../../Categories/state/actions";
import selectors from "../../Categories/state/selectors";
import Form from "../../common/Form";

const mapStateToProps = (state: RootState) => ({
  parent: selectors.getActiveCategory(state),
  parentId: selectors.getActiveCategoryId(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  close?: any;
}

function AddCategoryForm(props: Props) {
  const { addCategory, parent, parentId, close } = props;
  const parentName = parent ? parent.name : null;
  const formTitle = `Add new category${parentName ? ` in ${parentName}` : ""}`;
  const categoryNameField = "categoryName";

  function onSubmitHandler(dataFields: { categoryName: string }) {
    addCategory(dataFields.categoryName, parentId);
    close();
  }

  return (
    <Form
      title={formTitle}
      fields={[
        {
          name: categoryNameField,
          type: "text",
          label: "Category name",
          placeholder: "Enter category name",
        },
      ]}
      submitFunc={onSubmitHandler}
    />
  );
}

export default connect(mapStateToProps, { ...actions })(AddCategoryForm);
