import { searchItem } from "../search.types";
import { KeyboardEvent } from "react";

export interface IAutoCompleteProps {
  searchSuggestions: searchItem[];
  onClickSearchKeyword: (name: string) => void;
  onKeyUpSearchKeyword: (event: KeyboardEvent, name: string) => void;
  boldText: string;
  currentNumber: number;
}
