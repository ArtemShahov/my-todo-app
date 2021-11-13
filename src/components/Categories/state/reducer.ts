import { category_interface } from "../interfaces";
import { action_interface } from "./../../../store/interfaces";
import {
  SET_ACTIVE_CATEGORY,
  GET_CATEGORIES,
  SET_TODO_ITEMS,
  SET_FILTER_INPUT,
} from "./actionTypes";

export interface categoriesReducer_interface {
  allCategories: category_interface[];
  activeCategory: string | null;
  addCategoryForm: any;
  allTodoItems: [];
  filter: {
    text: string;
    done: boolean;
  }
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
  filter: {
    text: '',
    done: false,
  }
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
      const result = action.payload;
      return {
        ...state,
        activeCategory: result,
      };
    }
    case SET_FILTER_INPUT: {
      const value = action.payload; 
      const newFilter = state.filter;
      newFilter.text = value;
      return {
        ...state,
        newFilter,
      }
    }
    default:
      return state;
  }
};
