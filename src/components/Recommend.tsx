import React from "react";
import useRecommned from "../hooks/useRecommend";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import SearchIcon from "./common/SearchIcon";
import {
  Section,
  RecommendWrapper,
  TextWrapper,
  BoldText,
  Text,
  RecommendText,
} from "./Recommend.style";

const Recommend = () => {
  const { search } = useRecommned();

  const selected = useSelector((state: RootState) => {
    return state.selected;
  });

  const renderRecommend = search.recommend.map((element, index) => {
    return (
      <TextWrapper key={index} color={selected.selectedIndex === index ? "#f7f7fb" : "none"}>
        <SearchIcon color="#bababa" size={24} />
        <Text>{element.name}</Text>
      </TextWrapper>
    );
  });

  return (
    <Section>
      <RecommendWrapper>
        <TextWrapper>
          <BoldText>{search.keyword}</BoldText>
        </TextWrapper>
        <RecommendText>추천 영역</RecommendText>
        {search.recommend.length === 0 ? <Text>검색어 없음</Text> : null}
        {renderRecommend}
      </RecommendWrapper>
    </Section>
  );
};

export default Recommend;
