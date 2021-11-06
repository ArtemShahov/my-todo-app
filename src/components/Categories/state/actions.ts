/* eslint-disable import/no-anonymous-default-export */
import dataService from "../../../dataService/dataService";
import { AppDispatch } from "../../../store/types";
import actionCreators from "./actionCreators";

const loadCategories = () => (dispatch: AppDispatch) => {
  dataService.getCategories().then((data) => {
    dispatch(actionCreators.setCategories(data));
  });
};

const clickCategory = (categoryId: string) => (dispatch: AppDispatch) => {
    dispatch(actionCreators.clickCategory(categoryId));
};

export default {
  loadCategories,
  clickCategory,
};
