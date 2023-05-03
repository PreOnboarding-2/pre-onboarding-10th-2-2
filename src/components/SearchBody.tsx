import React from "react";
import styled from "styled-components";

import SearchResult from "./SearchResult";

const SearchBody = () => {
  return (
    <>
      <InputContainer>
        <InputBox placeholder="질환명을 입력해 주세요." />
      </InputContainer>
      <SearchResult />
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
