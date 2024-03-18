import React from "react";
import { Box } from "@mui/material";
import circle from "./../../assets/image/connectproject.avif";
import { NavLink } from "react-router-dom";

function ConnectProject() {
  return (
    <Box
      sx={{
        paddingLeft: { sx: "10px", md: "100px" },
        paddingBottom: "16px",
        backgroundColor: "#fff",
      }}
    >
      <div className="about-contact-container">
        <div className="circle-image">
          <img src={circle} alt="circle" />
        </div>

        <Box
          className="about-contact-text"
          sx={{ display: { xs: "none", md: "block" } }}
        >
          <p>
            Now to make dreams come true
            <br />
            With the good million compan
            <br />
            Let's work together
          </p>
          <NavLink to="/project">
            <button>View Our Projects</button>
          </NavLink>
        </Box>
        <Box
          className="about-contact-text"
          sx={{ display: { xs: "block", md: "none" } }}
        >
          <p>
            Now to make dreams come true With the good million compan Let's work
            together
          </p>
          <NavLink to="/project">
            <button>View Our Projects</button>
          </NavLink>
        </Box>
      </div>
    </Box>
  );
}

export default ConnectProject;
