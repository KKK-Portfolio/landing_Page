import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import axios from "./../../api/axios";

import "./ourproject.css";
import { NavLink } from "react-router-dom";

function OurProject() {
  const [showcase, setshowcase] = useState([]);
  const [num, setNum] = useState(0);

  async function fetchShowcase() {
    try {
      const res = await axios.get("api/v1/contents/allContents");
      console.log(res.data.imageContents);
      setshowcase(res.data.imageContents);
    } catch (error) {}
  }

  useEffect(() => {
    fetchShowcase();
  }, []);

  // console.log(showcase);

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
        padding: { xs: "20px", md: "50px 100px" },
        background: "#ffffff",
        // display: { xs: "none", lg: "block" },
      }}
    >
      <p className="titles" style={{ color: "#000" }}>
        Our Projects
      </p>
      {showcase && showcase.length > 0 && (
        <Grid container>
          <Grid item xs={12} lg={6}>
            <Box className="project-image">
              <img
                src={`${process.env.REACT_APP_API_URL}api/v1/contents/${showcase[num].images[0].filename}`}
                alt="about"
              />
              <div className="project-image-text">
                <p className="project-image-text-title">
                  {showcase[num].textContentRef.title}
                </p>
                <span>{showcase[num].textContentRef.description}</span>
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            lg={6}
            sx={{ paddingLeft: { xs: "0", lg: "20px" } }}
          >
            <p className="project-text">
              At Kaung Kaday Kyawl Construction Company, we pride ourselves on
              delivering exceptional construction projects that stand as a
              testament to our commitment to quality, innovation, and client
              satisfaction
            </p>
            <Box>
              <Box
                sx={{
                  display: { xs: "none", lg: "flex" },
                  justifyContent: "space-between",
                }}
                className="project-carousel-container"
              >
                <div
                  className={
                    num === 0 ? "project-carousel active" : "project-carousel"
                  }
                >
                  <img
                    src={`${process.env.REACT_APP_API_URL}api/v1/contents/${showcase[0].images[0].filename}`}
                    alt="project"
                  />
                </div>

                <div
                  className={
                    num === 1 ? "project-carousel active" : "project-carousel"
                  }
                >
                  <img
                    src={`${process.env.REACT_APP_API_URL}api/v1/contents/${showcase[1].images[0].filename}`}
                    alt="project"
                  />
                </div>

                <div
                  className={
                    num === 2 ? "project-carousel active" : "project-carousel"
                  }
                >
                  <img
                    src={`${process.env.REACT_APP_API_URL}api/v1/contents/${showcase[2].images[0].filename}`}
                    alt="project"
                  />
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
      )}
    </Box>
  );
}

export default OurProject;
