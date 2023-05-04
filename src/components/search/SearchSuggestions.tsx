import React from "react";
import SearchBar from "./SearchBar";
import SearchResCont from "./searchArea.style";
import RecommendedList from "./RecommendList/RecommendList";
import NoSearchResWrapper from "./noSearchRes.style";
import useToggle from "../../hooks/search/useToggle";
import useSearchBarRef from "../../hooks/search/useSearchBarRef";
import useRecommendData from "../../hooks/search/useRecommendData";
import useSearchWithKeyboard from "../../hooks/search/useSearchWithKeyboard";

const SearchSuggestions = () => {
  const { isListVisible, onInpFocus, onInpBlur, closeList } = useToggle();
  const { inpRef, onKeywordClick } = useSearchBarRef(closeList);
  const { recommendData, updateDataRender } = useRecommendData();
  const searchWithKeyboard = useSearchWithKeyboard(inpRef);

  let SearchRes = <NoSearchResWrapper>검색어 없음</NoSearchResWrapper>;
  if (recommendData.length)
    SearchRes = (
      <RecommendedList
        onClick={onKeywordClick}
        data={recommendData}
        keyDownFunc={searchWithKeyboard}
      />
    );

  return (
    <>
      <SearchBar
        focusFuncs={{ onInpFocus, onInpBlur }}
        updateData={updateDataRender}
        onInpKeyDown={(event: React.KeyboardEvent) => {
          if (event.nativeEvent.isComposing) return;
          if (event.code === "ArrowDown") {
            recommendData[0]?.ref.current?.focus();
          }
        }}
        ref={inpRef}
      />
      {isListVisible && (
        <SearchResCont>
          <h3>추천 검색어</h3>
          {SearchRes}
        </SearchResCont>
      )}
    </>
  );
};

export default SearchSuggestions;