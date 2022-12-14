import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import {
  FeatureWrapper,
  FeatureContent,
  Header,
  Featured,
  CommunityCTA,
  FeaturedImg,
} from "./FeatureStyle";
import img from "../../../assets/images/Octave.png";
import featuredBg from "./../../../assets/images/featured.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Feature() {
  return (
    <FeatureWrapper>
      <Header>
        <Typography variant="h1">featured</Typography>
      </Header>
      <Carousel
        autoPlay={true}
        autoPlaySpeed={2000}
        responsive={responsive}
        infinite={true}
        showDots={false}
        arrows={false}
      >
        <FeatureContent>
          <Featured>
            <Container>
              <img src={img} width="120" />
              <Typography style={{ fontFamily: "satoshi", fontSize: 16 }}>
                We are startup building the next pro portfolio management
                platform. Get comprehensive and accurate portfolio data to
                better understand our financial situation, Trade with all proper
                information you need optimize your portfolio for taxation.
              </Typography>

              <Button
                variant="text"
                style={{
                  color: "#000",
                  marginTop: "15px",
                  textTransform: "capitalize",
                }}
              >
                We're hiring <ArrowForwardIcon />
              </Button>
            </Container>
          </Featured>
          <FeaturedImg bg={featuredBg} />
        </FeatureContent>

        <FeatureContent>
          <Featured>
            <Container>
              <img src={img} width="120" />
              <Typography style={{ fontFamily: "satoshi", fontSize: 16 }}>
                We are startup building the next pro portfolio management
                platform. Get comprehensive and accurate portfolio data to
                better understand our financial situation, Trade with all proper
                information you need optimize your portfolio for taxation.
              </Typography>

              <Button
                variant="text"
                style={{
                  color: "#000",
                  marginTop: "15px",
                  textTransform: "capitalize",
                }}
              >
                We're hiring <ArrowForwardIcon />
              </Button>
            </Container>
          </Featured>
          <FeaturedImg bg={featuredBg} />
        </FeatureContent>

        <FeatureContent>
          <Featured>
            <Container>
              <img src={img} width="120" />
              <Typography style={{ fontFamily: "satoshi", fontSize: 16 }}>
                We are startup building the next pro portfolio management
                platform. Get comprehensive and accurate portfolio data to
                better understand our financial situation, Trade with all proper
                information you need optimize your portfolio for taxation.
              </Typography>

              <Button
                variant="text"
                style={{
                  color: "#000",
                  marginTop: "15px",
                  textTransform: "capitalize",
                }}
              >
                We're hiring <ArrowForwardIcon />
              </Button>
            </Container>
          </Featured>
          <FeaturedImg bg={featuredBg} />
        </FeatureContent>
      </Carousel>
      {/* <FeatureContent>
        <Featured>
          <Container>
            <img src={img} width="120" />
            <Typography style={{ fontFamily: "satoshi", fontSize: 16 }}>
              We are startup building the next pro portfolio management
              platform. Get comprehensive and accurate portfolio data to better
              understand our financial situation, Trade with all proper
              information you need optimize your portfolio for taxation.
            </Typography>

            <Button
              variant="text"
              style={{
                color: "#000",
                marginTop: "15px",
                textTransform: "capitalize",
              }}
            >
              We're hiring <ArrowForwardIcon />
            </Button>
          </Container>
        </Featured>
        <FeaturedImg bg={featuredBg} />
      </FeatureContent> */}

      <CommunityCTA>
        <Typography variant="h5" color="white">
          Join The Community
        </Typography>
        <Button
          variant="contained"
          style={{ background: "#fff", color: "#26619C" }}
        >
          Get started
        </Button>
        <Button
          //   style={{ color: "#fff" }}
          variant="outlined"
          color="inherit"
          startIcon={<KeyboardArrowRightOutlinedIcon />}
        >
          Learn More
        </Button>
      </CommunityCTA>
    </FeatureWrapper>
  );
}

export default Feature;
