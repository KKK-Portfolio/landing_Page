import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bannerOne from "./../../assets/image/heroBanner.jpg";
import { Link } from "react-router-dom";
import "./banner.css";
import axios from "./../../api/axios";

function DemoCarousel() {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("api/v1/banners/images");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="banner-container">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        swipeable={false}
      >
        {data.map((item) => (
          <div className="carousel-item" key={item._id}>
            <img
              src={
                `${process.env.REACT_APP_API_URL}api/v1/banners/${item.filename}` ||
                bannerOne
              }
              alt="banner"
              className="center"
            />
          </div>
        ))}
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

export default DemoCarousel;
