import styled from "styled-components";
import { FocusProps } from "../../../types/common/CommonProps";

const SearchBarRoundWrapperUI = styled.div<FocusProps>`
  border-radius: 42px;
  border: 2px solid;
  border-color: ${({ isFocus }) => isFocus ? '#007BE9' : '#FFFFFF'};
  background-color: #FFFFFF;
  display: flex;
  align-items: center;
  padding: 2px 10px;
  position: relative;
`;

export default SearchBarRoundWrapperUI;