/* eslint-disable import/no-anonymous-default-export */

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

const removeCategory = async (category: any) => {
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
export default {
    getCategories,
    removeCategory,
    getCategoriesItems,
};
