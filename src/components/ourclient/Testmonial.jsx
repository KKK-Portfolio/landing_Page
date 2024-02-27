import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Avatar, Grid } from "@mui/material";
import personOne from "./../../assets/image/personOne.png";
import personTwo from "./../../assets/image/personTwo.png";

class Testmonial extends Component {
  render() {
    return (
      <div className="banner-container">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showIndicators={false}
          showStatus={false}
        >
          <Grid container className="testmonial-item">
            <Grid item xs={12} sm={6} sx={{ padding: "0 100px" }}>
              <div className="avater-container">
                <Avatar
                  alt="Remy Sharp"
                  src={personOne}
                  sx={{ width: 75, height: 75, marginRight: "20px" }}
                />
                <div>
                  <p className="name">Zaw Zaw Aung</p>
                  <p className="position">Managing Director of M</p>
                </div>
              </div>
              <p className="testmonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
                labore Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore eiusmod tempor
                incididunt ut labore Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </p>
            </Grid>

            <Grid item xs={12} sm={6} sx={{ padding: "0 100px" }}>
              <div className="avater-container">
                <Avatar
                  alt="Remy Sharp"
                  src={personTwo}
                  sx={{ width: 75, height: 75, marginRight: "20px" }}
                />
                <div>
                  <p className="name">Nwe Nwe Ohn</p>
                  <p className="position"> Director of TYEM</p>
                </div>
              </div>
              <p className="testmonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
                labore Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore eiusmod tempor ut
                labore
              </p>
            </Grid>
          </Grid>
        </Carousel>
      </div>
    );
  }
}

export default Testmonial;
