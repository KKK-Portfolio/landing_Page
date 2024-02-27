import React from "react";
import { Box, Grid } from "@mui/material";
import safety from "./../../assets/image/safety.avif";
import reliable from "./../../assets/image/reliable.avif";
import expert from "./../../assets/image/expert.avif";
import satification from "./../../assets/image/satification.avif";
import renovation from "./../../assets/image/renovation.avif";
import resource from "./../../assets/image/resource.avif";

import "./whytochooseus.css";

function WhyToChooseUs() {
  return (
    <Box sx={{ padding: "50px 100px", background: "#fff" }}>
      <div className="content-container">
        <p className="titles" style={{ color: "#000" }}>
          Why to choose Us?
        </p>
        <p className="about-text" style={{ color: "#000" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
          labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
          labore{" "}
        </p>
        <Grid container spacing={2} sx={{ paddingTop: "50px" }}>
          <Grid item xs={4}>
            <div className="why-choose-us-container">
              <img src={safety} alt="background" />
              <p>Safety</p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="why-choose-us-container">
              <img src={reliable} alt="background" />
              <p>Reliable</p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="why-choose-us-container">
              <img src={expert} alt="background" />
              <p>Experts</p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="why-choose-us-container">
              <img src={satification} alt="background" />
              <p>Client Satisfaction</p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="why-choose-us-container">
              <img src={renovation} alt="background" />
              <p>Renovation</p>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div className="why-choose-us-container">
              <img src={resource} alt="background" />
              <p>Resource</p>
            </div>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

export default WhyToChooseUs;
