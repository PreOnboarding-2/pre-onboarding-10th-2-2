import axios from "axios";
import { SERVER } from "../constant/constant";

const axiosInstance = axios.create({
  baseURL: SERVER,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
