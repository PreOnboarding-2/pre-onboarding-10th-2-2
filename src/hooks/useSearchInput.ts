import React, { useState, useEffect, useCallback } from "react";
import SearchApi from "../api/SearchApi";
import { useDispatch } from "react-redux";
import { set } from "../store/searchSlice";
import { getKeyword, setKeyword } from "../utils/sessionStorage";

const useSearchInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const getRecommendHandler = useCallback(async () => {
    try {
      if (getKeyword(input)) {
        const result = getKeyword(input);
        const data = {
          keyword: input,
          recommend: result,
        };
        dispatch(set(data));
      } else {
        const result = await SearchApi.getRecommend(input);
        const data = {
          keyword: input,
          recommend: result.data,
        };
        dispatch(set(data));
        if (result.data.length !== 0) {
          setKeyword(input, result.data);
        }
      }
    } catch (error) {
      alert(error);
    }
  }, [dispatch, input]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    let timer: any;
    if (input.trim() !== "") {
      timer = setTimeout(() => {
        getRecommendHandler();
      }, 300);
    }
    return () => clearTimeout(timer);
  }, [input, getRecommendHandler]);

  return {
    input,
    changeHandler,
    submitHandler,
  };
};

export default useSearchInput;
