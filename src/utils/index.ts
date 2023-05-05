import { EXPIRE_TIME } from "../constant";
import { IMoveProps } from "./utils.types";

export const isCacheExpired = (cacheResponse: Response) => {
  const fetchDate = new Date(cacheResponse.headers.get("fetch-date")!).getTime();
  const today = new Date().getTime();

  return today - fetchDate > EXPIRE_TIME;
};

export const moveUp = (props: IMoveProps) => {
  if (props.searchRef.current === null) return;

  props.currentNumber--;

  if (props.currentNumber < 0) {
    props.currentNumber = props.searchSuggestions.length - 1;
  }

  props.searchRef.current.value = props.searchSuggestions[props.currentNumber].name;
  props.setSearchKeyword(props.searchSuggestions[props.currentNumber].name);
  props.numberRef.current = props.currentNumber;
};

export const moveDown = (props: IMoveProps) => {
  if (props.searchRef.current === null) return;

  props.currentNumber++;

  if (props.currentNumber > props.searchSuggestions.length - 1) {
    props.currentNumber = 0;
  }

  props.searchRef.current.value = props.searchSuggestions[props.currentNumber].name;
  props.setSearchKeyword(props.searchSuggestions[props.currentNumber].name);
  props.numberRef.current = props.currentNumber;
};
