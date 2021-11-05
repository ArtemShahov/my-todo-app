import React, { useEffect } from "react";
import { connect } from "react-redux";
import actions from "./state/actions";
import Category from "../Category";
import { category_interface } from "../Categories/interfaces";
import selectors from "../Categories/state/selectors";

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

  return <Category categories={categories} clickCategory={clickCategory} />;
}

const mapStateToProps = (state: any) => ({
    categories: selectors.getCategories(state),
  });

export default connect(mapStateToProps ,{ ...actions })(Categories);
