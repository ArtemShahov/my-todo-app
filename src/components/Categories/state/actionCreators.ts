/* eslint-disable import/no-anonymous-default-export */
import { GET_CATEGORIES } from "./actionTypes";
import { action_interface } from "../../../store/interfaces";

const setCategories = (data: object): action_interface => ({
  type: GET_CATEGORIES,
  payload: data,
});

export default {
    setCategories,
};
