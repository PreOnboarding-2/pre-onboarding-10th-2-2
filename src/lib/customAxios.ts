import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://api.clinicaltrialskorea.com"
});

export default customAxios;