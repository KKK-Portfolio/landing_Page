import { Box } from "@mui/material";
import React from "react";
import serviceinfo from "./../../assets/image/serviceinfo.avif";

function ServiceInfo() {
  return (
    <Box>
      <div className="containers">
        <img src={serviceinfo} alt="companyinfo" />
        <div className="company-text">
          <p>Our Service</p>
          <span>
            Explore our portfolio of stunning residential and commercial
            projects. And discover what's possible with our expertise and
            dedication.
          </span>
        </div>
      </div>
    </Box>
  );
}

export default ServiceInfo;
