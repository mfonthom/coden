import React from "react";
import {
  Wrapper,
  ServiceWrapper,
  ServiceRow,
  MobileService,
} from "./ServiceStyle";
import { Container } from "@mui/system";
import { Button, Typography } from "@mui/material";
import Icon from "./../../../assets/icon";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

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
              <Typography
                variant="body1"
                align="center"
                style={{ marginTop: 20 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>

              <Button
                variant="contained"
                endIcon={<KeyboardArrowRightOutlinedIcon />}
              >
                Learn More
              </Button>
            </div>

            <div>
              <Icon.Hire className="icon" />
              <Typography variant="h5" align="center">
                For Hire
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginTop: 20 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>

              <Button
                variant="contained"
                endIcon={<KeyboardArrowRightOutlinedIcon />}
                className="inactive"
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
                style={{ marginTop: 20 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>

              <Button
                variant="contained"
                endIcon={<KeyboardArrowRightOutlinedIcon />}
                className="inactive"
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
              <Typography
                variant="body1"
                align="center"
                style={{ marginTop: 20 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>

              <Button
                variant="contained"
                endIcon={<KeyboardArrowRightOutlinedIcon />}
                className="inactive"
              >
                Learn More
              </Button>
            </div>

            <div>
              <Icon.Exchange className="icon" />
              <Typography variant="h5" align="center">
                Exchange
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginTop: 20 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>

              <Button
                variant="contained"
                endIcon={<KeyboardArrowRightOutlinedIcon />}
                className="inactive"
              >
                Learn More
              </Button>
            </div>

            <div>
              <Icon.Blog className="icon" />
              <Typography variant="h5" align="center">
                Blog
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginTop: 20 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>

              <Button
                variant="contained"
                endIcon={<KeyboardArrowRightOutlinedIcon />}
                className="inactive"
              >
                Learn More
              </Button>
            </div>
          </ServiceRow>
        </ServiceWrapper>

        {/* mobile */}
        <MobileService>
          <Carousel responsive={responsive} infinite={true}>
            <div>
              <center>
                <Icon.Jobs className="icon" style={{ marginBottom: 40 }} />
              </center>
              <Typography variant="h5" align="center">
                Jobs
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginTop: 20 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>
              <center>
                <Button
                  variant="contained"
                  endIcon={<KeyboardArrowRightOutlinedIcon />}
                  className="inactive"
                  style={{ marginTop: 20 }}
                >
                  Learn More
                </Button>
              </center>
            </div>

            <div>
              <center>
                <Icon.Hire className="icon" style={{ marginBottom: 40 }} />
              </center>
              <Typography variant="h5" align="center">
                Hire
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginTop: 20 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>
              <center>
                <Button
                  variant="contained"
                  endIcon={<KeyboardArrowRightOutlinedIcon />}
                  className="inactive"
                  style={{ marginTop: 20 }}
                >
                  Learn More
                </Button>
              </center>
            </div>

            <div>
              <center>
                <Icon.Market className="icon" style={{ marginBottom: 40 }} />
              </center>
              <Typography variant="h5" align="center">
                Marketplace
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginTop: 20 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>
              <center>
                <Button
                  variant="contained"
                  endIcon={<KeyboardArrowRightOutlinedIcon />}
                  className="inactive"
                  style={{ marginTop: 20 }}
                >
                  Learn More
                </Button>
              </center>
            </div>

            <div>
              <center>
                <Icon.Launch className="icon" style={{ marginBottom: 40 }} />
              </center>
              <Typography variant="h5" align="center">
                Launchpad
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginTop: 20 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>
              <center>
                <Button
                  variant="contained"
                  endIcon={<KeyboardArrowRightOutlinedIcon />}
                  className="inactive"
                  style={{ marginTop: 20 }}
                >
                  Learn More
                </Button>
              </center>
            </div>

            <div>
              <center>
                <Icon.Exchange className="icon" style={{ marginBottom: 40 }} />
              </center>
              <Typography variant="h5" align="center">
                Exchange
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginTop: 20 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>
              <center>
                <Button
                  variant="contained"
                  endIcon={<KeyboardArrowRightOutlinedIcon />}
                  className="inactive"
                  style={{ marginTop: 20 }}
                >
                  Learn More
                </Button>
              </center>
            </div>

            <div>
              <center>
                <Icon.Blog className="icon" style={{ marginBottom: 40 }} />
              </center>
              <Typography variant="h5" align="center">
                Blog
              </Typography>
              <Typography
                variant="body1"
                align="center"
                style={{ marginTop: 20 }}
              >
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Maiores, magni? Nemo, eligendi laboriosam doloremque
              </Typography>
              <center>
                <Button
                  variant="contained"
                  endIcon={<KeyboardArrowRightOutlinedIcon />}
                  className="inactive"
                  style={{ marginTop: 20 }}
                >
                  Learn More
                </Button>
              </center>
            </div>
          </Carousel>
        </MobileService>
      </Container>
    </Wrapper>
  );
}

export default Services;
