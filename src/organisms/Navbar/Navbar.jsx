import { Button, Container, Typography } from "@mui/material";
import { useState } from "react";
import Icon from "../../assets/icon";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import {
  NavbarWrapper,
  Nav,
  NavMenu,
  NavLeftMenu,
  PowerIcon,
  MenuIcon,
  NavEdge,
  NavIcons,
  DropdownMenu,
} from "./NavbarStyle";

function Navbar() {
  const [showWallets, setShowWallets] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <Nav>
      <Container maxWidth="xl">
        <NavbarWrapper>
          <div>
            <Icon.Logo width="24px" />
          </div>
          <NavMenu className={showMenu && "show"}>
            <li>
              <a href="/">Jobs</a>
            </li>
            <li>For Hire</li>
            <li>Marketplace</li>
            <li>Blog</li>
          </NavMenu>
          <NavEdge>
            <div>
              <Button
                variant="contained"
                style={{
                  background: "#65AB66",
                  borderRadius: "50px",
                  textTransform: "capitalize",
                  margin: "10px 0px",
                }}
                className="survey"
              >
                Survey
              </Button>
            </div>

            <NavLeftMenu>
              <div style={{ cursor: "pointer" }}>
                <Icon.Wallet
                  style={{ margin: "15px 0" }}
                  onClick={() => setShowWallets(true)}
                />
              </div>
              <NavIcons>
                {/* <CircleStuff /> */}
                <PowerIcon>
                  <FeatherIcon icon="power" />
                </PowerIcon>
                {/* <Icon.Dropdown
                  style={{ margin: "20px 0", paddingLeft: "30px" }}
                /> */}
                <DropdownMenu className={showWallets && "show"}>
                  <div className="close">
                    <Icon.Close onClick={() => setShowWallets(false)} />
                  </div>
                  <Typography variant="h6">
                    Connect a wallet to continue
                  </Typography>
                  <ul>
                    <li>
                      <Link to="#">
                        <div>
                          <Icon.Brave width={16} /> Brave
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <div>
                          <Icon.Coinbase width={16} />
                          Coinbase Wallet
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <div>
                          <Icon.Exodus width={16} /> Exodus
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <div>
                          <Icon.Slope width={16} /> Slope
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <div>
                          <Icon.Phantom width={16} /> Phantom
                        </div>
                      </Link>
                    </li>
                  </ul>
                </DropdownMenu>
              </NavIcons>

              <MenuIcon>
                <FeatherIcon
                  icon={showMenu ? "x" : "menu"}
                  onClick={() => setShowMenu(!showMenu)}
                />
              </MenuIcon>
            </NavLeftMenu>
          </NavEdge>
        </NavbarWrapper>
      </Container>
    </Nav>
  );
}

export default Navbar;
