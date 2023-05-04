import React from "react";
import useRecommned from "../hooks/useRecommend";
import RecommendItem from "./RecommendItem";
import {
  Section,
  Wrapper,
  RecommendWrapper,
  TextWrapper,
  BoldText,
  RecommendText,
} from "./style/Recommend.style";

const Recommend = () => {
  const { search } = useRecommned();

  return (
    <Section>
      <RecommendWrapper>
        <Wrapper>
          <BoldText>{search.keyword}</BoldText>
        </Wrapper>
        <RecommendText>추천 검색어</RecommendText>
        {search.recommend.length === 0 ? (
          <TextWrapper>
            <RecommendText>검색어 없음</RecommendText>
          </TextWrapper>
        ) : null}
        <RecommendItem />
      </RecommendWrapper>
    </Section>
  );
};

export default Recommend;
