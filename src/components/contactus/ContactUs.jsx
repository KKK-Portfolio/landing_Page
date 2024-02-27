import { Box, Grid } from "@mui/material";
import React from "react";
import facebook from "./../../assets/image/facebook.png";
import tiktok from "./../../assets/image/tiktok.png";

import "./contactus.css";

function ContactUs() {
  return (
    <Box sx={{ padding: "50px 100px", background: "#E1E1E1" }}>
      <Grid
        container
        sx={{ background: "#000", padding: "100px 0", borderRadius: "50px" }}
      >
        <Grid item xs={12} sm={6}>
          <div className="contact-container">
            <p className="text contact-header ">Contact Us</p>
            <span className="text contact-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
              labore
            </span>
            <p className="text contact-number">09 42 3623 353</p>
            <span className="text contact-text">Follow us on Social Media</span>
            <div>
              <a href="https://www.facebook.com/">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://www.facebook.com/">
                <img src={tiktok} alt="tiktok" />
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>
    </Box>
  );
}

export default ContactUs;
