import { Box, Grid } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./footer.css";

function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const navlink = [
    { name: "Home", path: "/" },
    { name: "Service", path: "/service" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Project", path: "/project" },
  ];
  const goHome = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Box sx={{ padding: { xs: "20px", md: "0 100px" }, background: "#1C1C1C" }}>
      <Grid container>
        <Grid item xs={12} sm={6} sx={{ padding: { sx: "10px", md: "30px" } }}>
          <p className="texts footer-header">Our office</p>
          <p className="texts address">
            အမှတ်(၈၆)၊ ၁၄၄ရပ်ကွက်၊ တိုင်းတာမင်းကြီးလမ်း၊ <br />
            ဒဂုံမြို့သစ်တောင်ပိုင်း၊ ရန်ကုန်
          </p>

          <div className="map-container">
            <iframe
              title="map"
              width="100%"
              height="331px"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=16%C2%B053'07.5%22N%2096%C2%B014'59.8%22E+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ padding: { sx: "10px", md: "30px" } }}>
            <p className="texts footer-header">KKK Construction</p>
            <p className="texts address">
              Transforming visions into reality with expert design, renovation,
              construction, and steel structure services.
            </p>
            <Grid container>
              {navlink.map((link) => (
                <Grid item xs={6} sm={6} key={link.name}>
                  <span
                    className="link texts"
                    onClick={
                      link.path === location.pathname
                        ? goHome
                        : () => navigate(link.path)
                    }
                  >
                    {link.name}
                  </span>
                </Grid>
              ))}
              {/* <Grid item xs={6} sm={6}>
                <span className="texts link" onClick={goHome}>
                  Home
                </span>
              </Grid>
              <Grid item xs={6} sm={6}>
                <span
                  className="texts link"
                  onClick={() => navigate("/service")}
                >
                  Service
                </span>
              </Grid>
              <Grid item xs={6} sm={6}>
                <span className="texts link" onClick={() => navigate("/about")}>
                  About Us
                </span>
              </Grid>
              <Grid item xs={6} sm={6}>
                <span
                  className="texts link"
                  onClick={() => navigate("/contact")}
                >
                  Contact
                </span>
              </Grid>
              <Grid item xs={6} sm={6}>
                <span
                  className="texts link"
                  onClick={() => navigate("/service")}
                >
                  Project
                </span>
              </Grid> */}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
