import React from "react";
import useRecommned from "../hooks/useRecommend";
import { Section, RecommendWrapper, RecommendDiv, Text, RecommendText } from "./Recommend.style";

const Recommend = () => {
  const { search } = useRecommned();

  const renderRecommend = search.recommend.map((element, index) => (
    <Text key={index}>{element.name}</Text>
  ));

  return (
    <Section>
      <RecommendWrapper>
        <Text>{search.keyword}</Text>
        <RecommendText>추천 영역</RecommendText>
        <RecommendDiv>{renderRecommend}</RecommendDiv>
      </RecommendWrapper>
    </Section>
  );
};

export default Recommend;
