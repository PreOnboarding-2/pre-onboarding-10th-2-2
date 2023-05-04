import { useState } from "react";

export const useDebounce = () => {
  const [debounce, setDebounce] = useState(0);

  return (fnc: any) => {
    if (debounce) window.clearTimeout(debounce);
  
    setDebounce(window.setTimeout(fnc, 300));
  }
};