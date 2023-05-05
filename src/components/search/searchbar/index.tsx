import { ChangeEvent, useState } from "react";
import fetchSearchSuggestions from "../../../api/fetchSearchSuggestions";
import { BASE_URL, CACHE_STORAGE_NAME, DATE_NAME, RESOURCE_PATH } from "../../../constant";
import { isCacheExpired } from "../../../utils";
import IconSearch from "../../../assets/icon-search-white.svg";
import * as S from "./searchbar.styles";
import { ISearchBarProps } from "./searchbar.types";

export default function SearchBar(props: ISearchBarProps) {
  const [debounce, setDebounce] = useState(0);

  const onChangeAutoCompleteSearch = async (event: ChangeEvent<HTMLInputElement>) => {
    const keyword = event.target.value;

    if (debounce) window.clearTimeout(debounce);

    const time = window.setTimeout(async () => {
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
    }, 300);

    setDebounce(time);
  };

  const onFocusAutoCompleteSearch = () => {
    props.setIsVisible(true);
  };

  const onBlurAutoCompleteSearch = () => {
    if (props.searchRef.current !== null) {
      props.searchRef.current.value = "";
    }
    props.setSearchSuggestions([]);
    props.setIsVisible(false);
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
          onChange={onChangeAutoCompleteSearch}
          onFocus={onFocusAutoCompleteSearch}
          onBlur={onBlurAutoCompleteSearch}
          onKeyUp={event =>
            props.onKeyUpSearchKeyword(
              event,
              props.searchRef.current ? props.searchRef.current.value : ""
            )
          }
        />
      </S.TextInputWrapper>
      <S.ButtonWrapper>
        <img
          src={IconSearch}
          alt="icon-search"
          onClick={props.onClickSubmitSearch}
          style={{ width: "25px", height: "25px" }}
        />
      </S.ButtonWrapper>
    </S.Container>
  );
}
