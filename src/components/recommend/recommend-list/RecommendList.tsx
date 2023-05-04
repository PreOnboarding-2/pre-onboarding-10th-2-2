import React from "react";
import { RecommendListProps } from "../../../types/recommend/RecommendProps";
import RecommendItem from "../recommend-item/RecommendItem";

const RecommendList = ({ searchList, inputText }: RecommendListProps) => (
  <>
    {searchList.map(({ name, id }) => (
      <RecommendItem key={id} inputText={inputText}>
        {name}
      </RecommendItem>
    ))}
  </>
);

export default RecommendList;
