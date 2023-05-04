import React, { useState } from "react";
import ClinicApi from "../api/ClinicApi";
import { CacheObject, Data } from "../types/cache/CacheObject";

const useCache = () => {
  const [data, setData] = useState<Data[]>([]);
  const [cache, setCache] = useState<{ [key: string]: CacheObject }>({});
  const [inputText, setInputText] = useState("");
  const [isError, setIsError] = useState(false);

  const changeHandler = async ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = target;
    if (value === "") {
      setData([]);
      setIsError(true);
      return;
    }
    const cachedData = cache[value];
    setInputText(value);
    if (cachedData && Date.now() - cachedData.timestamp < 10000) {
      setData(cachedData.data);
      setIsError(cachedData.data.length === 0);
    } else {
      try {
        const newData = await ClinicApi.getRecommendations(value);
        setData(newData);
        setCache({ ...cache, [value]: { data: newData, timestamp: Date.now() } });
        setIsError(newData.length === 0);
      } catch {
        setIsError(true);
      }
    }
  };

  const debounce = (callback: typeof changeHandler, delay: number) => {
    let timeout: ReturnType<typeof setTimeout>;
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        callback(e);
      }, delay);
    };
  };

  const debouncedHandler = debounce(changeHandler, 500);

  return {
    debouncedHandler,
    data,
    inputText,
    isError,
  };
};

export default useCache;
