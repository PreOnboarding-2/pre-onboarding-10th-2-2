import styled from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";
import SearchHead from "./components/SearchHead";
import SearchBody from "./components/SearchBody";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <SearchContainer>
        <SearchHead />
        <SearchBody />
      </SearchContainer>
    </>
  );
};

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 20rem;
  margin-top: 10rem;
  background-color: #cae9ff;
`;

export default App;
