import { SESSION_STORAGE_KEY } from "../../../constant";
import SearchIcon from "../../commons/icons/search";
import * as S from "./searchHistory.styles";
import { ISearchHistoryProps } from "./searchHistory.types";

export default function SearchHistory(props: ISearchHistoryProps) {
  return (
    <>
      <S.SuggestionTitle>최근 검색어</S.SuggestionTitle>
      {sessionStorage.getItem(SESSION_STORAGE_KEY) ? (
        props.recentSearches.map((searchKeyword, key) => (
          <S.RecentSearcheItem key={key}>
            <SearchIcon color="#BABABA" viewBox="0 -10 26 26" size={26} />
            <span>{searchKeyword}</span>
          </S.RecentSearcheItem>
        ))
      ) : (
        <S.NoSearch>최근 검색어가 없습니다</S.NoSearch>
      )}
    </>
  );
}
