import React from "react";
import { Box } from "@mui/material";
import circle from "./../../assets/image/circle.avif";

import "./aboutcontact.css";

function AboutContact() {
  return (
    <Box
      sx={{
        paddingLeft: "100px",
        paddingBottom: "16px",
        backgroundColor: "#fff",
      }}
    >
      <div className="about-contact-container">
        <div className="circle-image">
          <img src={circle} alt="circle" />
        </div>

        <div className="about-contact-text">
          <p>
            Now to make dreams come true
            <br />
            With the good million compan
            <br />
            Let's work together
          </p>
          <button>Contact Us</button>
        </div>
      </div>
    </Box>
  );
}

export default AboutContact;
