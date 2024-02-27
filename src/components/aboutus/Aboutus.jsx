import { Box, Grid } from "@mui/material";
import React from "react";
import aboutOne from "./../../assets/image/aboutusOne.avif";
import aboutTwo from "./../../assets/image/aboutusTwo.avif";
import "./../aboutus/aboutus.css";
import ProjectNumber from "./ProjectNumber";

function Aboutus() {
  return (
    <Box sx={{ padding: "50px 100px", background: "#fff" }}>
      <p className="titles">About Our Company</p>
      <Grid container>
        <Grid item xs={6}>
          <div className="about-image">
            <img src={aboutOne} alt="about" />
          </div>
          <div className="about-image">
            <img src={aboutTwo} alt="about" />
          </div>
        </Grid>
        <Grid item xs={6}>
          <p className="about-text">
            Since 2005, KAUNG KADAY KWAL has been a proud player in Myanmar's
            construction industry. Founded by [Founders' Names], driven by the
            vision of [Vision Statement], we've steadily grown into a company
            known for its [Values and Qualities]. Over the years, we've had the
            privilege of working on landmark projects like [Mention Major
            Projects]. Each project has been a testament to our commitment to
            [Values and Commitments]. We're especially proud of [Achievements
            and Awards]. As a local company, we understand the unique needs and
            challenges of the Myanmar construction landscape. We prioritize
            using local materials and labor, fostering strong relationships with
            communities, and contributing to the sustainable development of the
            industry.
          </p>
        </Grid>
      </Grid>
      <ProjectNumber />
    </Box>
  );
}

export default Aboutus;
