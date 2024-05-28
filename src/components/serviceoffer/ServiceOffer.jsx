import { Box, Grid } from "@mui/material";
import React from "react";
import construction from "./../../assets/image/construction.jpg";
import design from "./../../assets/image/design.jpg";
import steel from "./../../assets/image/stel.jpg";
import renovation from "./../../assets/image/renovationbg.jpg";
import { useNavigate } from "react-router-dom";

import "./serviceoffer.css";

function ServiceOffer() {
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: { xs: "20px", md: "50px 100px" }, background: "#fff" }}>
      <p className="titles">Services We Offered</p>
      <p className="about-text">
        At KaungKadayKyawl Construction, we provide a wide range of construction
        services tailored to meet the unique needs of our clients. Our team of
        experts is dedicated to delivering exceptional quality and ensuring your
        project is completed on time and within budget. Explore our diverse
        service offerings below
      </p>
      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ marginBottom: "20px", cursor: "pointer" }}
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
          sx={{ marginBottom: "20px", cursor: "pointer" }}
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
        <Grid
          item
          xs={12}
          md={6}
          sx={{ marginBottom: "20px", cursor: "pointer" }}
          onClick={() => navigate("/design")}
        >
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
          sx={{ marginBottom: "20px", cursor: "pointer" }}
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
