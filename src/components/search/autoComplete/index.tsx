import * as S from "./autoComplete.styles";
import { IAutoCompleteProps } from "./autoComplete.types";

export default function AutoComplete(props: IAutoCompleteProps) {
  const { searchKeyword, searchSuggestions, onClickSearchKeyword, onKeyUpSearchKeyword } = props;
  return (
    <>
      <S.SuggestionTitle>추천 검색어</S.SuggestionTitle>
      {searchSuggestions.map((keyword: { id: number; name: string }, index) => {
        const nameParts = keyword.name.split(searchKeyword);
        return (
          <S.SuggestionKeywordWrapper
            key={index}
            onClick={() => onClickSearchKeyword(keyword.name)}
            onKeyUp={event => onKeyUpSearchKeyword(event, keyword.name)}
          >
            {nameParts.map((part, index) => {
              if (part === "") {
                return (
                  <span key={index} style={{ fontWeight: "bold" }}>
                    {searchKeyword}
                  </span>
                );
              } else {
                return <span key={index}>{part}</span>;
              }
            })}
          </S.SuggestionKeywordWrapper>
        );
      })}
    </>
  );
}
