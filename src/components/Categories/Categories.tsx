import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import actions from "./state/actions";
import Category from "../Category";
import Modal from "../common/Modal";
import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  ADD_TODO_ITEM,
} from "../common/Modal/state/modalTypes";
import CategoryControl from "../CategoryControl";
import AddCategoryForm from "../AddCategoryForm";
import Confirm from "../common/Confirm";
import selectors from "./state/selectors";
import { RootState } from "../../store/types";
import AddToDoItemForm from "../AddToDoItemForm";
import { Paper } from "@mui/material";

const mapStateToProps = (state: RootState) => ({
  activeCategoryId: selectors.getActiveCategoryId(state),
  activeCategory: selectors.getActiveCategory(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

function Categories(props: PropsFromRedux) {
  const { loadCategories, deleteCategory, activeCategoryId, activeCategory } =
    props;

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const delCategory = () => deleteCategory(activeCategoryId);

  return (
    <div>
      <CategoryControl activeCategoryId={activeCategoryId} />
      <Paper>
        <Category parentId={null} />
      </Paper>
      <Modal type={ADD_CATEGORY}>
        <AddCategoryForm />
      </Modal>
      <Modal type={DELETE_CATEGORY}>
        <Confirm
          title={`delete ${activeCategory?.name}?`}
          callback={delCategory}
        />
      </Modal>
      <Modal type={ADD_TODO_ITEM}>
        <AddToDoItemForm />
      </Modal>
    </div>
  );
}

export default connector(Categories);
