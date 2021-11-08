import { category_interface } from "../interfaces";

/* eslint-disable import/no-anonymous-default-export */
const getCategories = (store: any) => store.categoriesReducer.allCategories;
const getActiveCategoryId = (store: any) =>
  store.categoriesReducer.activeCategory;
const getActiveCategory = (store: any) => {
  console.log('1');
  const allCategories = store.categoriesReducer.allCategories;
  const activeCategoryId = store.categoriesReducer.activeCategory;
  return allCategories.find((item: category_interface) => item.id === activeCategoryId);
};
const getFieldValue = (store: any, field: string) => store.categoriesReducer.addCategoryForm[field];

export default {
  getCategories,
  getActiveCategoryId,
  getFieldValue,
  getActiveCategory,
};
