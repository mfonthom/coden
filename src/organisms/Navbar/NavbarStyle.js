import styled from "styled-components";

export const Nav = styled.div`
  border-bottom: 1px solid #f5f5f5;
  position: relative;
`;
export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavMenu = styled.ul`
  list-style: none;
  font-family: "studio" !important;
  margin: 0px;
  padding: 0px;
  font-weight: 400;
  font-size: 16px;
  color: #575757;
  width: 304px;
  position: absolute;
  left: 50%;
  margin-left: -152px;

  > li {
    /* float: left; */
    display: inline;
    padding: 0px 10px;
  }
  > li > a {
    text-decoration: none;
    color: #575757;
  }
  @media (max-width: 768px) {
    /* display: none; */
    position: absolute;
    width: 90%;
    top: 60px;
    background: #fff;
    box-shadow: -2px -2px 10px rgba(0, 0, 0, 0.15);
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    display: none;
    > li {
      display: block;
      padding: 10px 0px;
    }
    &.show {
      display: block;
    }
  }
`;

export const NavEdge = styled.div`
  display: flex;
  .div {
    justify-content: space-between;
  }
  @media (max-width: 768px) {
    .survey {
      display: none;
    }
  }
`;

export const NavIcons = styled.div`
  display: flex;
  position: relative;
`;
export const PowerIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #58ab4d;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-top: 12px;
  svg {
    color: #fff;
  }
`;

export const MenuIcon = styled.div`
  border-left: 1px solid #f5f5f5;
  display: none;
  svg {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;
export const NavLeftMenu = styled.div`
  position: relative;
  display: flex;
  > div {
    padding: 0px 30px;
  }
  > div:nth-child(2) {
    border-left: 1px solid #f5f5f5;
  }
  @media (max-width: 768px) {
    > div {
      padding: 0px 20px;
    }
  }
`;

export const DropdownMenu = styled.div`
  position: absolute;
  width: 298px;
  background: #fff;
  top: 80px;
  right: 100%;
  box-shadow: -2px -2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 14px !important;
  display: none;
  h6 {
    font-size: 14px;
  }
  > ul {
    list-style: none;
    font-size: 16px;
    margin: 0px;
    padding: 0px;
    > li {
      margin: 10px 0px;
    }
    > li > a {
      text-decoration: none;
      color: #000;
    }
    > li > a > div {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
  .close {
    display: flex;
    justify-content: right;
    cursor: pointer;
    margin: -5px;
  }
  &.show {
    display: block;
  }
  @media (max-width: 400px) {
    right: 10%;
  }
`;
