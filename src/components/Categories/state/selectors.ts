/* eslint-disable import/no-anonymous-default-export */
const getCategories = (store: any) => store.categoriesReducer.allCategories;

export default {
    getCategories,
};
