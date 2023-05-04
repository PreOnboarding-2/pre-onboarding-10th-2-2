import { useState } from 'react'

const useSearch = () => {
  const [isFocus, setIsFocus] = useState(false);
  
  const closeRecommendHandler = ({ target }: MouseEvent) => {
    if (!((target as HTMLElement).matches('input[type="search"]'))) setIsFocus(false);
  };

  const focusHandler = () => setIsFocus(prev => !prev);

  return {
    closeRecommendHandler,
    isFocus,
    focusHandler
  };
};

export default useSearch;
