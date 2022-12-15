import React from "react";
import {
  Wrapper,
  ServiceWrapper,
  ServiceRow,
  MobileService,
  SlideArrow,
} from "./ServiceStyle";
import { Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import Icon from "./../../../assets/icon";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import CustomButton from "../../../atoms/button/CustomButton";

// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <SlideArrow className="right" onClick={() => onClick()}>
      <Icon.ArrowRight />
    </SlideArrow>
  );
};

const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <SlideArrow className="left" onClick={() => onClick()}>
      <Icon.ArrowLeft />
    </SlideArrow>
  );
};

function Services() {
  return (
    <Wrapper>
      <Container>
        <Typography variant="h4" align="center">
          What We Do
        </Typography>
        <ServiceWrapper>
          <ServiceRow>
            <div>
              <Icon.Jobs className="icon" />
              <Typography variant="h5" align="center">
                Jobs
              </Typography>
              <Typography variant="body1" align="center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>

              <Button
                variant="contained"
                endIcon={<KeyboardArrowRightOutlinedIcon />}
                disableElevation={true}
              >
                Learn More
              </Button>
            </div>

            <div>
              <Icon.Hire className="icon" />
              <Typography variant="h5" align="center">
                For Hire
              </Typography>
              <Typography variant="body1" align="center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>

              <Button
                variant="contained"
                endIcon={<KeyboardArrowRightOutlinedIcon />}
                className="inactive"
                disableElevation={true}
              >
                Learn More
              </Button>
            </div>

            <div>
              <Icon.Market className="icon" />
              <Typography variant="h5" align="center">
                Marketplace
              </Typography>
              <Typography
                variant="body1"
                align="center"
                disableElevation={true}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>

              <Button
                variant="contained"
                endIcon={<KeyboardArrowRightOutlinedIcon />}
                className="inactive"
                disableElevation={true}
              >
                Learn More
              </Button>
            </div>
          </ServiceRow>

          <ServiceRow>
            <div>
              <Icon.Launch className="icon" />
              <Typography variant="h5" align="center">
                Launchpad
              </Typography>
              <Typography variant="body1" align="center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>

              <Button
                variant="contained"
                endIcon={<KeyboardArrowRightOutlinedIcon />}
                className="inactive"
                disableElevation={true}
              >
                Learn More
              </Button>
            </div>

            <div>
              <Icon.Exchange className="icon" />
              <Typography variant="h5" align="center">
                Exchange
              </Typography>
              <Typography variant="body1" align="center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>

              <Button
                variant="contained"
                endIcon={<KeyboardArrowRightOutlinedIcon />}
                className="inactive"
                disableElevation={true}
              >
                Learn More
              </Button>
            </div>

            <div>
              <Icon.Blog className="icon" />
              <Typography variant="h5" align="center">
                Blog
              </Typography>
              <Typography variant="body1" align="center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>

              <Button
                variant="contained"
                endIcon={<KeyboardArrowRightOutlinedIcon />}
                className="inactive"
                disableElevation={true}
              >
                Learn More
              </Button>
            </div>
          </ServiceRow>
        </ServiceWrapper>

        {/* mobile */}
        <MobileService>
          <Carousel
            responsive={responsive}
            customRightArrow={<CustomRightArrow />}
            customLeftArrow={<CustomLeftArrow />}
            infinite={true}
          >
            <div>
              <center>
                <Icon.Jobs className="icon" style={{ marginBottom: 32 }} />
              </center>
              <Typography
                variant="h5"
                align="center"
                style={{ marginBottom: 16 }}
              >
                Jobs
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginBottom: 24 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>
              <center>
                <CustomButton
                  variant="contained"
                  endIcon={<KeyboardArrowRightOutlinedIcon />}
                >
                  Learn More
                </CustomButton>
              </center>
            </div>

            <div>
              <center>
                <Icon.Hire className="icon" style={{ marginBottom: 32 }} />
              </center>
              <Typography
                variant="h5"
                align="center"
                style={{ marginBottom: 16 }}
              >
                Hire
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginBottom: 24 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>
              <center>
                <CustomButton
                  variant="contained"
                  endIcon={<KeyboardArrowRightOutlinedIcon />}
                >
                  Learn More
                </CustomButton>
              </center>
            </div>

            <div>
              <center>
                <Icon.Market className="icon" style={{ marginBottom: 32 }} />
              </center>
              <Typography
                variant="h5"
                align="center"
                style={{ marginBottom: 16 }}
              >
                Marketplace
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginBottom: 24 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>
              <center>
                <CustomButton
                  variant="contained"
                  endIcon={<KeyboardArrowRightOutlinedIcon />}
                >
                  Learn More
                </CustomButton>
              </center>
            </div>

            <div>
              <center>
                <Icon.Launch className="icon" style={{ marginBottom: 32 }} />
              </center>
              <Typography
                variant="h5"
                align="center"
                style={{ marginBottom: 16 }}
              >
                Launchpad
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginBottom: 24 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>
              <center>
                <CustomButton
                  variant="contained"
                  endIcon={<KeyboardArrowRightOutlinedIcon />}
                >
                  Learn More
                </CustomButton>
              </center>
            </div>

            <div>
              <center>
                <Icon.Exchange className="icon" style={{ marginBottom: 32 }} />
              </center>
              <Typography
                variant="h5"
                align="center"
                style={{ marginBottom: 16 }}
              >
                Exchange
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginBottom: 24 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>
              <center>
                <CustomButton
                  variant="contained"
                  endIcon={<KeyboardArrowRightOutlinedIcon />}
                >
                  Learn More
                </CustomButton>
              </center>
            </div>

            <div>
              <center>
                <Icon.Blog className="icon" style={{ marginBottom: 32 }} />
              </center>
              <Typography
                variant="h5"
                align="center"
                style={{ marginBottom: 16 }}
              >
                Blog
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginBottom: 24 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>
              <center>
                <CustomButton
                  variant="contained"
                  endIcon={<KeyboardArrowRightOutlinedIcon />}
                >
                  Learn More
                </CustomButton>
              </center>
            </div>
          </Carousel>
        </MobileService>
      </Container>
    </Wrapper>
  );
}

export default Services;
