import axios from "axios";
import { BASE_URL } from "../data/constant";

const customAxios = axios.create({
  baseURL: BASE_URL,
});

export default customAxios;
