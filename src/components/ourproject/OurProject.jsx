import { Box, Button, Grid, IconButton } from "@mui/material";
import React, { useState } from "react";
import projectOne from "./../../assets/image/projectOne.avif";
import projectTwo from "./../../assets/image/projectTwo.avif";
import projectThree from "./../../assets/image/projectThree.avif";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./ourproject.css";
import { NavLink } from "react-router-dom";

function OurProject() {
  const imageArray = [projectOne, projectTwo, projectThree];
  const [num, setNum] = useState(0);
  const handleNext = () => {
    if (num < 2) {
      setNum(num + 1);
    } else {
      setNum(0);
    }
  };

  const handlePrev = () => {
    if (num > 0) {
      setNum(num - 1);
    } else {
      setNum(2);
    }
  };

  return (
    <Box sx={{ padding: "50px 100px", background: "#ffffff" }}>
      <p className="titles" style={{ color: "#000" }}>
        Our Projects
      </p>
      <Grid container>
        <Grid item xs={6}>
          <div className="project-image">
            <img src={imageArray[num]} alt="about" />
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
              <div
                className={
                  num === 0 ? "project-carousel active" : "project-carousel"
                }
              >
                <img src={projectOne} alt="project" />
              </div>

              <div
                className={
                  num === 1 ? "project-carousel active" : "project-carousel"
                }
              >
                <img src={projectTwo} alt="project" />
              </div>

              <div
                className={
                  num === 2 ? "project-carousel active" : "project-carousel"
                }
              >
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
                <IconButton onClick={handlePrev}>
                  <ArrowBackIosIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <IconButton onClick={handleNext}>
                  <ArrowForwardIosIcon sx={{ fontSize: 40 }} />
                </IconButton>
              </div>
              <NavLink to="/project" className="project-btn">
                <span>View Project</span>
                <ArrowForwardIcon sx={{ marginLeft: "10px" }} />
              </NavLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OurProject;
