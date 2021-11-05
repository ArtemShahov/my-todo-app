import { category_interface } from "../interfaces";
import { action_interface } from "./../../../store/interfaces";
import { GET_CATEGORIES } from "./actionTypes";

export interface categoriesReducer_interface {
    allCategories: category_interface[],
}

const initialState: categoriesReducer_interface = {
  allCategories: [],
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
    default:
      return state;
  }
};
