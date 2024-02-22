import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bannerOne from "./../../assets/image/heroBanner.jpg";
import bannerTwo from "./../../assets/image/bannertwo.jpg";
import "./banner.css";

class DemoCarousel extends Component {
  render() {
    return (
      <div className="banner-container">
        <Carousel showThumbs={false} showIndicators={false}>
          <div className="carousel-item">
            <img src={bannerOne} alt="banner" class="center" />
          </div>
          <div className="carousel-item">
            <img src={bannerTwo} alt="banner" class="center" />
          </div>
        </Carousel>
        <div className="carousel-text">
          <p>
            Now to make dreams come true <br />
            With the good million company <br />
            Let's work together
          </p>
          <button className="banner-btn">Connect With Us</button>
        </div>
      </div>
    );
  }
}

export default DemoCarousel;
