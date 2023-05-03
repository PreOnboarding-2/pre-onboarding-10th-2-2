import React from "react";
import SearchInput from "./components/SearchInput/SearchInput";
import * as St from "./App.style";

function App() {
  return (
    <St.Container>
      <St.Header />
      <St.BackgroundContainer>
        <St.Introduction>
          국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
        </St.Introduction>
        <SearchInput />
      </St.BackgroundContainer>
    </St.Container>
  );
}

export default App;
