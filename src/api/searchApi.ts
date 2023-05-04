import axiosInstance from "../lib/axiosInstance";

const getSearchData = async (keyWord: string) => {
  const res = await axiosInstance.get(`/?name=${keyWord}`);
  return res.data;
};

export default getSearchData;
