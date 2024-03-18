import { Box, Grid } from "@mui/material";
import React from "react";
import finished from "./../../assets/image/finish.png";
import staff from "./../../assets/image/staff.png";
import year from "./../../assets/image/year.png";
import backgroudfinidh from "./../../assets/image/finish.avif";
import backgroudstaff from "./../../assets/image/staff.avif";
import backgroudyear from "./../../assets/image/year.avif";

function ProjectNumber() {
  return (
    <Grid
      container
      sx={{
        paddingTop: { sx: "35px", md: "50px" },
      }}
    >
      <Grid item xs={4}>
        <div className="project-number-container">
          <img src={backgroudfinidh} alt="background" />
          <div className="project-number">
            <img src={finished} alt="finished" />
            <p className="number">55</p>
            <p className="text">Finished Projects</p>
          </div>
        </div>
      </Grid>

      <Grid item xs={4}>
        <div className="project-number-container">
          <img src={backgroudstaff} alt="background" />
          <div className="project-number">
            <img src={staff} alt="finished" />
            <p className="number">300</p>
            <p className="text">Staff Members</p>
          </div>
        </div>
      </Grid>

      <Grid item xs={4}>
        <div className="project-number-container">
          <img src={backgroudyear} alt="background" />
          <div className="project-number">
            <img src={year} alt="finished" />
            <p className="number">8</p>
            <p className="text">Year of Experience</p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default ProjectNumber;
