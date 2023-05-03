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

const SearchArea = () => {
  const delaySec = 500;
  const expTime = 300000;
  const [value, setValue] = useState<string>("");
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);
  const [list, setList] = useState<Item[]>([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(-1);
  const debouncedValue = useDebounce(value, delaySec);

  useEffect(() => {
    const keyword = debouncedValue?.trim();
    if (!keyword) {
      return;
    }

    const cachedResult = localStorage.getItem(keyword);
    if (cachedResult) {
      const { timestamp, data } = JSON.parse(cachedResult);
      if (Date.now() - timestamp < expTime) {
        setList(data);
        return;
      }
      localStorage.removeItem(keyword);
    }

    const fetchData = async () => {
      const response = await API.get(`/?name=${keyword}`);
      const resultList = response.data.slice(0, 7);
      setList(resultList);
      localStorage.setItem(keyword, JSON.stringify(resultList));
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (list.length === 0) return;

    if (e.nativeEvent.isComposing) {
      return;
    }

    switch (e.key) {
      case "ArrowUp":
        setSelectedItemIndex(prev => (prev === 0 ? list.length - 1 : prev - 1));
        break;
      case "ArrowDown":
        setSelectedItemIndex(prev => (prev === list.length - 1 ? 0 : prev + 1));
        break;
      case "Enter":
        if (selectedItemIndex !== -1) {
          setValue(list[selectedItemIndex].name);
          setSelectedItemIndex(-1);
        }
        break;
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
