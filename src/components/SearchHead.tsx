import styled from "styled-components";

const SearchHead = () => {
  return (
    <Heading>
      국내 모든 임상시험 검색하고 <br /> 온라인으로 참여하기
    </Heading>
  );
};

const Heading = styled.div`
  margin: 40px 0px;
  text-align: center;
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 1.6;
  letter-spacing: -0.018em;
`;

export default SearchHead;
