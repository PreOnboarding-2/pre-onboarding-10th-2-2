import customAxios from '../lib/customAxios';

interface ReturnType {

}

const SearchApi = () => {
  const getRecommend = async (keyword: string): Promise<ReturnType> => {
    const result = await customAxios.get("/name=" + keyword);
    return result;
  }

  return { getRecommend }
}

export default SearchApi();