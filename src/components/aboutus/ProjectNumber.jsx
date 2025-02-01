import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import finished from "./../../assets/image/finish.png";
import staff from "./../../assets/image/staff.png";
import year from "./../../assets/image/year.png";
import backgroudfinidh from "./../../assets/image/finish.jpg";
import backgroudstaff from "./../../assets/image/staff.jpg";
import backgroudyear from "./../../assets/image/year.jpg";
import { useInView } from "react-intersection-observer";
import { useSpring, animated } from "@react-spring/web";
import axios from "./../../api/axios";

function Number({ n }) {
  const [ref, inView] = useInView();
  const { number } = useSpring({
    from: { number: 0 },
    number: inView ? n : 0,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.span ref={ref}>{number.to((n) => n.toFixed(0))}</animated.span>
  );
}

function ProjectNumber() {
  const [project, setProject] = useState(80);
  const [staffCounts, setStaffCounts] = useState(200);
  const [years, setYears] = useState(7);

  return (
    <Grid
      container
      sx={{
        paddingTop: { sx: "35px", md: "50px" },
      }}
    >
      <Grid item xs={4}>
        <div className="project-number-container">
          <img src={backgroudfinidh} alt="background" loading="lazy" once />
          <div className="project-number">
            <img src={finished} alt="finished" />
            <p className="number">
              <Number n={project} />
              <span>+</span>
            </p>
            <p className="text">Finished Projects</p>
          </div>
        </div>
      </Grid>

      <Grid item xs={4}>
        <div className="project-number-container">
          <img src={backgroudstaff} alt="background" />
          <div className="project-number">
            <img src={staff} alt="finished" />
            <p className="number">
              <Number n={staffCounts} />
            </p>
            <p className="text">Staff Members</p>
          </div>
        </div>
      </Grid>

      <Grid item xs={4}>
        <div className="project-number-container">
          <img src={backgroudyear} alt="background" />
          <div className="project-number">
            <img src={year} alt="finished" />
            <p className="number">
              <Number n={years} />
            </p>
            <p className="text">Year of Experience</p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default ProjectNumber;
