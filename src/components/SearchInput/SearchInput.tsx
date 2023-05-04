import { ChangeEvent, useCallback, useEffect, useState } from "react";
import IconSearch from "../../assets/icon-search.svg";
import IconSearchWhite from "../../assets/icon-search-white.svg";
import DropDown from "../DropDown/DropDown";
import useKeyHandler from "../../hooks/useKeyHandler";
import useDebounce from "../../hooks/useDebounce";
import getSearchData from "../../api/searchApi";
import { SearchDataType } from "../../types/data";
import * as St from "./SearchInput.style";

const SearchInput = () => {
  const [keyWord, setKeyWord] = useState("");
  const [recommendData, setRecommendData] = useState<SearchDataType[]>([]);
  const debouncedValue = useDebounce(keyWord);
  const { focusIndex, onKeyDown } = useKeyHandler();

  const getRecommendData = useCallback(async () => {
    if (keyWord) {
      const URL = `/?name=${keyWord}`;
      const cacheStorage = await caches.open("search");
      const responsedCache = await cacheStorage.match(URL);
      try {
        if (responsedCache) {
          const res = await responsedCache.json();
          setRecommendData(res);
        } else {
          const res = await getSearchData(keyWord);
          cacheStorage.put(URL, new Response(JSON.stringify(res)));
          setRecommendData(res);
        }
      } catch (err) {
        alert(err);
      }
    }
  }, [keyWord]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyWord(e.target.value);
  };

  useEffect(() => {
    getRecommendData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue]);

  return (
    <St.InputContainer>
      <St.StyledInput
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="search"
        placeholder="질환명을 입력해 주세요"
      />
      <img
        src={IconSearch}
        alt="icon-search"
        style={{ position: "absolute", left: "0", margin: "25px" }}
      />
      <St.WhiteSearchIconBox>
        <img src={IconSearchWhite} alt="icon-search" style={{ width: "20px", height: "20px" }} />
      </St.WhiteSearchIconBox>
      {keyWord && <DropDown recommendData={recommendData} focusIndex={focusIndex} />}
    </St.InputContainer>
  );
};

export default SearchInput;
