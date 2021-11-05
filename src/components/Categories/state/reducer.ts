import { category_interface } from "../interfaces";
import { action_interface } from "./../../../store/interfaces";
import { CLICK_CATEGORY, GET_CATEGORIES } from "./actionTypes";

export interface categoriesReducer_interface {
    allCategories: category_interface[],
    activeCategory: string,
}

const initialState: categoriesReducer_interface = {
  allCategories: [],
  activeCategory: '',
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
    default:
      return state;
  }
};
