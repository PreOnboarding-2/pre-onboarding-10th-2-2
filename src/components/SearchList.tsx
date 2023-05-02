import { ListContainer, ListTitle, ListItem } from "./styles/searchList.style";
import { Item } from "./SearchArea";

interface SearchListProps {
  list: Item[];
  selectedItemIndex: number;
}

const SearchList = ({ list, selectedItemIndex }: SearchListProps) => {
  return (
    <ListContainer id="list">
      <ListTitle>추천 검색어</ListTitle>
      {list.length ? (
        list.map((result, index) => {
          return (
            <ListItem
              key={result.id}
              tabIndex={0}
              style={{
                background: selectedItemIndex === index ? "#ececec" : "white",
              }}
            >
              {result.name}
            </ListItem>
          );
        })
      ) : (
        <ListItem>검색어가 없음</ListItem>
      )}
    </ListContainer>
  );
};

export default SearchList;
