import axios from "axios";

const API = axios.create({
  baseURL: "/api/v1/search-conditions",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
