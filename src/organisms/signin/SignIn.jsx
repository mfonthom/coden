import Icon from "../../assets/icon";
import {
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import {
  Wrapper,
  AltWrapper,
  SocialWrapper,
  FieldWrapper,
} from "./SignInstyle";
import image from "./../../assets/images/signin.png";
import signupImg from "./../../assets/images/signup.svg";
import Input from "../../atoms/input/Input";
import CustomButton from "../../atoms/button/CustomButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import { width } from "@mui/system";

const SignIn = () => {
  const [display, setDisplay] = useState("login");

  const Login = () => {
    return (
      <Wrapper>
        <div>
          <Icon.Logo />
          <Typography className="heading"> Sign in</Typography>
          <form action="#">
            <Input
              type="text"
              name="email"
              placeholder="Username"
              style={{ marginBottom: 15 }}
            />
            <Input type="password" name="password" placeholder="Password" />
            <CustomButton className="formbtn">Sign In</CustomButton>
          </form>
          <center>
            <div>
              <button
                variant="text"
                className="formTextBtn"
                onClick={() => setDisplay("signup")}
              >
                Create an account
              </button>
            </div>

            <button variant="text" className="fpText">
              Forgot Password?
            </button>
          </center>

          <AltWrapper>
            <p>Sign in using</p>
            <SocialWrapper>
              <div>
                <Icon.Google />
              </div>
              <div>
                <Icon.Github />
              </div>
              <div>
                <Icon.LinkedIn />
              </div>
              <div>
                <Icon.Discord />
              </div>
            </SocialWrapper>
          </AltWrapper>
        </div>
        <div>
          <img src={image} alt="sign in illustration" width="100%" />
        </div>
      </Wrapper>
    );
  };

  const SignUp = () => {
    return (
      <Wrapper>
        <div>
          <Icon.Logo />
          <Typography className="heading-two">
            Sign up for Code & Jobs
          </Typography>
          <p className="sub">
            Create a free account or{" "}
            <span onClick={() => setDisplay("login")}>Sign in</span>
          </p>
          <form action="#">
            <FieldWrapper>
              <label> Email Address</label>
              <Input
                type="email"
                name="email"
                placeholder="Enter Email Address"
                style={{ marginBottom: 15, marginTop: 16 }}
              />
            </FieldWrapper>

            <FieldWrapper>
              <label> Username</label>
              <Input
                type="text"
                name="username"
                placeholder="Enter username"
                style={{ marginBottom: 15, marginTop: 16 }}
              />
            </FieldWrapper>

            <FieldWrapper>
              <label> Password</label>
              <Input
                type="password"
                name="password"
                style={{ marginBottom: 15, marginTop: 16 }}
              />
            </FieldWrapper>

            <FormControlLabel
              control={<Checkbox />}
              label="I don't want to recieve emails about Code&Jobs and feature updates, marketing best practices, and promotions from Code & Jobs."
            />

            <p className="terms">
              By creating an account, you agree to our <Link to="#">Terms</Link>{" "}
              and have read and acknowledge the{" "}
              <Link to="">Global Privacy Statement</Link>
            </p>

            <CustomButton
              className="formbtn"
              endIcon={<Icon.AngleRightWhite />}
              style={{ width: "136px", gap: "12px" }}
            >
              Sign In
            </CustomButton>
          </form>

          <p className="captcha">
            Invisible reCAPTCHA by <Link to="#">Google Privacy Policy</Link> and{" "}
            <Link to="#">Terms of Use.</Link>
          </p>
          <p className="captcha rights">
            &copy; 2022 All Rights Reserved. Code & Jobs.{" "}
            <Link to="#">Cookie Preferences, Privacy</Link> and{" "}
            <Link to="#">Terms.</Link>
          </p>
        </div>

        <div style={{ padding: 20 }}>
          <img src={signupImg} alt="sign in illustration" width="100%" />
        </div>
      </Wrapper>
    );
  };

  return display === "login" ? <Login /> : <SignUp />;
};

export default SignIn;
