import React from "react";
import { Box, Grid } from "@mui/material";
import clientOne from "./../../assets/image/clinetone.png";
import clientTwo from "./../../assets/image/clinettwo.png";
import clientThree from "./../../assets/image/clientthree.png";
import clientFour from "./../../assets/image/clientfour.png";
import clientFive from "./../../assets/image/clientfive.png";
import clientSix from "./../../assets/image/clientsix.png";
import Testmonial from "./Testmonial";

import "./ourclient.css";

function OurClient() {
  return (
    <Box
      sx={{ padding: { xs: "20px", md: "50px 100px" }, background: "#fff" }}
      className="backImage"
    >
      <p className="titles">Our Satified Clients</p>
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore eiusmod tempor incididunt ut labore Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore eiusmod tempor incididunt ut labore{" "}
      </p>
      <Grid container spacing={2} sx={{ paddingTop: "50px" }}>
        <Grid item xs={4} md={2} className="logo">
          <img src={clientOne} alt="client" />
        </Grid>
        <Grid item xs={4} md={2} className="logo">
          <img src={clientTwo} alt="client" />
        </Grid>
        <Grid item xs={4} md={2} className="logo">
          <img src={clientThree} alt="client" />
        </Grid>
        <Grid item xs={4} md={2} className="logo">
          <img src={clientFour} alt="client" />
        </Grid>
        <Grid item xs={4} md={2} className="logo">
          <img src={clientFive} alt="client" />
        </Grid>
        <Grid item xs={4} md={2} className="logo">
          <img src={clientSix} alt="client" />
        </Grid>
        <Grid item xs={4} md={2} className="logo">
          <img src={clientSix} alt="client" />
        </Grid>
        <Grid item xs={4} md={2} className="logo">
          <img src={clientSix} alt="client" />
        </Grid>
      </Grid>
      <Box sx={{ paddingTop: "50px" }}>
        <Testmonial />
      </Box>
    </Box>
  );
}

export default OurClient;
