import { action_interface } from './../../../store/interfaces';
import { ADD_CATEGORY } from "./../../common/Modal/state/modalTypes";
/* eslint-disable import/no-anonymous-default-export */
import {
  GET_CATEGORIES,
  SET_ACTIVE_CATEGORY,
  SET_FILTER_INPUT,
  SET_TODO_ITEMS,
} from "./actionTypes";

const setCategories = (data: object): action_interface => ({
  type: GET_CATEGORIES,
  payload: data,
});

  const setTodoItems = (data: any): action_interface => ({
    type: SET_TODO_ITEMS,
    payload: data,
  })

const setActiveCategory = (data: string | null): action_interface => ({
  type: SET_ACTIVE_CATEGORY,
  payload: data,
});

const addCategory = (data: {
  name: string;
  parentId: string;
}): action_interface => ({
  type: ADD_CATEGORY,
  payload: data,
});

const setFilterInput = (value: string): action_interface => ({
  type: SET_FILTER_INPUT,
  payload: value,
})

export default {
  setCategories,
  setTodoItems,
  setActiveCategory,
  addCategory,
  setFilterInput,
};
