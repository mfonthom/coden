import styled from "styled-components";

export const HeroWrapper = styled.div`
  display: flex;
  gap: 40px;
  > div:nth-child(1) {
    width: 60%;
    padding-top: 100px;
    h1 {
      font-size: 60px;
      font-weight: 500;
      margin-top: 0px;
      color: #272927;
      @media (max-width: 465px) {
        font-size: 40px;
      }
    }
    p {
      color: #26619c;
    }
  }
  > div:nth-child(2) {
    width: 40%;
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    > div:nth-child(1),
    div:nth-child(2) {
      width: 100%;
    }
  }
`;
export const SearchFields = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  input {
    font-size: 16px;
    font-weight: 400 !important;
    color: #575757;
  }
  > div {
    flex: 1;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CryptoLogos = styled.div`
  margin: 100px 10px 0 10px;
  display: flex;
  gap: 20px;
`;
