import { Box, Button, Grid, IconButton } from "@mui/material";
import React from "react";
import projectOne from "./../../assets/image/projectOne.avif";
import projectTwo from "./../../assets/image/projectTwo.avif";
import projectThree from "./../../assets/image/projectThree.avif";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./ourproject.css";

function OurProject() {
  return (
    <Box sx={{ padding: "100px", background: "#E1E3E1" }}>
      <p className="titles" style={{ color: "#000" }}>
        Our Projects
      </p>
      <Grid container>
        <Grid item xs={6}>
          <div className="project-image">
            <img src={projectOne} alt="about" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <p className="project-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
            labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
            labore
          </p>
          <Box>
            <div className="project-carousel-container">
              <div className="project-carousel">
                <img src={projectOne} alt="project" />
              </div>

              <div className="project-carousel">
                <img src={projectTwo} alt="project" />
              </div>

              <div className="project-carousel">
                <img src={projectThree} alt="project" />
              </div>
            </div>
            <Box
              sx={{
                paddingTop: "15px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <IconButton>
                  <ArrowBackIosIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <IconButton>
                  <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
                </IconButton>
              </div>
              <Button className="project-btn">
                View Project <ArrowForwardIcon />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OurProject;
