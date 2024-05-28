import { Box } from "@mui/material";
import React from "react";
import projectinfo from "./../../assets/image/projectinfo.jpg";
import "./../companyinfo/companyinfo.css";

function ProjectInfo() {
  return (
    <Box>
      <div className="containers">
        <img src={projectinfo} alt="companyinfo" />
        <div className="company-text">
          <p>Our Projects</p>
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

export default ProjectInfo;
