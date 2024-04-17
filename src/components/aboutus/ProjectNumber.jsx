import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import finished from "./../../assets/image/finish.png";
import staff from "./../../assets/image/staff.png";
import year from "./../../assets/image/year.png";
import backgroudfinidh from "./../../assets/image/finish.avif";
import backgroudstaff from "./../../assets/image/staff.avif";
import backgroudyear from "./../../assets/image/year.avif";
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
  const [project, setProject] = useState(0);
  const [staffCounts, setStaffCounts] = useState(0);
  const [years, setYears] = useState(0);

  async function fetchPjNumbers() {
    try {
      const res = await axios.get("api/v1/achievements/projects");
      // console.log(res.data);
      setProject(res.data.finishedProjects * 1);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPjNumbers();
  }, []);

  async function fetchStaffNumbers() {
    try {
      const res = await axios.get("api/v1/achievements/staffs");
      // console.log(res.data.staff * 1);
      setStaffCounts(res.data.staff * 1);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchStaffNumbers();
  }, []);

  async function fetchYearNumbers() {
    try {
      const res = await axios.get("api/v1/achievements/year");
      console.log(res.data.achievementDetails[0].companyExperienceYears);
      setYears(res.data.achievementDetails[0].companyExperienceYears);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchYearNumbers();
  }, []);

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
            <p className="number">
              <Number n={project} />
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
              <Number n={8} />
            </p>
            <p className="text">Year of Experience</p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default ProjectNumber;
