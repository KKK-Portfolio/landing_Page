import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import axiso from "./../../api/axios.js";

import "./ourmissin.css";

function OurMission() {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const res = await axiso.get("api/v1/about-us");
      console.log(res.data.aboutUs[0].historyImage);
      setData(res.data.aboutUs[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(data.historyImage);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        padding: { xs: "30px 10px", md: "50px 100px" },
        backgroundColor: "#fff",
      }}
    >
      {data && (
        <div>
          <Grid container className="ourmission-container">
            <Grid item xs={12} lg={6} className="ourmission-text">
              <span>{data.history}</span>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div className="image-container">
                <img
                  src={`${process.env.REACT_APP_API_URL}api/v1/about-us/${data.historyImage.filename}`}
                  alt="about"
                />
              </div>
            </Grid>
          </Grid>
          <p className="mission-title">Our Mission</p>
          <Grid container className="ourmission-container">
            <Grid item xs={12} lg={6} className="ourmission-text">
              <span>{data.mission}</span>
            </Grid>
            <Grid item xs={12} lg={6}>
              <div className="mission-container">
                <img
                  src={`${process.env.REACT_APP_API_URL}api/v1/about-us/${data.missionImage.filename}`}
                  alt="mission"
                />
              </div>
            </Grid>
          </Grid>
          <p className="mission-title">Our Vission</p>
          <Grid container className="ourmission-container">
            <Grid
              item
              xs={12}
              md={6}
              sx={{ paddingRight: { xs: "0", md: "20px", lg: "100px" } }}
            >
              <div className="mission-container">
                <img
                  src={`${process.env.REACT_APP_API_URL}api/v1/about-us/${data.visionImage.filename}`}
                  alt="mission"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} className="ourvision-text">
              <span>{data.vision}</span>
            </Grid>
          </Grid>
        </div>
      )}
    </Box>
  );
}

export default OurMission;
