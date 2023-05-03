import React from "react";
import styled from "styled-components";

const SearchResult = () => {
  return (
    <SearchResultContainer>
      <SearchResultItem>검색어 없음</SearchResultItem>
    </SearchResultContainer>
  );
};

const SearchResultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  padding: 15px 20px;
  margin-top: 1rem;
  border-radius: 1rem;
  border-color: #c2c8ce;
  background-color: #ffffff;
`;

const SearchResultItem = styled.span`
  font-size: 1.1rem;
`;

export default SearchResult;
