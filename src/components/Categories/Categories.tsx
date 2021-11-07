import React, { useEffect } from "react";
import { connect } from "react-redux";
import actions from "./state/actions";
import Category from "../Category";
import Modal from "../common/Modal";
import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
} from "../common/Modal/state/modalTypes";
import CategoryControl from "../CategoryControl";
import AddCategoryForm from "../AddCategoryForm";
import Confirm from '../common/Confirm';

interface Props {
  loadCategories: () => void;
  deleteCategory: () => void;
}

function Categories(props: Props) {
  const { loadCategories, deleteCategory } = props;

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <div>
      <CategoryControl />
      <Modal type={ADD_CATEGORY}>
        <AddCategoryForm />
      </Modal>
      <Modal type={DELETE_CATEGORY}>
        <Confirm title="delete?" callback={deleteCategory} />
      </Modal>
      <Category parentId={null} />
    </div>
  );
}

export default connect(null, { ...actions })(Categories);
