import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 490px;
  margin: 0 auto;
  flex-direction: column;
`;

export const SearchBarWrapper = styled.div`
  border-radius: 42px;
  border: 2px solid #ffffff;
  background-color: #ffffff;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  display: flex;
  width: 100%;
  position: relative;
  padding-right: 8px;
  :focus-within {
    border: 2px solid rgb(0, 123, 233);
  }
`;

export const Input = styled.input`
  flex-direction: row;
  flex: 1;
  align-items: center;
  font-size: 1.125rem;
  letter-spacing: -0.018em;
  line-height: 1.6;
  display: flex;
  padding: 20px 10px 20px 24px;
  font-weight: 400;
  background-color: transparent;
  border: none;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #a7afb7;
    font-size: 1.125rem;
  }
`;
