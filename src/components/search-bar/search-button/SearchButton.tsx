import React from "react";
import SearchButtonUI from "./SearchButton.style";
import { CommonProps } from "../../../types/common/CommonProps";

const SearchButton = ({ children, ...props }: CommonProps) => (
  <SearchButtonUI {...props}>{children}</SearchButtonUI>
);

export default SearchButton;
