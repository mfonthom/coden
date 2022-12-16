import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 48px;
  > div {
    flex: 1;
  }
  > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-items: center;
    border-left: 1px solid #ebf4f6;
  }
  .heading {
    font-size: 36px;
    font-family: "studio";
    font-weight: 500;
    margin-top: 62px;
    color: #272927;
    margin-bottom: 49px;
  }
  .heading-two {
    font-size: 36px;
    font-family: "studio";
    font-weight: 500;
    margin-top: 62px;
    color: #272927;
    margin-bottom: -20px;
  }
  .sub {
    font-size: 20px;
    margin-bottom: 56px;
    span {
      color: #26619c;
      cursor: pointer;
    }
  }
  .formbtn {
    width: 100%;
    margin-top: 25px;
    height: 48px;
    font-size: 16px;
    background: #26619c !important;
    color: #fff !important;
    font-weight: 500;
  }
  .formTextBtn {
    font-family: "satoshi";
    font-weight: 500;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.1px;
    text-decoration-line: underline;
    color: #26619c;
    background: none;
    border: 0px;
    margin-top: 19px;
    cursor: pointer;
  }
  .fpText {
    font-family: "studio";
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    text-align: center;
    letter-spacing: 0.1px;
    color: #575757;
    background: none;
    border: 0px;
    margin-top: 10px;
    cursor: pointer;
    opacity: 0.8;
  }

  .MuiFormControlLabel-label {
    font-family: "satoshi";
    font-style: normal;
    font-weight: 440;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.1px;
    color: #575757;
    opacity: 0.8;
  }

  .MuiFormControlLabel-root {
    align-items: flex-start;
  }
  .MuiCheckbox-root {
    margin-top: -9px;
  }
  .terms {
    font-family: "satoshi";
    font-style: normal;
    font-weight: 440;
    font-size: 16px;
    line-height: 100%;

    letter-spacing: 0.1px;

    color: #575757;

    opacity: 0.8;
    a {
      text-decoration: underline;
      color: #26619c;
    }
  }

  .captcha {
    font-family: "satoshi";
    font-weight: 440;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0.1px;
    color: #575757;
    opacity: 0.8;
    a {
      text-decoration: underline;
      color: #575757;
      opacity: 0.8;
    }
  }

  .rights {
    margin-top: 129px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    > div:nth-child(2) {
      border-top: 1px solid #ebf4f6;
      border-left: 0px;
      padding-top: 20px;
    }

    .rights {
      display: none;
    }
  }
`;

export const AltWrapper = styled.div`
  border-top: 1px solid rgba(87, 87, 87, 0.1);
  margin-top: 33px;
  padding: 16px;
  p {
    text-align: center;
    color: #575757;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 8px;

  > div {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    width: 48px;
    height: 48px;
    background: #ffffff;
    border: 1px solid rgba(87, 87, 87, 0.2);
    border-radius: 8px;
  }
`;

export const FieldWrapper = styled.div`
  label {
    font-family: "satoshi";
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.1px;
    color: #272927;
  }
`;
