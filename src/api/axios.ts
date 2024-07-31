import axios from "axios";

export const jsonInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const jwtInstance = axios.create({
  baseURL: "https://moneyfulpublicpolicy.co.kr",
});
