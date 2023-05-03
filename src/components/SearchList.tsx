import {
  ListContainer,
  ListTitle,
  ListItem,
  ListIconWrapper,
  ListFlex,
} from "./styles/searchList.style";
import { Item } from "./SearchArea";
import SearchIcon from "./SearchIcon";
import React from "react";

interface SearchListProps {
  list: Item[];
  selectedItemIndex: number;
  setSelectedItemIndex: React.Dispatch<React.SetStateAction<number>>;
}

const SearchList = ({ list, selectedItemIndex, setSelectedItemIndex }: SearchListProps) => {
  return (
    <ListContainer id="list">
      <ListTitle>추천 검색어</ListTitle>
      {list.length ? (
        list.map((result, index) => {
          return (
            <ListFlex
              key={result.id}
              style={{
                background: selectedItemIndex === index ? "#ececec" : "white",
              }}
            >
              <ListIconWrapper>
                <SearchIcon />
              </ListIconWrapper>
              <ListItem tabIndex={0} onMouseEnter={() => setSelectedItemIndex(index)}>
                {result.name}
              </ListItem>
            </ListFlex>
          );
        })
      ) : (
        <ListItem
          style={{
            marginLeft: "10px",
          }}
        >
          검색어 없음
        </ListItem>
      )}
    </ListContainer>
  );
};

export default SearchList;
