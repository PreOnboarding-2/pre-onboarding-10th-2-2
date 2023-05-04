import React from "react";
import SearchBarRoundWrapperUI from "./SearchBarRoundWrapper.style";
import { FocusProps } from "../../../types/common/CommonProps";

const SearchBarRoundWrapper = ({ children, ...props }: FocusProps) => {
  return <SearchBarRoundWrapperUI {...props}>{children}</SearchBarRoundWrapperUI>;
};

export default SearchBarRoundWrapper;
