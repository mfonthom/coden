import { Container } from "@mui/system";
import { CryptoLogos, HeroWrapper, SearchFields } from "./HeroStyle";
import img from "./../../../assets/images/home-hero.svg";
import { Button, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import Icon from "../../../assets/icon";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <Container>
      <HeroWrapper>
        <div>
          <p>Code & Jobs</p>
          <h1>An all-in-one cryptocurrency</h1>

          <SearchFields>
            <TextField
              id="input-with-icon-textfield"
              variant="outlined"
              placeholder="Title, company or keywords"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />{" "}
            <TextField
              id="input-with-icon-textfield"
              variant="outlined"
              placeholder="Location, Remote"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOnOutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              style={{ background: "#26619C" }}
              size="small"
            >
              <KeyboardArrowRightOutlinedIcon />
            </Button>
          </SearchFields>
        </div>
        <div>
          <img src={img} width="100%" alt="cryptocurrencies" />
        </div>
      </HeroWrapper>
      <Marquee speed={80}>
        <CryptoLogos>
          <Icon.Avalanche width={100} />
          <Icon.Binance width={100} />
          <Icon.Cardano width={100} />
          <Icon.Fantom width={100} />
          <Icon.Ethereum width={100} />
          <Icon.Polkadot width={100} />
          <Icon.Solana width={100} />
          <Icon.Tron width={100} />
        </CryptoLogos>
      </Marquee>
    </Container>
  );
};

export default Hero;
