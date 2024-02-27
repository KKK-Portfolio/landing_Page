import { Box, Grid } from "@mui/material";
import React from "react";
import projectOne from "./../../assets/image/projectOne.avif";
import projectTwo from "./../../assets/image/projectTwo.avif";
import projectThree from "./../../assets/image/projectThree.avif";

function SimilarProject() {
  return (
    <Box sx={{ padding: "50px 100px", background: "#fff" }}>
      <p className="titles">Other Similar Projects</p>
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore eiusmod tempor incididunt ut labore Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore eiusmod tempor incididunt ut labore{" "}
      </p>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className="showcase">
            <img src={projectOne} alt="banner" />

            <div className="showcase-text">
              <p>City Center Spark</p>
              <span>Civil Engineering</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="showcase">
            <img src={projectTwo} alt="banner" />

            <div className="showcase-text">
              <p>The Pinnacle Apartments</p>
              <span>High-rise residential development</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="showcase">
            <img src={projectThree} alt="banner" />

            <div className="showcase-text">
              <p>The Heart of the City</p>
              <span>Public space revitalization</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SimilarProject;
