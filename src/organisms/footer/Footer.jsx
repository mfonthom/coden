import {
  Wrapper,
  FooterMenuWrapper,
  FooterSocialIcon,
  FooterBtn,
  FooterMenuListWrapper,
  FooterMenuList,
} from "./FooterStyle";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import Icon from "../../assets/icon";
import { Button } from "@mui/material";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
// import KeyboardArrowD from "@mui/icons-material/KeyboardArrowRightOutlined";
import CustomButton from "../../atoms/button/CustomButton";
const Footer = () => {
  return (
    <Container>
      <FooterMenuListWrapper>
        <FooterMenuList>
          <Link to="#">Sign In</Link>
          <Icon.Dropdown />
        </FooterMenuList>

        <FooterMenuList>
          <Link to="#">For Hire</Link>
          <Icon.Dropdown />
        </FooterMenuList>

        <FooterMenuList>
          <Link to="#">Employers</Link>
          <Icon.Dropdown />
        </FooterMenuList>

        <FooterMenuList style={{ border: 0 }}>
          <Link to="#">About</Link>
          <Icon.Dropdown />
        </FooterMenuList>
      </FooterMenuListWrapper>
      <Wrapper>
        <FooterMenuWrapper>
          <ul>
            <li>
              <Link to="#">Browse Jobs</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="#">About</Link>
            </li>
          </ul>
          <FooterSocialIcon>
            <Icon.Twitter />
            <Icon.Discord />
            <Icon.Telegram />
          </FooterSocialIcon>
        </FooterMenuWrapper>
        <div>&copy; 2022 Code & Jobs. All Rights Reserved</div>
        <FooterBtn>
          <Button
            variant="text"
            className="inactive"
            style={{ color: "#575757", fontWeight: 400 }}
          >
            Hiring ?
          </Button>

          <CustomButton
            variant="contained"
            endIcon={<KeyboardArrowRightOutlinedIcon />}
          >
            Post a Job
          </CustomButton>
        </FooterBtn>
      </Wrapper>
    </Container>
  );
};

export default Footer;
