import styled from "styled-components";
import { focusType } from "../../types/focusType";

export const DropDownContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 50%;
  width: 100%;
  min-height: 100px;
  max-height: 320px;
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
`;

export const Span = styled.span`
  padding: 10px 0px 0px 20px;
  font-size: 14px;
`;

export const ListContainer = styled.div<focusType>`
  display: flex;
  width: 100%;
  background-color: ${props => (props.focusIndex === props.index ? "#bfeff9" : "white")};
  &:hover {
    background-color: #bfeff9;
  }
`;
