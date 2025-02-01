import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bannerOne from "./../../assets/image/giphy.gif";
import { NavLink } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "./../../api/axios";
import Loading from "./../Loading";
import "./banner.css";

import banner1 from "./../../assets/image/Banner/city.avif";
import banner2 from "./../../assets/image/Banner/jc-gellidon-Khqmo4T-rs0-unsplash.jpg";
import banner3 from "./../../assets/image/Banner/nathan-waters-j7q-Z9DV3zw-unsplash.jpg";
import banner4 from "./../../assets/image/Banner/shea-rouda-Vtl6cOhO87Y-unsplash.jpg";

function DemoCarousel() {
  // const [images, setIm] = React.useState([]);

  const data = [banner3, banner1, banner2, banner4];

  return (
    <div className="banner-container">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        swipeable={false}
      >
        {data &&
          data.map((item, index) => (
            <div className="carousel-item" key={index}>
              <img src={item} alt="banner" className="center" />
            </div>
          ))}
      </Carousel>
      <div className="carousel-text">
        <p>
          Contact our Kaung Kaday Kyawl Co,.Ltd for your business and
          construction project with confidence.
        </p>

        <NavLink
          to="/project"
          className="banner-btn"
          style={{ textDecoration: "none", color: "#fff" }}
        >
          View Our Projects
        </NavLink>
      </div>
    </div>
  );
}

export default DemoCarousel;
