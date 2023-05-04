import { useState } from "react";
import * as S from "./App.styles";
import Search from "./components/search";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <S.Container onClick={() => setIsVisible(false)}>
      <Search isVisible={isVisible} setIsVisible={setIsVisible} />
    </S.Container>
  );
}

export default App;
