import axios from "axios";
import { RESOURCE_PATH } from "../constant";

const customAxios = axios.create({
  baseURL: RESOURCE_PATH,
});

customAxios.interceptors.response.use(
  response => response,
  error => {
    alert("검색중 오류가 발생했습니다.");
    return Promise.reject(error);
  }
);

export default customAxios;
