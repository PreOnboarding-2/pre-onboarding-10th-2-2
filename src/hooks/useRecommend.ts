import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { up, down, set } from "../store/selectedSlice";

const useRecommned = () => {
  const dispatch = useDispatch();

  const search = useSelector((state: RootState) => {
    return state.search;
  });
  const selected = useSelector((state: RootState) => {
    return state.selected;
  })

  const keydownHandler = (e: React.KeyboardEvent) => {
    if (search.recommend.length > 0) {
      switch (e.key) {
        case "ArrowDown":
          if (selected.selectedIndex >= search.recommend.length - 1)
            dispatch(set(0));
          else
            dispatch(up(1))
          break;
        case "ArrowUp":
          if (selected.selectedIndex <= 0)
            dispatch(set(search.recommend.length - 1));
          else
            dispatch(down(1));
          break;
      }
    }
  }

  return { search, keydownHandler };
};

export default useRecommned;
