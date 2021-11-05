/* eslint-disable import/no-anonymous-default-export */
import { GET_CATEGORIES, CLICK_CATEGORY } from "./actionTypes";
import { action_interface } from "../../../store/interfaces";

const setCategories = (data: object): action_interface => ({
  type: GET_CATEGORIES,
  payload: data,
});

const clickCategory = (data: string): action_interface => ({
  type: CLICK_CATEGORY,
  payload: data,
});

export default {
  setCategories,
  clickCategory,
};
