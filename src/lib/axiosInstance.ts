import axios from "axios";
import { SERVER } from "../constant/constant";

const customAxios = axios.create({
  baseURL: SERVER,
});

export default customAxios;
