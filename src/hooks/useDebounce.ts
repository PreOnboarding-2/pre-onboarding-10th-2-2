import { useState, useEffect, ChangeEvent, useCallback } from "react";
import axiosInstance from "../lib/axiosInstance";
import { SearchDataType } from "../types/data";

const useDebounce = () => {
  const [keyWord, setKeyWord] = useState("");
  const [recommendData, setRecommendData] = useState<SearchDataType[]>([]);

  const getRecommendData = useCallback(async () => {
    if (keyWord) {
      const URL = `/?name=${keyWord}`;

      const cacheStorage = await caches.open("search");
      const responsedCache = await cacheStorage.match(URL);

      try {
        if (responsedCache) {
          const res = await responsedCache.json();
          setRecommendData(res);
        } else {
          const res = await axiosInstance.get(URL);
          cacheStorage.put(URL, new Response(JSON.stringify(res.data)));
          setRecommendData(res.data);
        }
      } catch (err) {
        alert(err);
      }
    }
  }, [keyWord]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      getRecommendData();
    }, 300);

    return () => clearTimeout(timerId);
  }, [getRecommendData, keyWord]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
  };

  return {
    keyWord,
    onChange,
    recommendData,
  };
};

export default useDebounce;
