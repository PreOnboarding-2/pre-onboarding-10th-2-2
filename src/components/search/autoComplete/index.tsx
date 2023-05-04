import * as S from "./autoComplete.styles";
import { IAutoCompleteProps } from "./autoComplete.types";
import SearchIcon from "../../common/SearchIcon";

export default function AutoComplete(props: IAutoCompleteProps) {
  return (
    <>
      <S.SuggestionTitle>추천 검색어</S.SuggestionTitle>
      {props.searchSuggestions.map((keyword: { id: number; name: string }, index) => {
        const splitName = keyword.name.split(props.searchKeyword);
        return (
          <S.SuggestionKeywordWrapper
            key={index}
            onClick={() => props.onClickSearchKeyword(keyword.name)}
            onKeyUp={event => props.onKeyUpSearchKeyword(event, keyword.name)}
          >
            <div>
              <SearchIcon color="#BABABA" viewBox="0 -10 26 26" size={26} />
              {JSON.stringify(splitName) === JSON.stringify(["", ""])
                ? props.searchKeyword
                : splitName.map((value, i) => {
                    if (value === "") {
                      return <S.SearchKeyword key={i}>{props.searchKeyword}</S.SearchKeyword>;
                    } else {
                      return value;
                    }
                  })}
            </div>
          </S.SuggestionKeywordWrapper>
        );
      })}
    </>
  );
}
