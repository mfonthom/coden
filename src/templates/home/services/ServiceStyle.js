import styled from "styled-components";

export const Wrapper = styled.div`
  background: #f3f0eb;
  padding: 50px 0px;
  font-family: "satoshi" !important;
  h4 {
    font-family: "satoshi" !important;
  }
`;

export const ServiceWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  > div:nth-child(1) {
    border-bottom: 1px solid #ccc;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ServiceRow = styled.div`
  display: flex;
  padding: 70px 0px;
  box-sizing: border-box;
  h5 {
    font-family: "studio" !important;
    color: #272927;
  }
  p {
    font-family: "satoshi" !important;
    font-size: 16px;
  }
  > div {
    flex: 1;
    height: auto;
    border-left: 1px solid #ccc;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  > div:nth-child(1) {
    border: 0px;
  }
  .icon {
    margin: auto;
    display: flex;
    align-self: center;
    margin-bottom: 40px;
  }

  button {
    background: #26619c;
    color: #fff;
    align-self: center;
    margin-top: 20px;
    font-family: "satoshi" !important;
    text-transform: capitalize;
    font-size: 14px;
    &.inactive {
      background: rgba(87, 87, 87, 0.1);
      color: #575757;
    }
  }
`;

export const MobileService = styled.div`
  padding: 80px 0px;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
