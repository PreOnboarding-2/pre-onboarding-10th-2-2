import styled from "styled-components";

const SearchButton = styled.button`
  border-radius: 100%;
  width: 48px;
  height: 48px;
  font-weight: 500;
  border: 0;
  background-color: #007be9;
  display: flex;
  color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const Button = () => {
  return <SearchButton>검색</SearchButton>;
};

export default Button;
