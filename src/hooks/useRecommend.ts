import { useSelector } from "react-redux";
import { RootState } from "../store";

const useRecommned = () => {
  const search = useSelector((state: RootState) => {
    return state.search;
  });

  return { search };
};

export default useRecommned;
