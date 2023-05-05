import { ChangeEvent } from "react";
import fetchSearchSuggestions from "../../../api/fetchSearchSuggestions";
import { BASE_URL, CACHE_STORAGE_NAME, DATE_NAME, RESOURCE_PATH } from "../../../constant";
import { isCacheExpired } from "../../../utils";
import { debounce } from "../../../utils/debounce";
import * as S from "./searchbar.styles";
import { ISearchBarProps } from "./searchbar.types";

export default function SearchBar({
  isVisible,
  setIsVisible,
  searchRef,
  setSearchKeyword,
  setSearchSuggestions,
  onClickSubmitSearch,
  onKeyUpSearchKeyword,
}: ISearchBarProps) {
  const onChangAutoCompleteSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;
    let fetchData = [];

    if (keyword) {
      const cache = await caches.open(CACHE_STORAGE_NAME);
      const cacheResponse = await cache.match(`${BASE_URL}${RESOURCE_PATH}/?name=${keyword}`);

      if (cacheResponse && !isCacheExpired(cacheResponse)) {
        fetchData = await cacheResponse.json();
      } else {
        fetchData = await fetchSearchSuggestions(keyword);

        let newHeaders = new Headers(fetchData.headers);
        newHeaders.append(DATE_NAME, new Date().toISOString());

        await cache.put(
          `${BASE_URL}${RESOURCE_PATH}/?name=${keyword}`,
          new Response(JSON.stringify(fetchData), {
            headers: newHeaders,
          })
        );
      }
    }

    setSearchKeyword(keyword);
    setSearchSuggestions(fetchData.slice(0, 7) || []);
  };

  const onFocusAutoCompleteSearch = () => {
    setIsVisible(true);
  };

  const onBlurAutoCompleteSearch = () => {
    if (searchRef.current !== null) {
      searchRef.current.value = "";
    }
    setSearchSuggestions([]);
    setIsVisible(false);
  };

  return (
    <S.Container isVisible={isVisible}>
      <S.TextInputWrapper>
        <label htmlFor="search_bar_main"></label>
        <S.TextInput
          type="text"
          id="search_bar_main"
          placeholder={isVisible ? "" : "질환명을 입력해주세요."}
          ref={searchRef}
          onChange={debounce(onChangAutoCompleteSearch, 300)}
          onFocus={onFocusAutoCompleteSearch}
          onBlur={onBlurAutoCompleteSearch}
          onKeyUp={event =>
            onKeyUpSearchKeyword(event, searchRef.current ? searchRef.current.value : "")
          }
        />
      </S.TextInputWrapper>
      <S.ButtonWrapper>
        <S.SearchButton onClick={onClickSubmitSearch}>검색</S.SearchButton>
      </S.ButtonWrapper>
    </S.Container>
  );
}
