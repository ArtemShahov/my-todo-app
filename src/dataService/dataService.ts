/* eslint-disable import/no-anonymous-default-export */
import { category_interface } from "../components/Categories/interfaces";

const URL = 'http://localhost:5050';

const getCategories = async () => {
    const response = await fetch(`${URL}/getCategories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}

const deleteCategory = async (categoryData: {categoryId: string }) => {
    const response = await fetch(`${URL}/deleteCategory`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(categoryData),
    });
    const data = await response.json();
    return data;
}

const getCategoriesItems = async () => {
    const response = await fetch(`${URL}/getCategoriesItems`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}

const addCategory = async (category: {name: string, parentId: string | null}) => {
    console.log(category);
    const response = await fetch (`${URL}/addCategory`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(category),
    });
    const data = await response.json();
    return data;
}

export default {
    getCategories,
    deleteCategory,
    getCategoriesItems,
    addCategory,
};
