import React, { ChangeEvent, useCallback, KeyboardEvent, useEffect, useState } from "react";
import axiosInstance from "../../lib/axiosInstance";
import IconSearch from "../../assets/icon-search.svg";
import IconSearchWhite from "../../assets/icon-search-white.svg";
import { SearchData } from "../../types/data";
import DropDown from "../DropDown/DropDown";
import useKeyHandler from "../../hooks/useKeyHandler";
import * as St from "./SearchInput.style";

const Input = () => {
  const [keyWord, setKeyWord] = useState("");
  const [recommendData, setRecommendData] = useState<SearchData[]>([]);
  const { handleArrowDown, handleArrowUp, handleEnter } = useKeyHandler();

  const getRecommendData = useCallback(async () => {
    if (keyWord) {
      const data = await axiosInstance.get(`/?name=${keyWord}`);
      setRecommendData(data.data);
    }
  }, [keyWord]);

  useEffect(() => {
    getRecommendData();
  }, [getRecommendData]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    switch (e.key) {
      case "ArrowDown":
        handleArrowDown();
        break;
      case "ArrowUp":
        handleArrowUp();
        break;
      case "Enter":
        handleEnter();
        break;
      default:
        break;
    }
  };

  return (
    <St.InputContainer>
      <St.StyledInput
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="search"
        placeholder="질환명을 입력해 주세요"
      />
      <img
        src={IconSearch}
        alt="icon-search"
        style={{ position: "absolute", left: "0", margin: "25px" }}
      />
      <St.WhiteSearchIconBox>
        <img src={IconSearchWhite} alt="icon-search" style={{ width: "20px", height: "20px" }} />
      </St.WhiteSearchIconBox>
      {keyWord && <DropDown recommendData={recommendData} />}
    </St.InputContainer>
  );
};

export default Input;
