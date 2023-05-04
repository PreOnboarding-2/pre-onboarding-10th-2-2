import axios from "axios";

const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
const API = axios.create({
  baseURL: `${PROXY}/api/v1/search-conditions`,
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
