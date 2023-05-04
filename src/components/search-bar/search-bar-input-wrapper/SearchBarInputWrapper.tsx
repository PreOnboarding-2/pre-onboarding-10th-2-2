import React from "react";
import SearchBarInputWrapperUI from "./SearchBarInputWrapper.style";
import { CommonProps } from "../../../types/common/CommonProps";

const SearchBarInputWrapper = ({ children, ...props }: CommonProps) => {
  return <SearchBarInputWrapperUI {...props}>{children}</SearchBarInputWrapperUI>;
};

export default SearchBarInputWrapper;
