import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 5rem;
`;

export const RecommendWrapper = styled.div`
  width: 50%;
  text-align: left;
  border: 0.5rem solid #ffffff;
  border-radius: 20px;
  background-color: #ffffff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const TextWrapper = styled.div`
  border-radius: 10px;
  margin: 0.3rem;
  padding: 0.3rem;
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #f7f7fb;
  }
  background-color: ${(props) => props.color || "none"}
`;

export const Text = styled.p`
  font-size: 1rem;
  margin-left: 1rem;
`;

export const BoldText = styled(Text)`
  font-weight: bold;
`;

export const RecommendText = styled.p`
  color: #bababa;
  font-size: 0.8rem;
  margin-left: 0.7rem;
`;

