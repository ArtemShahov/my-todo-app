import { ADD_CATEGORY } from "./../../common/Modal/state/modalTypes";
/* eslint-disable import/no-anonymous-default-export */
import {
  GET_CATEGORIES,
  CLICK_CATEGORY,
  CHANGE_INPUT_VALUE,
} from "./actionTypes";
import { action_interface } from "../../../store/interfaces";

const setCategories = (data: object): action_interface => ({
  type: GET_CATEGORIES,
  payload: data,
});

const clickCategory = (data: string): action_interface => ({
  type: CLICK_CATEGORY,
  payload: data,
});

const changeInputValue = (data: {
  field: string;
  value: string;
}): action_interface => ({
  type: CHANGE_INPUT_VALUE,
  payload: data,
});

const addCategory = (data: {
  name: string;
  parentId: string;
}): action_interface => ({
  type: ADD_CATEGORY,
  payload: data,
});

export default {
  setCategories,
  clickCategory,
  changeInputValue,
  addCategory,
};
