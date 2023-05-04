import styled from "styled-components";
import { FocusProps } from "../../../types/common/CommonProps";

export const RecommendWrapper = styled.div<FocusProps>`
  width: 500px;
  background-color: white;
  border-radius: 30px;
  box-shadow: 3px 3px 5px 1px grey;
  position: absolute;
  top: 80px;
  left: 0;
  display: ${({ isFocus }) => isFocus ? 'block' : 'none'};
`;