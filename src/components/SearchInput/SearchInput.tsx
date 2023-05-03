import IconSearch from "../../assets/icon-search.svg";
import IconSearchWhite from "../../assets/icon-search-white.svg";
import DropDown from "../DropDown/DropDown";
import useKeyHandler from "../../hooks/useKeyHandler";
import * as St from "./SearchInput.style";
import useDebounce from "../../hooks/useDebounce";

const SearchInput = () => {
  const { onKeyDown } = useKeyHandler();
  const { keyWord, onChange, recommendData } = useDebounce();

  return (
    <St.InputContainer>
      <St.StyledInput
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="search"
        placeholder="질환명을 입력해 주세요"
      />
      <img
        src={IconSearch}
        alt="icon-search"
        style={{ position: "absolute", left: "0", margin: "25px" }}
      />
      <St.WhiteSearchIconBox>
        <img src={IconSearchWhite} alt="icon-search" style={{ width: "20px", height: "20px" }} />
      </St.WhiteSearchIconBox>
      {keyWord && <DropDown recommendData={recommendData} />}
    </St.InputContainer>
  );
};

export default SearchInput;
