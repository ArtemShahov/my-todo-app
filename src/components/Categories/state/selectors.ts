
/* eslint-disable import/no-anonymous-default-export */
const getCategories = (store: any) => store.categoriesReducer.allCategories;
const getActiveCategory = (store: any) =>
  store.categoriesReducer.activeCategory;
const getFieldValue = (store: any, field: string) => store.categoriesReducer.addCategoryForm[field];

export default {
  getCategories,
  getActiveCategory,
  getFieldValue,
};
