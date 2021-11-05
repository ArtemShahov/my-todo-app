import React, { useEffect } from "react";
import { connect } from "react-redux";
import actions from "./state/actions";
import Category from "../Category";
import { category_interface } from "../Categories/interfaces";
import selectors from "../Categories/state/selectors";
import Modal from '../common/Modal';
import { ADD_CATEGORY } from "../common/Modal/state/modalTypes";
import CategoryControl from '../CategoryControl';

interface Props {
  loadCategories: () => void,
  categories: category_interface[],
  clickCategory?: (categoryName: string) => void;
  
}

function Categories(props: Props) {
  const { loadCategories, clickCategory, categories } = props;

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <div>
      <CategoryControl />
      <Modal type={ADD_CATEGORY}>
        kj
      </Modal>
      <Category categories={categories} clickCategory={clickCategory} />
    </div>
    );
}

const mapStateToProps = (state: any) => ({
    categories: selectors.getCategories(state),
  });

export default connect(mapStateToProps ,{ ...actions })(Categories);
