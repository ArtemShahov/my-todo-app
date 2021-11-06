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

const changeInputValue = (field: string, value: string) => (dispatch: AppDispatch) => {
  console.log(field, value);
  dispatch(actionCreators.changeInputValue({field, value}));
};

const addCategory = (name: string, parentId: any) => (dispatch: AppDispatch) => {
  dataService.addCategory({name, parentId});
}

export default {
  loadCategories,
  clickCategory,
  changeInputValue,
  addCategory,
};
