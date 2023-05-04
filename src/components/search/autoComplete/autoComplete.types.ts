import { searchItem } from "../search.types";
import { KeyboardEvent, RefObject } from "react";

export interface IAutoCompleteProps {
  searchSuggestions: searchItem[];
  onClickSearchKeyword: (name: string) => void;
  onKeyUpSearchKeyword: (event: KeyboardEvent, name: string) => void;
  suggestionWrapperRef?: RefObject<HTMLDivElement>;
  searchRef: RefObject<HTMLInputElement>;
  boldText: string;
}
