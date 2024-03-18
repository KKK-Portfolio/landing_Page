import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import { Avatar, Grid } from "@mui/material";
import personOne from "./../../assets/image/personOne.png";
import personTwo from "./../../assets/image/personTwo.png";

class Testmonial extends Component {
  render() {
    return (
      <div className="banner-container">
        {/* <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showIndicators={false}
          showStatus={false}
          centerSlidePercentage={50}
        >
          <Grid container className="testmonial-item">
            <Grid item xs={12} sm={6} sx={{ padding: "0 10px" }}>
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

            <Grid item xs={12} sm={6} sx={{ padding: "0 10px" }}>
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
        </Carousel> */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Grid item xs={12} sm={6} sx={{ padding: "0 10px" }}>
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
          </SwiperSlide>
          <SwiperSlide>
            <Grid item xs={12} sm={6} sx={{ padding: "0 10px" }}>
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
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
}

export default Testmonial;
