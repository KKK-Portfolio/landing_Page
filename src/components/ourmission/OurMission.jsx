import React from "react";
import { Box, Grid } from "@mui/material";
import about from "./../../assets/image/about.avif";
import mission from "./../../assets/image/mission.avif";
import vision from "./../../assets/image/vision.avif";

import "./ourmissin.css";

function OurMission() {
  return (
    <Box sx={{ padding: "50px 100px", backgroundColor: "#fff" }}>
      <Grid container className="ourmission-container">
        <Grid item xs={12} md={6} className="ourmission-text">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
            labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
            labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
            labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
            labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
            labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
            labore
          </span>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="image-container">
            <img src={about} alt="about" />
          </div>
        </Grid>
      </Grid>
      <p className="mission-title">Our Mission</p>
      <Grid container className="ourmission-container">
        <Grid item xs={12} md={6} className="ourmission-text">
          <span>
            Since 2005,{" "}
            <span style={{ fontWeight: "bold" }}>KAUNG KADAY KWAL</span> has
            been a proud player in Myanmar's construction industry. Founded by
            [Founders' Names], driven by the vision of [Vision Statement], we've
            steadily grown into a company known for its [Values and Qualities].
            Over the years, we've had the privilege of working on landmark
            projects like [Mention Major Projects]. Each project has been a
            testament to our commitment to [Values and Commitments].
          </span>
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="mission-container">
            <img src={mission} alt="mission" />
          </div>
        </Grid>
      </Grid>
      <p className="mission-title">Our Vission</p>
      <Grid container className="ourmission-container">
        <Grid item xs={12} md={6} sx={{ paddingRight: "100px" }}>
          <div className="mission-container">
            <img src={vision} alt="mission" />
          </div>
        </Grid>
        <Grid item xs={12} md={6} className="ourvision-text">
          <span>
            We're especially proud of [Achievements and Awards]. As a local
            company, we understand the unique needs and challenges of the
            Myanmar construction landscape. We prioritize using local materials
            and labor, fostering strong relationships with communities, and
            contributing to the sustainable development of the industry. Looking
            ahead, we're excited to continue partnering with clients to bring
            their visions to life, while upholding our values and contributing
            to the growth and prosperity of Myanmar.
          </span>
        </Grid>
      </Grid>
    </Box>
  );
}

export default OurMission;
