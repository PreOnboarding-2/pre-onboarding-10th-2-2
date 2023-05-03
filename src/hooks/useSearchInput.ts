import React, { useState, useEffect } from "react";
import SearchApi from "../api/SearchApi";
import { useDispatch } from "react-redux";
import { set } from "../store/searchSlice";

const useSearchInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (input.trim() !== "") {
      getRecommendHandler();
    }
  }, [input]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const getRecommendHandler = async () => {
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
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return {
    input,
    changeHandler,
    submitHandler,
  };
};

export default useSearchInput;
