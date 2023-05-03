import React, { useState, useEffect } from "react";
import SearchApi from "../api/SearchApi";
import { useDispatch } from "react-redux";
import { set } from "../store/searchSlice";

const DUMMY_DATA = [
  {
    name: "갑상선암",
    id: 4373,
  },
  {
    name: "갑상선염",
    id: 4376,
  },
  {
    name: "갑상선중독증",
    id: 4378,
  },
  {
    name: "갑상선 중독",
    id: 4381,
  },
  {
    name: "갑상선암종",
    id: 4375,
  },
  {
    name: "갑상선염증",
    id: 4377,
  },
  {
    name: "갑상선 결절",
    id: 4355,
  },
  {
    name: "갑상선 항진증",
    id: 4372,
  },
  {
    name: "갑상선저하증",
    id: 4368,
  },
  {
    name: "갑상선기능저하증",
    id: 4364,
  },
  {
    name: "갑상선기능항진증",
    id: 4369,
  },
  {
    name: "갑상선 수질암",
    id: 4359,
  },
  {
    name: "갑상선 여포암",
    id: 4361,
  },
  {
    name: "갑상선 유두암",
    id: 4363,
  },
  {
    name: "갑상선기능저하",
    id: 4367,
  },
  {
    name: "갑상선 미분화암",
    id: 4357,
  },
];

const useSearchInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const data = {
      keyword: "갑상선",
      recommend: DUMMY_DATA,
    };
    dispatch(set(data));
  }, [input, dispatch]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("검색됨: " + input);
    try {
      const result = await SearchApi.getRecommend(input);
      alert(result);
    } catch (error) {
      alert(error);
    }
  };

  return {
    input,
    changeHandler,
    submitHandler,
  };
};

export default useSearchInput;
