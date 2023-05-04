import axios from "axios";

const ClinicApi = () => {
  const getRecommendations = async (value: string) => {
    const PROXY = window.location.hostname === "localhost" ? "" : "/proxy";
    const res = await axios.get(`${PROXY}/api/v1/search-conditions/?name=${value}`);
    console.info("calling api");
    return res.data;
  };

  return {
    getRecommendations,
  };
};

export default ClinicApi();
