import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 20px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #575757;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
`;

export const FooterMenuWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 14px;
  > ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
  > ul > li {
    display: inline;
    padding-right: 20px;
  }
  > ul > li > a {
    color: #575757;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const FooterSocialIcon = styled.div`
  display: flex;
  gap: 10px;
`;

export const FooterBtn = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const FooterMenuListWrapper = styled.div`
  display: none;
  padding: 20px;
  a {
    color: #575757;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

export const FooterMenuList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0px;
  border-bottom: 1px solid #f5f5f5;
`;
