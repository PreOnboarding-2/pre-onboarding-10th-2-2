import { useState } from "react";
import { DELAY_TIME } from "../constant";

export const useDebounce = () => {
  const [debounce, setDebounce] = useState(0);

  return (fnc: any) => {
    if (debounce) window.clearTimeout(debounce);

    setDebounce(window.setTimeout(fnc, DELAY_TIME));
  };
};
