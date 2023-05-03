import customAxios from "../lib/customAxios";

interface Data {
  name: string;
  id: number;
}

interface ReturnType {
  data: Data[];
}

const SearchApi = () => {
  const getRecommend = async (keyword: string): Promise<ReturnType> => {
    console.info("calling api");
    const result = await customAxios.get("/?name=" + keyword);
    return result;
  };

  return { getRecommend };
};

export default SearchApi();
