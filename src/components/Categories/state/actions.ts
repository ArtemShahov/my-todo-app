import { category_interface } from "./../interfaces";
/* eslint-disable import/no-anonymous-default-export */
import dataService from "../../../dataService/dataService";
import { AppDispatch } from "../../../store/types";
import actionCreators from "./actionCreators";
import { ADD_CATEGORY } from "../../common/Modal/state/modalTypes";
import modalActions from "../../common/Modal/state/actions";

// const loadData = () => (dispatch: AppDispatch) => {
//   loadCategories();
//   loadTodoItems();
// }

const loadCategories = () => (dispatch: AppDispatch) => {
  dataService.getCategories().then((data) => {
    dispatch(actionCreators.setCategories(data));
  });
};

const loadTodoItems = () => (dispatch: AppDispatch) => {
  dataService.getTodoItems().then((data) => {
    dispatch(actionCreators.setTodoItems(data));
  });
};

const setActiveCategory = (categoryId: string) => (dispatch: AppDispatch) => {
  dispatch(actionCreators.setActiveCategory(categoryId));
};

const addCategory =
  (name: string, parentId: any) => (dispatch: AppDispatch) => {
    dataService
      .addCategory({ name, parentId })
      .then((data: category_interface[]) => {
        dispatch(actionCreators.setCategories(data));
      });
    modalActions.closeModal(ADD_CATEGORY);
  };

const deleteCategory = (categoryId: string) => (dispatch: AppDispatch) => {
  dataService
    .deleteCategory({ categoryId })
    .then((data) => dispatch(actionCreators.setCategories(data)))
    .then(() => dispatch(actionCreators.setActiveCategory(null)));
};

const addTodoItem =
  (todoItemData: { title: string; content: string; parentId: string }) =>
  (dispatch: AppDispatch) => {
    dataService.addTodoItem(todoItemData).then((data: category_interface[]) => {
      dispatch(actionCreators.setTodoItems(data));
    });
    loadCategories();
  };

export default {
  loadCategories,
  loadTodoItems,
  setActiveCategory,
  addCategory,
  deleteCategory,
  addTodoItem,
};
