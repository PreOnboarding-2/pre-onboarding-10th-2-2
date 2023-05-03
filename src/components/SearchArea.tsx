import React, { useEffect, useState } from "react";
import Button from "./Button";
import { SearchContainer, SearchBarWrapper, Input, IconWrapper } from "./styles/searchArea.style";
import SearchList from "./SearchList";
import API from "../api/API";
import useDebounce from "../hooks/useDebounce";
import SearchIcon from "./SearchIcon";

export interface Item {
  name: string;
  id: number;
}

//TODO: 로컬 캐싱, 캐싱 유효시간 구현
//FIXME: 검색창 입력값 다 지웠을 떄 list 비우기, 첫 검색 아래 방향키 누를때 2번째 접근 고치기

const SearchArea = () => {
  const [value, setValue] = useState<string>("");
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [list, setList] = useState<Item[]>([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(-1);
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    const keyword = debouncedValue?.trim();
    if (!keyword) {
      return;
    }

    const fetchData = async () => {
      const response = await API.get(`/?name=${keyword}`);
      setList(response.data);
    };
    fetchData();
    console.info("calling api");
  }, [debouncedValue]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setSelectedItemIndex(-1);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  useEffect(() => {
    if (selectedItemIndex !== -1) {
      setValue(list[selectedItemIndex]?.name);
    }
  }, [selectedItemIndex, list]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!debouncedValue) {
      return;
    }

    if (selectedItemIndex === -1) {
      if (e.key === "ArrowUp") {
        setSelectedItemIndex(list.length - 1);
      } else if (e.key === "ArrowDown") {
        setSelectedItemIndex(0);
      }
    } else {
      if (e.key === "ArrowUp") {
        setSelectedItemIndex(prev => (prev === 0 ? list.length - 1 : prev - 1));
      } else if (e.key === "ArrowDown") {
        setSelectedItemIndex(prev => (prev === list.length - 1 ? 0 : prev + 1));
      }
    }
  };

  return (
    <SearchContainer>
      <SearchBarWrapper>
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
        <Input
          placeholder="질환명을 입력해주세요."
          onChange={handleChange}
          type="text"
          value={value}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onKeyDown={handleKeyDown}
        />
        <Button />
      </SearchBarWrapper>
      {isInputFocused && (
        <SearchList
          list={list}
          selectedItemIndex={selectedItemIndex}
          setSelectedItemIndex={setSelectedItemIndex}
        />
      )}
    </SearchContainer>
  );
};

export default SearchArea;
