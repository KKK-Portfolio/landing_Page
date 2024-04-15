import { Box, Button, Grid } from "@mui/material";
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
  const imageArray = [
    { name: "City Center Spark", text: "Civil Enginering", image: projectOne },
    { name: "City Middle Spark", text: "Civil Enginering", image: projectTwo },
    {
      name: "City Last Spark",
      text: "Civil Enginering",
      image: projectThree,
    },
  ];
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
    <Box
      sx={{
        padding: { xs: "20px", lg: "50px 100px" },
        background: "#ffffff",
        // display: { xs: "none", lg: "block" },
      }}
    >
      <p className="titles" style={{ color: "#000" }}>
        Our Projects
      </p>
      <Grid container>
        <Grid item xs={12} lg={6}>
          <Box className="project-image">
            <img src={imageArray[num].image} alt="about" />
          </Box>
        </Grid>
        <Grid item xs={12} lg={6} sx={{ paddingLeft: { xs: "0", lg: "20px" } }}>
          <p className="project-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
            labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
            labore
          </p>
          <Box>
            <Box
              sx={{ display: { xs: "none", lg: "flex" } }}
              className="project-carousel-container"
            >
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
            </Box>
            <Box
              sx={{
                paddingTop: "15px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <ArrowBackIosIcon
                  sx={{
                    fontSize: 40,
                  }}
                  onClick={handlePrev}
                />

                <ArrowForwardIosIcon
                  sx={{ fontSize: 40 }}
                  onClick={handleNext}
                />
              </div>
              <Button
                sx={{ background: "black" }}
                variant="contained"
                component={NavLink}
                to="/contact"
              >
                <span>View Project</span>
                <ArrowForwardIcon sx={{ marginLeft: "10px" }} />
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OurProject;
