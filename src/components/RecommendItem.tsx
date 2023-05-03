import React, { Fragment } from "react";
import useRecommned from "../hooks/useRecommend";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import SearchIcon from "./common/SearchIcon";
import { Wrapper, TextWrapper, Text, BoldText } from "./Recommend.style";

const RecommendItem = () => {
  const { search } = useRecommned();

  const selected = useSelector((state: RootState) => {
    return state.selected;
  });

  const compare = ["", ""];

  const renderRecommend = search.recommend.map((element, index) => {
    const splitElement = element.name.split(search.keyword);
    return (
      <Wrapper key={index} color={selected.selectedIndex === index ? "#f7f7fb" : "none"}>
        <SearchIcon color="#bababa" size={24} />
        <TextWrapper>
          {JSON.stringify(splitElement) === JSON.stringify(compare) ? (
            <BoldText>{search.keyword}</BoldText>
          ) : (
            splitElement.map((value, i) => {
              if (value === "") {
                return <BoldText key={i}>{search.keyword}</BoldText>;
              } else {
                return <Text key={i}>{value}</Text>;
              }
            })
          )}
        </TextWrapper>
      </Wrapper>
    );
  });

  return <Fragment>{renderRecommend}</Fragment>;
};

export default RecommendItem;
