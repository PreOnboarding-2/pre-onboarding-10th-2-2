import React from "react";
import Input from "./components/input/Input";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header />
      <BackgroundContainer>
        <Introduction>
          국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
        </Introduction>
        <Input />
      </BackgroundContainer>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundContainer = styled.div`
  width: 100%;
  height: 462px;
  background-color: #cae9ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Introduction = styled.h2`
  font-size: 2.125rem;
  font-weight: 800;
  letter-spacing: -0.018em;
  line-height: 1.6;
  text-align: center;
  margin-bottom: 40px;
`;
