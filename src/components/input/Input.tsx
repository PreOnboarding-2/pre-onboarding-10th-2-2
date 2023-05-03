import React from "react";
import IconSearch from "../../assets/icon-search.svg";
import IconSearchWhite from "../../assets/icon-search-white.svg";
import * as St from "./input.style";

const Input = () => {
  return (
    <St.InputContainer style={{ display: "flex", position: "relative" }}>
      <St.StyledInput type="search" placeholder="질환명을 입력해 주세요" />
      <img
        src={IconSearch}
        alt="icon-search"
        style={{ position: "absolute", left: "0", margin: "25px" }}
      />
      <St.WhiteSearchIconBox>
        <img src={IconSearchWhite} alt="icon-search" style={{ width: "20px", height: "20px" }} />
      </St.WhiteSearchIconBox>
    </St.InputContainer>
  );
};

export default Input;
