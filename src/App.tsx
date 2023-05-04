import React from "react";
import Container from "./components/common/container/Container";
import Title from "./components/common/title/Title";
import SearchBarComponent from "./components/search-bar/search-bar-component/SearchBarComponent";
import Wrapper from "./components/common/wrapper/Wrapper";

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </Title>
        <SearchBarComponent />
      </Wrapper>
    </Container>
  );
};

export default App;
