/* eslint-disable import/no-anonymous-default-export */
const getCategories = (store: any) => store.categoriesReducer.allCategories;
const getActiveCategory = (store:any) => {
    return store.categoriesReducer.activeCategory};

export default {
    getCategories,
    getActiveCategory,
};
