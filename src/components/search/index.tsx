import { KeyboardEvent, useRef, useState, useEffect } from "react";
import { MAX_NUMBER, SESSION_STORAGE_KEY } from "../../constant";
import AutoComplete from "./autoComplete";
import SearchBar from "./searchbar";
import SearchHistory from "./searchHistory";
import SuggestedSearchGroup from "./suggestedSearchGroup";
import * as S from "./search.styles";
import { searchItem } from "./search.types";
import { moveDown, moveUp } from "../../utils";
import useToggle from "../../hook/useToggle";

export default function Search() {
  const [searchSuggestions, setSearchSuggestions] = useState<searchItem[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [boldText, setBoldText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const suggestionWrapperRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef(-1);
  const { searchRef, closeHandler } = useToggle({ setSearchSuggestions, setIsVisible })

  useEffect(() => {
    const keywords = sessionStorage.getItem(SESSION_STORAGE_KEY);

    if (keywords !== null) {
      setRecentSearches(JSON.parse(keywords));
    }
  }, []);

  const onClickSearchKeyword = (keyword: string) => {
    if (searchRef.current !== null) {
      searchRef.current.value = keyword;
    }
    setIsVisible(false);

    onClickSubmitSearch();
  };

  const onKeyUpSearchKeyword = (event: KeyboardEvent, keyword: string) => {
    if (!keyword) return;

    let currentNumber = numberRef.current;

    if (event.key === "Enter") {
      onClickSearchKeyword(keyword);
      setIsVisible(false);
    }

    if (event.key === "ArrowUp" || event.shiftKey && event.key === 'Tab') {
      moveUp({
        currentNumber,
        searchSuggestions,
        setSearchKeyword,
        searchRef,
        numberRef,
        suggestionWrapperRef,
      });
    }

    if (event.key === "ArrowDown" || event.key === "Tab") {
      moveDown({
        currentNumber,
        searchSuggestions,
        setSearchKeyword,
        searchRef,
        numberRef,
        suggestionWrapperRef,
      });
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
    <S.SearchSection onClick={closeHandler}>
      <S.SearchTitle>
        <span>국내 모든 임상시험 검색하고</span>
        <span>온라인으로 참여하기</span>
      </S.SearchTitle>
      <SearchBar
        setSearchSuggestions={setSearchSuggestions}
        setSearchKeyword={setSearchKeyword}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        searchRef={searchRef}
        onClickSubmitSearch={onClickSubmitSearch}
        onKeyUpSearchKeyword={onKeyUpSearchKeyword}
        setBoldText={setBoldText}
      />
      <S.SuggestionsWrapper isVisible={isVisible}>
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
              suggestionWrapperRef={suggestionWrapperRef}
              searchRef={searchRef}
              boldText={boldText}
            />
          </>
        )}
      </S.SuggestionsWrapper>
    </S.SearchSection>
  );
}
