import React from "react";
import styled from "styled-components";

const SearchRecommend = ({ recommendList }) => {
  return (
    <SearchRecommendContainer>
      {recommendList.length ? (
        recommendList.map(res => {
          return <SearchRecommendItem key={res.id}>{res.name}</SearchRecommendItem>;
        })
      ) : (
        <SearchRecommendItem>검색어 없음</SearchRecommendItem>
      )}
    </SearchRecommendContainer>
  );
};

const SearchRecommendContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: 15px 20px;
  margin-top: 1rem;
  border-radius: 1rem;
  border-color: #c2c8ce;
  background-color: #ffffff;
`;

const SearchRecommendItem = styled.span`
  padding: 0.5rem 0rem;
  font-size: 1.1rem;
`;

export default SearchRecommend;
