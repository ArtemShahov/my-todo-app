/* eslint-disable import/no-anonymous-default-export */

import { category_interface } from "../components/Categories/interfaces";

const getCategories = async () => {
    const response = await fetch(`http://localhost:5050/getCategories`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}

const removeCategory = async (category: category_interface) => {
    const response = await fetch(`http://localhost:5050/removeCategory`, {
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
    const response = await fetch(`http://localhost:5050/getCategoriesItems`, {
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
    const response = await fetch (`http://localhost:5050/addCategory`, {
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
