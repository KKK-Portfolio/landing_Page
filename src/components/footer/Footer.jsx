import { Box, Grid } from "@mui/material";
import React from "react";

import "./footer.css";

function Footer() {
  return (
    <Box sx={{ padding: "0 100px", background: "#1C1C1C" }}>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <p className="texts footer-header">Our office</p>
          <p className="texts address">
            No. 1, 1st Floor, 6th Street,
            <br /> Lanmadaw, Yangon
          </p>

          <div className="map-container">
            <iframe
              title="map"
              width="100%"
              height="231"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=231&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(OTAS)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
            {/* <iframe
              id="map"
              width="100%"
              height="231"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=231&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(OTAS)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe> */}
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ padding: "0 80px" }}>
            <p className="texts footer-header">Logo</p>
            <p className="texts address">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
              labore{" "}
            </p>
            <Grid container>
              <Grid item xs={6} sm={6}>
                <span className="texts link">Home</span>
              </Grid>
              <Grid item xs={6} sm={6}>
                <span className="texts link">Service</span>
              </Grid>
              <Grid item xs={6} sm={6}>
                <span className="texts link">About Us</span>
              </Grid>
              <Grid item xs={6} sm={6}>
                <span className="texts link">Contact</span>
              </Grid>
              <Grid item xs={6} sm={6}>
                <span className="texts link">Project</span>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
