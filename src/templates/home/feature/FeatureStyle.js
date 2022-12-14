import styled from "styled-components";

export const FeatureWrapper = styled.div`
  margin-top: 40px;
  background: #ebf4f6;
  width: 100%;
`;
export const Header = styled.div`
  padding: 50px 0;
  > h1 {
    font-family: "studio";
    font-weight: 500;
    font-size: 40px;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.35em;
  }
`;
export const FeatureContent = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const Featured = styled.div`
  padding: 150px 70px 150px 70px;
  font-size: 16px;
  background: #fff;
  display: flex;
  gap: 30px;
  width: 50%;
  box-sizing: border-box;
  @media (max-width: 768px) {
    width: 100%;
    padding: 50px;
  }
`;

export const FeaturedImg = styled.div`
  box-sizing: border-box;
  background-color: #26619c;
  background-image: url(${(props) => `${props.bg}`});
  background-size: cover;
  background-position: center;
  height: 500px;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CommunityCTA = styled.div`
  background: #26619c;
  color: #fff;
  text-align: center;
  margin-top: 0px;
  padding: 70px 0px;
  > h5 {
    margin-bottom: 20px;
  }
  > button {
    margin: 10px;
  }
`;
