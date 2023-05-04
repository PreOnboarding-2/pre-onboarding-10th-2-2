import styled, { css } from "styled-components";
import { Search } from "@styled-icons/bootstrap/Search";
import { IconProps } from "../../../types/common/CommonProps";

const SearchIconUI = styled(Search)<IconProps>`
  width: 21px;
  color: ${({ $isbtn }) => ($isbtn ? "white" : "#A6AFB7")};
  ${({ $isbtn }) =>
    !$isbtn &&
    css`
      margin-right: 10px;
    `};
  ${({ $input }) => $input && css`
    position: absolute;
    left: 5px;
  `}
`;

export default SearchIconUI;
