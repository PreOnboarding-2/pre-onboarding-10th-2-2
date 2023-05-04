import React from "react";
import { RecommendWrapper } from "./RecommendComponent.style";
import { RecommendComponentProps } from "../../../types/recommend/RecommendProps";
// import RecommendTitle from "../recommend-title/RecommendTitle";
import RecommendList from "../recommend-list/RecommendList";

const RecommendComponent = ({
  isFocus,
  searchList,
  inputText,
  isError,
}: RecommendComponentProps) => {
  return (
    <RecommendWrapper isFocus={isFocus}>
      {/* <RecommendTitle>{titleText}</RecommendTitle> */}
      <RecommendList searchList={searchList} inputText={inputText} />
    </RecommendWrapper>
  );
};

export default RecommendComponent;
