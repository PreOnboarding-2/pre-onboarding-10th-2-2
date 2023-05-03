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

  return {
    handleArrowDown,
    handleArrowUp,
    handleEnter,
  };
};

export default useKeyHandler;
