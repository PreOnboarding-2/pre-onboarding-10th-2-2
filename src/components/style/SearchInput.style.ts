import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

export const Form = styled.form`
  display: flex;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  border-radius: 42px;
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
  padding: 0.3rem;
`;

export const Input = styled.input`
  display: flex;
  width: 80%;
  border: 2px solid;
  border-color: #ffffff;
  background-color: #ffffff;
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
  background-color: #007be9;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
