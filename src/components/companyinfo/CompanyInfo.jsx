import { Box } from "@mui/material";
import React from "react";
import companyinfo from "./../../assets/image/companyinfo.avif";

import "./companyinfo.css";

function CompanyInfo() {
  return (
    <Box>
      <div className="containers">
        <img src={companyinfo} alt="companyinfo" />
        <div className="company-text">
          <p>About Our Company</p>
          <span>
            Now to make dreams come true. With the good million company Let's
            work together. Learn about our values, experience, and commitment to
            excellence.
          </span>
        </div>
      </div>
    </Box>
  );
}

export default CompanyInfo;
