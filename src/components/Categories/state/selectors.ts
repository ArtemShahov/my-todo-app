/* eslint-disable import/no-anonymous-default-export */
import { todo_interface } from "./../../common/TodoItem/interface";
import { category_interface } from "../interfaces";

const getCategories = (store: any) => store.categoriesReducer.allCategories;
const getActiveCategoryId = (store: any) => store.categoriesReducer.activeCategory;
const getActiveCategory = (store: any) => {
  const allCategories = store.categoriesReducer.allCategories;
  const activeCategoryId = store.categoriesReducer.activeCategory;
  return allCategories.find((item: category_interface) => item.id === activeCategoryId);
};
const getFieldValue = (store: any, field: string): string => store.categoriesReducer.addCategoryForm[field];
const getTodoItems = (store: any) => store.categoriesReducer.allTodoItems;
const getTodoItemStatus = (store: any, todoItemId: string): boolean => {
  const allTodoItems = store.categoriesReducer.allTodoItems;
  const todoItemById = allTodoItems.find((item: todo_interface) => item.id === todoItemId);
  return todoItemById.id;
};
const getFilterText = (store:any) => store.categoriesReducer.filter.text;

export default {
  getCategories,
  getActiveCategoryId,
  getFieldValue,
  getActiveCategory,
  getTodoItems,
  getTodoItemStatus,
  getFilterText,
};
