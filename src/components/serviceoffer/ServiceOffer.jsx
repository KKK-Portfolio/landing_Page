import { Box, Grid } from "@mui/material";
import React from "react";
import construction from "./../../assets/image/construction.avif";
import design from "./../../assets/image/design.avif";
import steel from "./../../assets/image/steel.avif";
import renovation from "./../../assets/image/renovationbg.avif";
import { useNavigate } from "react-router-dom";

import "./serviceoffer.css";

function ServiceOffer() {
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: { xs: "20px", md: "50px 100px" }, background: "#fff" }}>
      <p className="titles">Services We Offered</p>
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore eiusmod tempor incididunt ut labore Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore eiusmod tempor incididunt ut labore{" "}
      </p>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ marginBottom: "20px" }}
          onClick={() => navigate("/steel")}
        >
          <div className="service-container">
            <img src={steel} alt="background" />
            <div className="service">
              <p className="service-title">Steel Structure</p>
              <p className="service-text">
                Experience superior durability and efficiency with our
                custom-designed steel structures.
              </p>
            </div>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ marginBottom: "20px" }}
          onClick={() => navigate("/construction")}
        >
          <div className="service-container">
            <img src={construction} alt="background" />
            <div className="service">
              <p className="service-title">Construction</p>
              <p className="service-text">
                Build with confidence using our reliable construction services,
                delivering durable and timely results.
              </p>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={6} sx={{ marginBottom: "20px" }}>
          <div className="service-container">
            <img src={design} alt="background" />
            <div className="service">
              <p className="service-title">Design</p>
              <p className="service-text">
                Build with confidence using our reliable construction services,
                delivering durable and timely results.
              </p>
            </div>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{ marginBottom: "20px" }}
          onClick={() => navigate("/renovation")}
        >
          <div className="service-container">
            <img src={renovation} alt="background" />
            <div className="service">
              <p className="service-title">Renovation</p>
              <p className="service-text">
                Revitalize your space with our top-quality renovation services,
                enhancing functionality and aesthetics.
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ServiceOffer;
