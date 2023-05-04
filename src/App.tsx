import React from "react";
import SearchInput from "./components/SearchInput";
import "./App.css";
import Recommend from "./components/Recommend";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Title />
      <SearchInput />
      <Recommend />
    </div>
  );
}

export default App;
