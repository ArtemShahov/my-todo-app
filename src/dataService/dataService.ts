/* eslint-disable import/no-anonymous-default-export */

const URL = "http://localhost:5050";

const getCategories = async () => {
  const response = await fetch(`${URL}/getCategories`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const getTodoItems = async () => {
    const response = await fetch(`${URL}/getTodoItems`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
}

const deleteCategory = async (categoryData: { categoryId: string }) => {
  const response = await fetch(`${URL}/deleteCategory`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(categoryData),
  });
  const data = await response.json();
  return data;
};

const getCategoriesItems = async () => {
  const response = await fetch(`${URL}/getCategoriesItems`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const addCategory = async (category: {
  name: string;
  parentId: string | null;
}) => {
  const response = await fetch(`${URL}/addCategory`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(category),
  });
  const data = await response.json();
  return data;
};

const addTodoItem = async (todoItemData: {
  title: string;
  content: string;
  parentId: string;
}) => {
  const response = await fetch(`${URL}/addTodoItem`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todoItemData),
  });
  const data = await response.json();
  return data;
};

export default {
  getCategories,
  getTodoItems,
  deleteCategory,
  getCategoriesItems,
  addCategory,
  addTodoItem,
};
