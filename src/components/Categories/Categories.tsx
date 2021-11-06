import React, { useEffect } from "react";
import { connect } from "react-redux";
import actions from "./state/actions";
import Category from "../Category";
import Modal from "../common/Modal";
import { ADD_CATEGORY } from "../common/Modal/state/modalTypes";
import CategoryControl from "../CategoryControl";
import AddCategoryForm from "../AddCategoryForm";

interface Props {
  loadCategories: () => void;
}

function Categories(props: Props) {
  const { loadCategories } = props;

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <div>
      <CategoryControl />
      <Modal type={ADD_CATEGORY}>
        <AddCategoryForm />
      </Modal>
      <Category parentId={null} />
    </div>
  );
}

export default connect(null, { ...actions })(Categories);
