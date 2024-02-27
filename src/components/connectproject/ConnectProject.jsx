import React from "react";
import { Box } from "@mui/material";
import circle from "./../../assets/image/connectproject.avif";
import { NavLink } from "react-router-dom";

function ConnectProject() {
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
          <NavLink to="/project">
            <button>View Our Projects</button>
          </NavLink>
        </div>
      </div>
    </Box>
  );
}

export default ConnectProject;
