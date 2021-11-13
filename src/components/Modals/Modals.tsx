import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../store/types";
import actions from "../Categories/state/actions";
import selectors from "../Categories/state/selectors";
import Confirm from "../common/Confirm";
import Modal from "../common/Modal";
import { ADD_CATEGORY, DELETE_CATEGORY, ADD_TODO_ITEM } from "../common/Modal/state/modalTypes";
import AddCategoryForm from "../Forms/AddCategoryForm";
import AddToDoItemForm from "../Forms/AddToDoItemForm";

const mapStateToProps = (state: RootState) => ({
  activeCategory: selectors.getActiveCategory(state),
  activeCategoryId: selectors.getActiveCategoryId(state),
});

const connector = connect(mapStateToProps, { ...actions });

type PropsFromRedux = ConnectedProps<typeof connector>;

function Modals(props: PropsFromRedux) {
  const { activeCategory, deleteCategory, activeCategoryId } = props;

  const delCategory = () => deleteCategory(activeCategoryId);
  return (
    <>
      <Modal type={ADD_CATEGORY}>
        <AddCategoryForm />
      </Modal>
      <Modal type={DELETE_CATEGORY}>
        <Confirm title={activeCategory ? `Delete category: ${activeCategory.name}?` : 'Delete all categories?'} callback={delCategory} />
      </Modal>
      <Modal type={ADD_TODO_ITEM}>
        <AddToDoItemForm />
      </Modal>
    </>
  );
}

export default connector(Modals);
