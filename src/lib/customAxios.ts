import axios from "axios";
import { SERVER } from "../constant/constant";

const customAxios = axios.create({
  baseURL: SERVER,
});

customAxios.interceptors.request.use(config => {
  config.withCredentials = true;
  config.headers['Access-Control-Allow-Origin'] = '*';
  return config;
});

export default customAxios;
