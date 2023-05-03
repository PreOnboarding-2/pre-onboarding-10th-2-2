import axios from "axios";

const API = axios.create({
  baseURL: "/api/v1/search-conditions",
});

export default API;
