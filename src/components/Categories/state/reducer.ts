import { category_interface } from "../interfaces";
import { action_interface } from "./../../../store/interfaces";
import { CHANGE_INPUT_VALUE, CLICK_CATEGORY, GET_CATEGORIES } from "./actionTypes";

export interface categoriesReducer_interface {
    allCategories: category_interface[],
    activeCategory: string,
    addCategoryForm: any,
}

const initialState: categoriesReducer_interface = {
  allCategories: [],
  activeCategory: '',
  addCategoryForm: {
    categoryName: '',
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
    case CLICK_CATEGORY: {
        let result = action.payload;
        const currentActiveCategory = state.activeCategory;
        if (result === currentActiveCategory) result = '';
        return {
            ...state,
            activeCategory: result,
        }
    }
    case CHANGE_INPUT_VALUE: {
      const { field, value } = action.payload;
      const { addCategoryForm } = state;
      addCategoryForm[field] = value;
      return {
        ...state,
        addCategoryForm: {
          ...addCategoryForm
        },
      }
    }
    default:
      return state;
  }
};
