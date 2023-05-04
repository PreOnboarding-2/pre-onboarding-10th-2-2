import React, { useEffect } from "react";
import SearchBarRoundWrapper from "../search-bar-round-wrapper/SearchBarRoundWrapper";
import SearchBarInputWrapper from "../search-bar-input-wrapper/SearchBarInputWrapper";
import SearchButton from "../search-button/SearchButton";
import Input from "../../common/input/Input";
import useSearch from "../../../hook/useSearch";
import useCache from "../../../hook/useCache";
import RecommendComponent from "../../recommend/recommend-component/RecommendComponent";
import SearchIcon from "../../common/icon/SearchIcon";

const SearchBarComponent = () => {
  const { closeRecommendHandler, isFocus, focusHandler } = useSearch();
  const { data, debouncedHandler, inputText, isError } = useCache();

  useEffect(() => {
    document.addEventListener("click", closeRecommendHandler);
  }, [closeRecommendHandler]);

  return (
    <SearchBarRoundWrapper isFocus={isFocus}>
      <SearchBarInputWrapper>
        <Input type="search" onChange={debouncedHandler} onFocus={focusHandler} />
      </SearchBarInputWrapper>
      <SearchButton>
        <SearchIcon $isbtn />
      </SearchButton>
      <RecommendComponent
        searchList={data}
        isFocus={isFocus}
        inputText={inputText}
        isError={isError}
      />
    </SearchBarRoundWrapper>
  );
};

export default SearchBarComponent;
