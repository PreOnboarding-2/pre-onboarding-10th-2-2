import React from 'react'
import SearchIconUI from './SearchIcon.style';
import { IconProps } from '../../../types/common/CommonProps';

const SearchIcon = ({ $isbtn }: IconProps) => {
  return <SearchIconUI $isbtn={$isbtn} />;
};

export default SearchIcon;
