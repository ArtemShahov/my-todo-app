import React, { useEffect } from "react";
import { connect } from "react-redux";
import actions from "./state/actions";
import Category from "../Category";
import { category_interface } from "../Categories/interfaces";
import selectors from "../Categories/state/selectors";

interface CategoriesProps {
  loadCategories: () => void;
  categories: category_interface[];
  
}

function Categories(props: CategoriesProps) {
  const { loadCategories, categories } = props;

  useEffect(() => {
    loadCategories();
  });

  return <Category categories={categories} />;
}

const mapStateToProps = (state: any) => ({
    categories: selectors.getCategories(state),
  });

export default connect(mapStateToProps ,{ ...actions })(Categories);
