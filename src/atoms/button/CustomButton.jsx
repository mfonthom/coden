import React from "react";
import { Button } from "@mui/material";
import { Wrapper } from "./CustomButtonStyle";
const CustomButton = ({ children, inverted = false, ...props }) => {
  return (
    <Wrapper inverted={inverted}>
      <Button variant="contained" disableElevation={true} {...props}>
        {children}
      </Button>
    </Wrapper>
  );
};

export default CustomButton;
