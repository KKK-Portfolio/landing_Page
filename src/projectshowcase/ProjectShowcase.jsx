import { Box, Grid } from "@mui/material";
import React from "react";
import projectOne from "./../assets/image/projectOne.avif";
import projectTwo from "./../assets/image/projectTwo.avif";
import projectThree from "./../assets/image/projectThree.avif";
import projectFour from "./../assets/image/projectFour.avif";
import projectFive from "./../assets/image/projectFive.avif";

import "./projetcshowcase.css";

function ProjectShowcase() {
  return (
    <Box sx={{ padding: "50px 100px 0", background: "#ffffff" }}>
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
        <Grid item xs={4}>
          <div className="showcase">
            <img src={projectFour} alt="banner" />

            <div className="showcase-text">
              <p>The Industrial Engine</p>
              <span>Manufacturing facility</span>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="showcase">
            <img src={projectFive} alt="banner" />

            <div className="showcase-text">
              <p>Urban Oasis</p>
              <span>Luxury Townhouse Development</span>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProjectShowcase;
