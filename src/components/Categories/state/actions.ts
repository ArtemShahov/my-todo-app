import { category_interface } from "./../interfaces";
/* eslint-disable import/no-anonymous-default-export */
import dataService from "../../../dataService/dataService";
import { AppDispatch } from "../../../store/types";
import actionCreators from "./actionCreators";
import { ADD_CATEGORY } from "../../common/Modal/state/modalTypes";
import modalActions from '../../common/Modal/state/actions';

const loadCategories = () => (dispatch: AppDispatch) => {
  dataService.getCategories().then((data) => {
    dispatch(actionCreators.setCategories(data));
  });
};

const setActiveCategory = (categoryId: string) => (dispatch: AppDispatch) => {
  dispatch(actionCreators.setActiveCategory(categoryId));
};

const changeInputValue =
  (field: string, value: string) => (dispatch: AppDispatch) => {
    dispatch(actionCreators.changeInputValue({ field, value }));
  };

const addCategory =
  (name: string, parentId: any) => (dispatch: AppDispatch) => {
    dataService
      .addCategory({ name, parentId })
      .then((data: category_interface[]) => {
        dispatch(actionCreators.setCategories(data));
      });
      modalActions.closeModal(ADD_CATEGORY)
  };

  const deleteCategory = (categoryId: string) => (dispatch: AppDispatch) => {
    dataService
    .deleteCategory({categoryId})
    .then((data) => dispatch(actionCreators.setCategories(data)))
    .then(() =>dispatch(actionCreators.setActiveCategory(null)));
  }

export default {
  loadCategories,
  setActiveCategory,
  changeInputValue,
  addCategory,
  deleteCategory,
};
