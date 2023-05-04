import { KeyboardEvent, useState } from "react";

const useKeyHandler = () => {
  const [focusIndex, setFocusIndex] = useState(0);

  const handleArrowDown = () => {
    setFocusIndex(prevIndex => prevIndex + 1);
  };

  const handleArrowUp = () => {
    setFocusIndex(prevIndex => prevIndex - 1);
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
    focusIndex,
    handleArrowDown,
    handleArrowUp,
    handleEnter,
    onKeyDown,
  };
};

export default useKeyHandler;
