import React from "react";
import RecommendItemUI from "./RecommendItem.style";
import SearchIcon from "../../common/icon/SearchIcon.style";
import { RecommendItemProps } from "../../../types/recommend/RecommendProps";
import { NormalText, Bold } from "../../common/font-weight/font-weight";

const RecommendItem = ({ children, inputText }: RecommendItemProps) => {
  const newName = (children as string).split(inputText).map((char, idx) => {
    if (char === '') return <Bold key={idx}>{inputText}</Bold>;
    return <NormalText key={idx}>{char}</NormalText>;
  });

  return (
    <RecommendItemUI tabIndex={0}>
      <SearchIcon $isbtn={false} />
      {newName}
    </RecommendItemUI>
  );
};

export default RecommendItem;
