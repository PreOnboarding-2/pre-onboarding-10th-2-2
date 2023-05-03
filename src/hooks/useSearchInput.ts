import React, { useState, useEffect, useCallback } from "react";
import SearchApi from "../api/SearchApi";
import { useDispatch } from "react-redux";
import { set } from "../store/searchSlice";

const useSearchInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const getRecommendHandler = useCallback(async () => {
    try {
      const result = await SearchApi.getRecommend(input);
      const data = {
        keyword: input,
        recommend: result.data,
      };
      dispatch(set(data));
    } catch (error) {
      alert(error);
    }
  }, [dispatch, input]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  let timer: any;
  useEffect(() => {
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
