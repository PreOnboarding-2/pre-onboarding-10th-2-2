import styled from "styled-components";

export const SuggestionTitle = styled.div`
  font-size: 12px;
  padding: 25px 0;
  font-weight: 600;
  color: #767f86;
`;

export const SuggestionKeywordWrapper = styled.div`
  padding: 10px 0;
  text-indent: 10px;
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export const SuggestionListWrapper = styled.div``;

export const SuggestionText = styled.span`
  padding-top: 3px;
`;

export const Bold = styled.span`
  font-weight: bold;
  text-indent: 0;
`;

export const NormalText = styled.span`
  text-indent: 0;
  white-space: pre;
`;
