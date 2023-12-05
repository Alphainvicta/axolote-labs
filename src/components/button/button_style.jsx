import styled from "styled-components";

export const Button_base = styled.button`
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 2.4rem;
  text-align: center;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: 0.4s;

  &:hover {
    cursor: pointer;
  }
`;

export const Button_purple = styled(Button_base)`
  background: #7032d8;
  border: solid #7032d8;
  border-radius: 2rem;
  color: white;

  &:hover {
    transition: 0.4s;
    background: white;
    color: #7032d8;

    svg {
      fill: #7032d8;
    }
  }
`;
export const Button_purple_inverted = styled(Button_base)`
  background: clear;
  border: solid #7032d8;
  border-radius: 2rem;
  color: #7032d8;

  &:hover {
    transition: 0.4s;
    background: #7032d8;
    color: white;
  }
`;

export const Button_pink = styled(Button_base)`
  background: #f2146f;
  border: solid #f2146f;
  border-radius: 2rem;
  color: white;

  &:hover {
    transition: 0.4s;
    background: white;
    color: #f2146f;

    svg {
      fill: #f2146f;
    }
  }
`;
export const Button_clear = styled(Button_base)`
  background: none;
  border: none;
  border-radius: 2rem;
  color: #f2154f;
`;
