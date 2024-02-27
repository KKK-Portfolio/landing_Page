import { Box } from "@mui/material";
import React from "react";
import connectinfo from "./../../assets/image/connectinfo.avif";

function ConnectInfo() {
  return (
    <Box>
      <div className="containers">
        <img src={connectinfo} alt="companyinfo" />
        <div className="company-text">
          <p>Connect With Us</p>
          <span>
            We're your trusted partner in building quality. Let's talk & discuss
            your vision and turn your dream home into reality.
          </span>
        </div>
      </div>
    </Box>
  );
}

export default ConnectInfo;
