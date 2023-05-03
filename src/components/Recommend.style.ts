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
  border: 0.5rem solid #FFFFFF;
  border-radius: 20px;
  background-color: #FFFFFF;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Text = styled.p`
  font-size: 1rem;
  border-radius: 10px;
  margin: 0.3rem;
  padding: 0.3rem;
  height: 30px;
  display: flex;
  align-items: center;

  :hover {
    background-color: #F7F7FB;
  }
`;

export const RecommendText = styled.p`
  color: #BABABA;
  font-size: 0.8rem;
`;

export const RecommendDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
`;