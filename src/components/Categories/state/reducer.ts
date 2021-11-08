import { category_interface } from "../interfaces";
import { action_interface } from "./../../../store/interfaces";
import {
  CHANGE_INPUT_VALUE,
  SET_ACTIVE_CATEGORY,
  GET_CATEGORIES,
} from "./actionTypes";

export interface categoriesReducer_interface {
  allCategories: category_interface[];
  activeCategory: string | null;
  addCategoryForm: any;
}

const initialState: categoriesReducer_interface = {
  allCategories: [],
  activeCategory: null,
  addCategoryForm: {
    categoryName: "",
    title: "",
    content: "",
  },
};

export const categoriesReducer = (
  state = initialState,
  action: action_interface
) => {
  switch (action.type) {
    case GET_CATEGORIES: {
      return {
        ...state,
        allCategories: action.payload,
      };
    }
    case SET_ACTIVE_CATEGORY: {
      let result = action.payload;
      const currentActiveCategory = state.activeCategory;
      if (result === currentActiveCategory) result = null;
      return {
        ...state,
        activeCategory: result,
      };
    }
    case CHANGE_INPUT_VALUE: {
      const { field, value } = action.payload;
      const { addCategoryForm } = state;
      addCategoryForm[field] = value;
      return {
        ...state,
        addCategoryForm: {
          ...addCategoryForm,
        },
      };
    }
    default:
      return state;
  }
};
