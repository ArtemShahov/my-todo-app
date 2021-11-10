import { action_interface } from "./actions";
import { TOGGLE_THEME } from "./actionTypes";

const initialState = {
  darkMode: false,
};

export const themeReducer = (state = initialState, action: action_interface) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const { darkMode } = state;
      return {
        ...state,
        darkMode: !darkMode,
      };
    }
    default:
      return state;
  }
};
