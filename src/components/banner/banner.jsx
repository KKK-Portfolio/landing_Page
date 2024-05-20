import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bannerOne from "./../../assets/image/heroBanner.jpg";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "./../../api/axios";
import "./banner.css";

function DemoCarousel() {
  // const [images, setIm] = React.useState([]);

  const { isLoading, data } = useQuery("banner", () => {
    return axios.get("api/v1/banners/images");
  });

  // console.log(isLoading, data.data);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios.get("api/v1/banners/images");
  //     setData(result.data);
  //   };
  //   fetchData();
  // }, []);

  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Loading...
      </div>
    );
  }

  return (
    <div className="banner-container">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        swipeable={false}
      >
        {data.data.map((item) => (
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
          Contact our Kaung Kaday Kyawl Co,.Ltd for your business and
          construction project with confidence.
        </p>

        <Link to="/project">
          <button className="banner-btn">View Our Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default DemoCarousel;
