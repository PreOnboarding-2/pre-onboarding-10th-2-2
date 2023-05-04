import { useCallback, useEffect, useState } from "react";

import useDebounce from "./useDeboucing";
import searchAPI from "../api/searchAPI";

const useSearch = () => {
  const [input, setInput] = useState("");
  const [recommendList, setRecommendList] = useState([]);
  const debouncedValue = useDebounce(input, 500);

  useEffect(() => {
    const keyword = debouncedValue?.trim();
    if (!keyword) return;

    const fetchData = async () => {
      const { data } = await searchAPI.getRecommend(keyword);
      setRecommendList(data);
    };
    fetchData();
  }, [debouncedValue]);

  const handleInput = useCallback(e => {
    setInput(e.target.value);
  }, []);

  return { input, handleInput, recommendList };
};

export default useSearch;
