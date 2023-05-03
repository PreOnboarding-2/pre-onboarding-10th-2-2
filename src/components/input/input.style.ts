import styled from "styled-components";

export const StyledInput = styled.input`
  width: 500px;
  border-radius: 35px;
  padding: 25px 60px;
  font-size: 20px;
  margin-bottom: 100px;
  border: none;
  ::placeholder {
    color: #adb4bc;
  }
  &:focus {
    outline: 2px solid rgb(0, 123, 233);
  }
  &::-webkit-search-cancel-button {
    margin-right: 20px;
  }
  &::-webkit-search-cancel-button:hover {
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
`;

export const GreySearchIcon = styled.img`
  position: absolute;
  left: 0;
  margin: 25px;
`;

export const WhiteSearchIconBox = styled.div`
  position: absolute;
  right: 10px;
  top: 7%;
  background-color: #007be9;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
