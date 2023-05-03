import axios from "axios";
import { SERVER } from '../constant/constant';

const customAxios = axios.create({
  baseURL: SERVER,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    'Access-Control-Allow-Credentials': "true",
  }
});

customAxios.interceptors.request.use(
  config => {
    config.withCredentials = true;
    return config;
  }
)

export default customAxios;