import { category_interface } from "../interfaces";
import { action_interface } from "./../../../store/interfaces";
import {
  SET_ACTIVE_CATEGORY,
  GET_CATEGORIES,
  SET_TODO_ITEMS,
} from "./actionTypes";

export interface categoriesReducer_interface {
  allCategories: category_interface[];
  activeCategory: string | null;
  addCategoryForm: any;
  allTodoItems: [];
}

const initialState: categoriesReducer_interface = {
  allCategories: [],
  activeCategory: null,
  allTodoItems: [],
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
    case SET_TODO_ITEMS: {
      return {
        ...state,
        allTodoItems: action.payload,
      };
    }
    case SET_ACTIVE_CATEGORY: {
      let result = action.payload;
      return {
        ...state,
        activeCategory: result,
      };
    }
    default:
      return state;
  }
};
