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

const removeCategory = async (category: category_interface) => {
    const response = await fetch(`${URL}/removeCategory`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(category),
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

const addCategory = async (category: {name: string, parentId: any}) => {
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
    removeCategory,
    getCategoriesItems,
    addCategory,
};
