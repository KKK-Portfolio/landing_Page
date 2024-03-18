import { Box, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Design() {
  const navigate = useNavigate();

  const clickHandler = (e) => {
    navigate("/project/1");
  };

  return (
    <Box>
      <Box>
        <div className="containers">
          <img
            src={
              "https://images.unsplash.com/photo-1474674556023-efef886fa147?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="companyinfo"
          />
          <div className="company-text">
            <p>Our Design Projects</p>
            <span>
              Explore our portfolio of stunning residential and commercial
              projects. And discover what's possible with our expertise and
              dedication.
            </span>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          padding: { xs: "30px 10px", md: "50px 100px" },
          background: "#ffffff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={4} onClick={clickHandler}>
            <div className="showcase">
              <img
                src={
                  "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN0ZWVsJTIwaW5kdXN0cnl8ZW58MHx8MHx8fDA%3D"
                }
                alt="banner"
              />

              <div className="showcase-text">
                <p>The Industrial Engine</p>
                <span>Civil Engineering</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} onClick={clickHandler}>
            <div className="showcase">
              <img
                src={
                  "https://images.unsplash.com/photo-1469389335181-2198b4caa734?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="banner"
              />

              <div className="showcase-text">
                <p>The Pinnacle Apartments</p>
                <span>High-rise residential development</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} onClick={clickHandler}>
            <div className="showcase">
              <img
                src={
                  "https://plus.unsplash.com/premium_photo-1661963468074-9f0e98985f5c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="banner"
              />

              <div className="showcase-text">
                <p>The Heart of the City</p>
                <span>Public space revitalization</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} onClick={clickHandler}>
            <div className="showcase">
              <img
                src={
                  "https://plus.unsplash.com/premium_photo-1664300608028-15bcc4da4996?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="banner"
              />

              <div className="showcase-text">
                <p>The Industrial Engine</p>
                <span>Manufacturing facility</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} onClick={clickHandler}>
            <div className="showcase">
              <img
                src={
                  "https://plus.unsplash.com/premium_photo-1661963767417-80e43ff30993?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="banner"
              />

              <div className="showcase-text">
                <p>Urban Oasis</p>
                <span>Luxury Townhouse Development</span>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} onClick={clickHandler}>
            <div className="showcase">
              <img
                src={
                  " https://plus.unsplash.com/premium_photo-1664300611129-9acbed19485b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                }
                alt="banner"
              />

              <div className="showcase-text">
                <p>Urban Oasis</p>
                <span>Luxury Townhouse Development</span>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Design;
