import React from "react";
import SearchIconUI from "./SearchIcon.style";
import { IconProps } from "../../../types/common/CommonProps";

const SearchIcon = ({ $isbtn, $input }: IconProps) => {
  return <SearchIconUI $isbtn={$isbtn} $input={$input} />;
};

export default SearchIcon;
