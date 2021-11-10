/* eslint-disable import/no-anonymous-default-export */
import { TOGGLE_THEME } from "./actionTypes";

export interface action_interface {
  type: string;
}
const themeToggler = (): action_interface => ({type: TOGGLE_THEME});

const toggleTheme = () => (dispatch: any) => {
  dispatch(themeToggler());
};

export default {
  toggleTheme
};
