import { useEffect, useState } from "react";

import useDebounce from "./useDeboucing";
import searchAPI from "../api/searchAPI";

const useSearch = () => {
  const [input, setInput] = useState("");
  const [isFocus, setIsFocus] = useState(false);
  const [recommendList, setRecommendList] = useState([]);
  const [selectedRecommend, setSelectedRecommend] = useState(-1);
  const debouncedValue = useDebounce(input, 500);

  useEffect(() => {
    const keyword = debouncedValue?.trim();
    if (!keyword) return setRecommendList([]);

    const fetchData = async () => {
      const { data } = await searchAPI.getRecommend(keyword);
      setRecommendList(data);
    };
    fetchData();
  }, [debouncedValue]);

  const handleInput = e => {
    setInput(e.target.value);
    setSelectedRecommend(-1);
  };

  const handleFocus = () => {
    setIsFocus(true);
  };

  const handleBlur = () => {
    setIsFocus(false);
  };

  const handleKeyDown = e => {
    if (recommendList) {
      if (e.key === "ArrowUp") {
        setSelectedRecommend(prev => (prev === 0 ? recommendList.length - 1 : prev - 1));
      }
      if (e.key === "ArrowDown") {
        setSelectedRecommend(prev => (prev === recommendList.length - 1 ? 0 : prev + 1));
      }
      if (e.key === "Enter") {
        if (selectedRecommend !== -1) {
          setInput(recommendList[selectedRecommend]?.name);
          setSelectedRecommend(-1);
        }
      }
    }
  };

  return { input, isFocus, handleInput, handleFocus, handleBlur, handleKeyDown, recommendList };
};

export default useSearch;
