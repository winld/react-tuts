import axios from "axios";
import api from "./api";

const ajax = axios.create({
  baseURL: api.baseURL
});

//在这里还会去做一些全局的拦截器处理
export const getTodos = () => {
  return ajax.get(api.todos);
};
