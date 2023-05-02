import GlobalStyle from "./GlobalStyle";
import styled from "styled-components";
import Title from "./components/Title";
import SearchArea from "./components/SearchArea";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 0 160px;
  max-width: 1040px;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Title />
        <SearchArea />
      </Container>
    </>
  );
}

export default App;
