import axios from "axios";

export const jsonInstance = axios.create({
  baseURL: import.meta.env.VITE_SOME_TEST_URL,
});
