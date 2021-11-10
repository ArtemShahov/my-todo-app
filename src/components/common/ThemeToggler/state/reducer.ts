import { action_interface } from "./actions";
import { TOGGLE_THEME } from "./actionTypes";

const initialState = {
  mode: localStorage.getItem('mode') === 'dark' ? 'dark' : 'light',
};

export const themeReducer = (state = initialState, action: action_interface) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const { mode } = state;
      const changedMode = mode === 'light' ? 'dark' : 'light'
      localStorage.setItem('mode', changedMode);
      return {
        ...state,
        mode: changedMode ,
      };
    }
    default:
      return state;
  }
};
