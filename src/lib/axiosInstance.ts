import axios from "axios";
import { SERVER } from "../constant/constant";

const axiosInstance = axios.create({
  baseURL: SERVER,
});

export default axiosInstance;
