import styled from "styled-components";
import SearchIcon from "./SearchIcon";

const SearchButton = styled.button`
  border-radius: 100%;
  width: 48px;
  height: 48px;
  border: 0;
  background-color: #007be9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchIconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  color: white;
`;

const Button = () => {
  return (
    <SearchButton>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchButton>
  );
};

export default Button;
