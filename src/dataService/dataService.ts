/* eslint-disable import/no-anonymous-default-export */
import { todo_interface } from "../components/common/TodoItem/interface";
import { category_interface } from "./../components/Categories/interfaces";

const getRequest =
  (path: string) =>
  async <T>(): Promise<T> => {
    const requestURL = URL + path;
    const response = await fetch(requestURL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  };

const postRequest =
  (path: string) =>
  async <RequestType, ResponseType>(requestData: RequestType): Promise<ResponseType> => {
    const requestURL = URL + path;
    const response = await fetch(requestURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });
    const data = await response.json();
    return data;
  };

const getCategories: () => Promise<category_interface[]> = getRequest("/getCategories");
const getTodoItems: () => Promise<todo_interface[]> = getRequest("/getTodoItems");

const deleteCategory: (categoryData: { categoryId: string | null }) => Promise<category_interface[]> =
  postRequest("/deleteCategory");
const addCategory: (category: { name: string; parentId: string | null }) => Promise<category_interface[]> =
  postRequest("/addCategory");

const addTodoItem: (todoItem: { title: string; content: string; parentId: string }) => Promise<{
  categories: category_interface[];
  todoItems: todo_interface[];
}> = postRequest("/addTodoItem");

const deleteTodoItem: (todoItem: { id: string; parentId: string }) => Promise<{
  categories: category_interface[];
  todoItems: todo_interface[];
}> = postRequest("/deleteTodoItem");

const changeTodoItemStatus: (todoItemId: { id: string }) => Promise<todo_interface[]> =
  postRequest("/changeTodoItemStatus");

export default {
  getCategories,
  getTodoItems,
  deleteCategory,
  addCategory,
  addTodoItem,
  deleteTodoItem,
  changeTodoItemStatus,
};
