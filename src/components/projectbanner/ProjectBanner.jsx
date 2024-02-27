import { Box } from "@mui/material";
import React from "react";
import projectOne from "./../../assets/image/projectOne.avif";

import "./projectbanner.css";

function ProjectBanner() {
  return (
    <Box>
      <div className="projectbanner">
        <img src={projectOne} alt="banner" className="center" />
        <div className="projectbanner-text">
          <p>City Center Spark</p>
          <span>Civil Engineering</span>
        </div>
      </div>
    </Box>
  );
}

export default ProjectBanner;
