import React from "react";
import { SearchData } from "../../types/data";
import IconSearch from "../../assets/icon-search.svg";
import * as St from "./DropDown.styles";

const DropDown = ({ recommendData }: { recommendData: SearchData[] }) => {
  return (
    <St.DropDownContainer>
      {recommendData.length === 0 ? (
        <St.Span>검색결과가 없습니다</St.Span>
      ) : (
        <>
          <St.Span>추천 검색어</St.Span>
          {recommendData.map(data => (
            <St.ListContainer key={data.id}>
              <img src={IconSearch} alt="IconSearch" style={{ margin: "5px 0px 0px 40px" }} />
              <span
                style={{
                  listStyle: "none",
                  padding: "11px 10px",
                }}
              >
                {data.name}
              </span>
            </St.ListContainer>
          ))}
        </>
      )}
    </St.DropDownContainer>
  );
};

export default DropDown;
