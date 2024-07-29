import { jsonInstance } from "./axios";

export const getTodos = async () => {
  try {
    const res = await jsonInstance.get("/todos");
    return res.data;
  } catch (error) {
    Promise.reject(error);
  }
};

export const getTodo = async () => {
  try {
    const res = await jsonInstance.get("/todos/1");
    return res.data;
  } catch (error) {
    Promise.reject(error);
  }
};
