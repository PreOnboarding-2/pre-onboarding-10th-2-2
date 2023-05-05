import SearchIcon from "../../../assets/SearchIcon";
import * as S from "./autoComplete.styles";
import { IAutoCompleteProps } from "./autoComplete.types";

export default function AutoComplete(props: IAutoCompleteProps) {
  return (
    <>
      <S.SuggestionTitle>추천 검색어</S.SuggestionTitle>
      <S.SuggestionListWrapper ref={props.suggestionWrapperRef}>
        {props.searchSuggestions.map((keyword: { id: number; name: string }, index) => {
          const tempName = keyword.name.replaceAll(props.boldText, "@").split("");
          const newName = tempName.map((char, idx) => {
            if (char === "@") return <S.Bold key={idx}>{props.boldText}</S.Bold>;
            return <S.NormalText key={idx}>{char}</S.NormalText>;
          });
          return (
            <S.SuggestionKeywordWrapper
              key={index}
              onClick={() => props.onClickSearchKeyword(keyword.name)}
              onKeyUp={event => props.onKeyUpSearchKeyword(event, keyword.name)}
              tabIndex={0}
              className="list-item"
            >
              <SearchIcon color="gray" size={18} />
              {newName}
            </S.SuggestionKeywordWrapper>
          );
        })}
      </S.SuggestionListWrapper>
    </>
  );
}
