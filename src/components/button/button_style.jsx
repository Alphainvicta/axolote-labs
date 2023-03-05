import styled from "styled-components";

export const Button_base = styled.button`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

export const Button_purple = styled(Button_base)`
  background: #7032d8;
  border: solid #7032d8;
  border-radius: 20px;
  color: white;
`;
export const Button_purple_inverted = styled(Button_base)`
  background: clear;
  border: solid #7032d8;
  border-radius: 20px;
  color: #7032d8;
`;

export const Button_pink = styled(Button_base)`
  background: #f2146f;
  border: solid #f2146f;
  border-radius: 20px;
  color: white;
`;
export const Button_clear = styled(Button_base)`
  background: none;
  border: none;
  color: #f2154f;
`;
