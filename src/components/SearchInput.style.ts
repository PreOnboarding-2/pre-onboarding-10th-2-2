import styled from "styled-components";

export const Section = styled.section`
  margin-top: 7rem;
  display: flex;
  justify-content: center;
  align-items: center
`;

export const Form = styled.form`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  border-radius: 42px;
  border: 2px solid;
  border-color: #FFFFFF;
  background-color: #FFFFFF;
  padding: 0.3rem;
`;

export const Input = styled.input`
  display: flex;
  width: 80%;
  border: 2px solid;
  border-color: #FFFFFF;
  background-color: #FFFFFF;
  align-items: center;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -0.018em;
  line-height: 1.6;
  padding: 0 8px;
  outline: none;
`;

export const Button = styled.button`
  border-radius: 100%;
  width: 48px;
  height: 48px;
  border: 0;
  cursor: pointer;
  background-color: #007BE9;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
`;