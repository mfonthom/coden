import styled from "styled-components";

export const Wrapper = styled.span`
  button {
    background: ${(props) =>
      props.inverted ? "rgba(87, 87, 87, 0.1)" : "#26619c"};
    color: ${(props) => (props.inverted ? "#575757" : "#fff")};
    align-self: center;
    font-family: "satoshi" !important;
    text-transform: capitalize;
    font-size: 14px;
    &:hover {
      background: ${(props) =>
        props.inverted ? "#26619c" : "rgba(87, 87, 87, 0.1)"};
      color: ${(props) => (props.inverted ? "#fff" : "#575757")};
    }
  }
`;
