import axios from "axios";

axios.defaults.withCredentials = true;

const API = axios.create({
  // baseURL: "https://api.clinicaltrialskorea.com/api/v1/search-conditions",
  baseURL: "http://localhost:3001/list",
});

export default API;
