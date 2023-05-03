import { KeyboardEvent } from "react";

const useKeyHandler = () => {
  const handleArrowDown = () => {
    console.log("handleArrowDown");
  };

  const handleArrowUp = () => {
    console.log("handleArrowUp");
  };

  const handleEnter = () => {
    console.log("handleArrowEnter");
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    switch (e.key) {
      case "ArrowDown":
        handleArrowDown();
        break;
      case "ArrowUp":
        handleArrowUp();
        break;
      case "Enter":
        handleEnter();
        break;
      default:
        break;
    }
  };

  return {
    handleArrowDown,
    handleArrowUp,
    handleEnter,
    onKeyDown,
  };
};

export default useKeyHandler;
