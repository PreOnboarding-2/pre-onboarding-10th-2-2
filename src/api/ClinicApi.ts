import axios from "axios";
// import customAxios from "../lib/customAxios"

const ClinicApi = () => {
  const getRecommendations = async (value: string) => {
    const res = await axios.get(`/api/v1/search-conditions/?name=${value}`);
    console.info("calling api");
    return res.data;
  };

  return {
    getRecommendations
  };
};

export default ClinicApi();