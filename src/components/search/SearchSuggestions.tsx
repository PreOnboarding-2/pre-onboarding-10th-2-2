import React from "react";
import SearchBar from "./SearchBar";
import SearchResCont from "./searchResCont.style";
import RecommendedList from "./RecommendList/RecommendList";
import useToggle from "../../hooks/search/useToggle";
import useSearchBarRef from "../../hooks/search/useSearchBarRef";
import useRecommendData from "../../hooks/search/useRecommendData";
import useSearchWithKeyboard from "../../hooks/search/useSearchWithKeyboard";

const SearchSuggestions = () => {
  const { isListVisible, onInpFocus, onInpBlur, closeList } = useToggle();
  const { inpRef, onKeywordClick } = useSearchBarRef(closeList);
  const { recommendData, updateDataRender } = useRecommendData();
  const searchWithKeyboard = useSearchWithKeyboard(inpRef);

  // Fix: SearchBar에 전달하는 인수가 너무 많음. 추후 고쳐야 할듯.
  return (
    <>
      <SearchBar
        isInpFocused={isListVisible}
        onInpFocus={onInpFocus}
        onInpBlur={onInpBlur}
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
          <RecommendedList
            onClick={onKeywordClick}
            data={recommendData}
            keyDownFunc={searchWithKeyboard}
          />
        </SearchResCont>
      )}
    </>
  );
};

export default SearchSuggestions;