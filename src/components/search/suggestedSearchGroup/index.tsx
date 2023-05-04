import { SUGGESTION_LIST } from "../../../constant";
import * as S from "./suggestedSearchGroup.styles";

export default function SuggestedSearchGroup() {
  return (
    <>
      <S.SuggestionTitle>추천 검색어로 검색해보세요</S.SuggestionTitle>
      <S.SuggestionButtonWrapper>
        {SUGGESTION_LIST.map((item, idx) => (
          <S.SuggestionButton key={idx}>{item}</S.SuggestionButton>
        ))}
      </S.SuggestionButtonWrapper>
    </>
  );
}
