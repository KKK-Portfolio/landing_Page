import { Box } from "@mui/material";
import React from "react";
import construction from "./../../assets/image/construction.avif";
import design from "./../../assets/image/design.avif";
import steel from "./../../assets/image/steel.avif";

import "./serviceoffer.css";

function ServiceOffer() {
  return (
    <Box sx={{ padding: "50px 100px", background: "#fff" }}>
      <p className="titles">Services We Offered</p>
      <p className="about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore eiusmod tempor incididunt ut labore Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore eiusmod tempor incididunt ut labore{" "}
      </p>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "50px",
        }}
      >
        <div className="service-container">
          <img src={construction} alt="background" />
          <div className="service">
            <p className="service-title">Construction</p>
            <p className="service-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore eiusmod tempo
            </p>
          </div>
        </div>
        <div className="service-container">
          <img src={design} alt="background" />
          <div className="service">
            <p className="service-title">Design</p>
            <p className="service-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore eiusmod tempo
            </p>
          </div>
        </div>
        <div className="service-container">
          <img src={steel} alt="background" />
          <div className="service">
            <p className="service-title">Steel Production</p>
            <p className="service-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore eiusmod tempo
            </p>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default ServiceOffer;
