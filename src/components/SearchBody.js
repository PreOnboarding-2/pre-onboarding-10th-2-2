import React from "react";
import styled from "styled-components";

import SearchRecommend from "./SearchRecommend";
import useSearch from "../hooks/useSearch";

const SearchBody = () => {
  const { input, handleInput, recommendList } = useSearch();

  return (
    <>
      <InputContainer>
        <InputBox value={input} onChange={handleInput} placeholder="질환명을 입력해 주세요." />
      </InputContainer>
      <SearchRecommend recommendList={recommendList} />
    </>
  );
};

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 15px 20px;
  border-radius: 2rem;
  border-color: #c2c8ce;
  background-color: #ffffff;
`;

const InputBox = styled.input`
  width: 85%;
  padding: 0.3rem;
  border: none;
  font-size: 1.1rem;
`;

export default SearchBody;
