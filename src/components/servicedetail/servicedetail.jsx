import { Box, Grid } from "@mui/material";
import React from "react";
import construct from "./../../assets/image/construction.avif";
import design from "./../../assets/image/design.avif";
import steel from "./../../assets/image/steel.avif";
import renovation from "./../../assets/image/renovation.avif";
import { useNavigate } from "react-router-dom";

import "./servicedetail.css";

function Servicedetail() {
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: { xs: "30px 10px", md: "50px 100px" } }}>
      <Grid
        container
        sx={{ borderRadius: "20px", overflow: "hidden" }}
        onClick={() => navigate("/construction")}
      >
        <Grid item xs={12} md={6} lg={6}>
          <div className="servicedetail">
            <img src={construct} alt="construction" />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            background: "#1C1C1C",
            padding: { xs: "10px", md: "10px 50px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="servicedetail-text">
            <p>Construction</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
              labore Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore eiusmod tempor
              incididunt ut labore incididunt ut labore Lorem ipsum dolor
            </span>
          </div>
        </Grid>
      </Grid>
      {/* ----------------------------- */}
      <Grid
        container
        sx={{
          borderRadius: "20px",
          overflow: "hidden",
          marginY: { xs: "30px", md: "50px" },
        }}
        onClick={() => navigate("/design")}
      >
        <Grid item xs={12} md={6} lg={6}>
          <div className="servicedetail">
            <img src={design} alt="construction" />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            background: "#1C1C1C",
            padding: { xs: "10px", md: "10px 50px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="servicedetail-text">
            <p>Design</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
              labore Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore eiusmod tempor
              incididunt ut labore incididunt ut labore Lorem ipsum dolor
            </span>
          </div>
        </Grid>
      </Grid>
      {/* -------------------- */}
      <Grid
        container
        sx={{ borderRadius: "20px", overflow: "hidden" }}
        onClick={() => navigate("/steel")}
      >
        <Grid item xs={12} md={6} lg={6}>
          <div className="servicedetail">
            <img src={steel} alt="construction" />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            background: "#1C1C1C",
            padding: { xs: "10px", md: "10px 50px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="servicedetail-text">
            <p>Steel Production</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
              labore Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore eiusmod tempor
              incididunt ut labore incididunt ut labore Lorem ipsum dolor
            </span>
          </div>
        </Grid>
      </Grid>
      {/* -------------------- */}
      <Grid
        container
        sx={{
          borderRadius: "20px",
          overflow: "hidden",
          marginTop: { xs: "30px", md: "50px" },
        }}
        onClick={() => navigate("/renovation")}
      >
        <Grid item xs={12} md={6} lg={6}>
          <div className="servicedetail">
            <img src={renovation} alt="construction" />
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{
            background: "#1C1C1C",
            padding: { xs: "10px", md: "10px 50px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="servicedetail-text">
            <p>Renovation</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
              labore Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore eiusmod tempor
              incididunt ut labore incididunt ut labore Lorem ipsum dolor
            </span>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Servicedetail;
