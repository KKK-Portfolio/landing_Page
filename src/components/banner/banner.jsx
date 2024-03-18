import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bannerOne from "./../../assets/image/heroBanner.jpg";
import bannerTwo from "./../../assets/image/bannertwo.jpg";
import "./banner.css";
import { Link } from "react-router-dom";

class DemoCarousel extends Component {
  render() {
    return (
      <div className="banner-container">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          swipeable={false}
        >
          <div className="carousel-item">
            <img src={bannerOne} alt="banner" className="center" />
          </div>
          <div className="carousel-item">
            <img src={bannerTwo} alt="banner" className="center" />
          </div>
        </Carousel>
        <div className="carousel-text">
          <p>
            Now to make dreams come true <br />
            With the good million company <br />
            Let's work together
          </p>

          <Link to="/project">
            <button className="banner-btn">View Our Projects</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default DemoCarousel;
