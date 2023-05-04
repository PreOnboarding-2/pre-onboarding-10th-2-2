import React, { ChangeEvent, useCallback, useEffect } from "react";
import fetchSearchSuggestions from "../../../api/fetchSearchSuggestions";
import { BASE_URL, CACHE_STORAGE_NAME, DATE_NAME, RESOURCE_PATH } from "../../../constant";
import { isCacheExpired } from "../../../utils";
import * as S from "./searchbar.styles";
import { ISearchBarProps } from "./searchbar.types";
import { useDebounce } from "../../../hook/useDebounce";
import SearchIcon from "../../../assets/SearchIcon";

export default function SearchBar(props: ISearchBarProps) {
  const debounce = useDebounce();

  const closeHandler = useCallback((e: MouseEvent) => {
    const element = e.target as HTMLElement;
    if (element.matches('input, .list-item') || element.closest('.list-item')) return;
    if (props.searchRef.current !== null) {
      props.searchRef.current.value = "";
    }
    props.setSearchSuggestions([]);
    props.setIsVisible(false);
  }, [props]);

  useEffect(() => {
    document.addEventListener('click', closeHandler);
  }, [closeHandler]);

  const onChangAutoCompleteSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;

    const time = async () => {
      let fetchData;

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

        console.info("calling api");
      }

      props.setSearchKeyword(keyword);
      props.setSearchSuggestions(fetchData.slice(0, 7) || []);
      props.setBoldText(keyword);
    };
    debounce(time);
}

  const onFocusAutoCompleteSearch = () => {
    props.setIsVisible(true);
  };

  return (
    <S.Container isVisible={props.isVisible}>
      <S.TextInputWrapper>
        <label htmlFor="search_bar_main"></label>
        <S.TextInput
          type="text"
          id="search_bar_main"
          placeholder={props.isVisible ? "" : "질환명을 입력해주세요."}
          ref={props.searchRef}
          onChange={onChangAutoCompleteSearch}
          onFocus={onFocusAutoCompleteSearch}
          onKeyUp={event =>
            props.onKeyUpSearchKeyword(
              event,
              props.searchRef.current ? props.searchRef.current.value : ""
            )
          }
        />
      </S.TextInputWrapper>
      <S.ButtonWrapper>
        <S.SearchButton onClick={props.onClickSubmitSearch}>
          <SearchIcon color="white" size={25} />
        </S.SearchButton>
      </S.ButtonWrapper>
    </S.Container>
  );
}
