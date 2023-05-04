import { KeyboardEvent, useRef, useState, useEffect } from "react";
import { MAX_NUMBER, SESSION_STORAGE_KEY } from "../../constant";
import AutoComplete from "./autoComplete";
import SearchBar from "./searchbar";
import SearchHistory from "./searchHistory";
import SuggestedSearchGroup from "./suggestedSearchGroup";
import * as S from "./search.styles";
import { isVisible, searchItem } from "./search.types";
import { moveDown, moveUp } from "../../utils";

export default function Search(prop: isVisible) {
  const [searchSuggestions, setSearchSuggestions] = useState<searchItem[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const searchRef = useRef<HTMLInputElement>(null);
  const numberRef = useRef(-1);

  useEffect(() => {
    const keywords = sessionStorage.getItem(SESSION_STORAGE_KEY);

    if (keywords !== null) {
      setRecentSearches(JSON.parse(keywords));
    }
  }, []);

  const onClickSearchKeyword = (keyword: string) => {
    if (searchRef.current !== null) {
      searchRef.current.value = keyword;
      setSearchKeyword(keyword);
    }
  };

  const onKeyUpSearchKeyword = (event: KeyboardEvent, keyword: string) => {
    if (!keyword) return;

    let currentNumber = numberRef.current;

    if (event.key === "Enter") {
      onClickSearchKeyword(keyword);
      prop.setIsVisible(false);
    }

    if (event.key === "ArrowUp") {
      moveUp({ currentNumber, searchSuggestions, setSearchKeyword, searchRef, numberRef });
    }

    if (event.key === "ArrowDown") {
      moveDown({ currentNumber, searchSuggestions, setSearchKeyword, searchRef, numberRef });
    }
  };

  const onClickSubmitSearch = () => {
    let keys = sessionStorage.getItem(SESSION_STORAGE_KEY);

    if (keys === null) {
      keys = `[]`;
    }

    const searchKeywordList = JSON.parse(keys);

    if (searchKeywordList.includes(searchKeyword)) {
      return;
    }

    if (searchKeywordList.length >= MAX_NUMBER) {
      searchKeywordList.pop();
    }

    sessionStorage.setItem(
      SESSION_STORAGE_KEY,
      JSON.stringify([searchKeyword, ...searchKeywordList])
    );
    setRecentSearches([searchKeyword, ...searchKeywordList]);

    if (searchRef.current !== null) {
      searchRef.current.value = "";
    }
    setSearchKeyword("");
    console.info("click search button");
  };

  return (
    <section>
      <S.SearchTitle>
        <span>국내 모든 임상시험 검색하고</span>
        <span>온라인으로 참여하기</span>
      </S.SearchTitle>
      <div onClick={event => event.stopPropagation()}>
        <SearchBar
          setSearchSuggestions={setSearchSuggestions}
          setSearchKeyword={setSearchKeyword}
          isVisible={prop.isVisible}
          setIsVisible={prop.setIsVisible}
          searchRef={searchRef}
          onClickSubmitSearch={onClickSubmitSearch}
          onKeyUpSearchKeyword={onKeyUpSearchKeyword}
        />
      </div>
      <S.SuggestionsWrapper isVisible={prop.isVisible} onClick={event => event.stopPropagation()}>
        {searchSuggestions.length === 0 ? (
          <>
            <SearchHistory recentSearches={recentSearches} />
            <SuggestedSearchGroup />
          </>
        ) : (
          <>
            <S.SearchKeyword>{searchKeyword}</S.SearchKeyword>
            <AutoComplete
              searchSuggestions={searchSuggestions}
              onClickSearchKeyword={onClickSearchKeyword}
              onKeyUpSearchKeyword={onKeyUpSearchKeyword}
            />
          </>
        )}
      </S.SuggestionsWrapper>
    </section>
  );
}
