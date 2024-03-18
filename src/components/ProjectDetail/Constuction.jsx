import { Box, Grid } from "@mui/material";
import React from "react";
import projectinfo from "./../../assets/image/projectinfo.avif";
import projectOne from "./../../assets/image/projectOne.avif";
import projectTwo from "./../../assets/image/projectTwo.avif";
import projectThree from "./../../assets/image/projectThree.avif";
import projectFour from "./../../assets/image/projectFour.avif";
import projectFive from "./../../assets/image/projectFive.avif";
import { useNavigate } from "react-router-dom";

function Construction() {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    navigate("/project/1");
  };

  return (
    <Box>
      <Box>
        <div className="containers">
          <img
            src={
              "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="companyinfo"
          />
          <div className="company-text">
            <p>Our Construction Projects</p>
            <span>
              Explore our portfolio of stunning residential and commercial
              projects. And discover what's possible with our expertise and
              dedication.
            </span>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          padding: { xs: "30px 10px", md: "50px 100px" },
          background: "#ffffff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4} onClick={clickHandler}>
            <div className="showcase">
              <img src={projectOne} alt="banner" />

              <div className="showcase-text">
                <p>City Center Spark</p>
                <span>Civil Engineering</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} onClick={clickHandler}>
            <div className="showcase">
              <img src={projectTwo} alt="banner" />

              <div className="showcase-text">
                <p>The Pinnacle Apartments</p>
                <span>High-rise residential development</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} onClick={clickHandler}>
            <div className="showcase">
              <img src={projectThree} alt="banner" />

              <div className="showcase-text">
                <p>The Heart of the City</p>
                <span>Public space revitalization</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} onClick={clickHandler}>
            <div className="showcase">
              <img src={projectFour} alt="banner" />

              <div className="showcase-text">
                <p>The Industrial Engine</p>
                <span>Manufacturing facility</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} onClick={clickHandler}>
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
    </Box>
  );
}

export default Construction;
