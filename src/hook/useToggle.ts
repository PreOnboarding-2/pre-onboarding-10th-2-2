import React, { Dispatch, SetStateAction, useCallback, useRef } from "react";
import { searchItem } from "../components/search/search.types";

type ToggleProps = {
  setSearchSuggestions: Dispatch<SetStateAction<searchItem[]>>;
  setIsVisible: Dispatch<SetStateAction<boolean>>
};

const useToggle = ({ setSearchSuggestions, setIsVisible }: ToggleProps) => {
  const searchRef = useRef<HTMLInputElement>(null);

  const closeHandler = useCallback(
    (e: React.MouseEvent) => {
      const element = e.target as HTMLElement;
      if (element.matches("input, .list-item") || element.closest(".list-item")) return;
      if (searchRef.current !== null) {
        searchRef.current.value = "";
      }
      setSearchSuggestions([]);
      setIsVisible(false);
    },
    [searchRef, setIsVisible, setSearchSuggestions]
  );

  // useEffect(() => {
  //   document.addEventListener("click", closeHandler);
  // }, [closeHandler]);
  return {
    closeHandler,
    searchRef
  }
};

export default useToggle