import styled from "styled-components";

export const InputField = styled.input`
  width: 100%;
  height: 58px;
  background: #ffffff;
  border: 4px solid #f3f0eb;
  border-radius: 6px;
  padding: 16px;
  box-sizing: border-box;
  color: #575757;
  &:focus {
    outline: 0px;
  }
  &::placeholder {
    font-family: "satoshi";
    font-style: normal;
    font-weight: 440;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.1px;
    color: #575757;
    opacity: 0.7;
  }
`;
