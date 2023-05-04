import customAxios from "../lib/customAxios";

const SearchApi = () => {
  const getRecommend = async keyword => {
    const result = await customAxios.get(`/?name=${keyword}`);
    return result;
  };

  return { getRecommend };
};

export default SearchApi();
