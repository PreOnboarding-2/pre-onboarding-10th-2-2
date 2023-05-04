import axios from "axios";
import { SERVER } from "../constant/constant";

const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";

const customAxios = axios.create({
  baseURL: PROXY + SERVER,
});

export default customAxios;
