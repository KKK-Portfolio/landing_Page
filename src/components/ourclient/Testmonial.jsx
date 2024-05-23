import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { Avatar, Box } from "@mui/material";
import axios from "./../../api/axios";

function Testmonial() {
  const [testmonials, setTestmonials] = useState([]);

  async function fetchTestmonials() {
    try {
      const res = await axios.get("api/v1/testimonials");
      // console.log(res.data);
      setTestmonials(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(testmonials);

  useEffect(() => {
    fetchTestmonials();
  }, []);

  return (
    <Box sx={{ padding: { xs: "20px", md: "50px 100px" }, background: "#fff" }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Autoplay, Navigation, A11y]}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {testmonials.length > 0 &&
          testmonials.map((testmonial) => (
            <SwiperSlide key={testmonial._id}>
              <Box sx={{ padding: "30px 50px" }}>
                <div className="avater-container">
                  <Avatar
                    alt="Remy Sharp"
                    src={`${process.env.REACT_APP_API_URL}api/v1/testimonials/${testmonial.profile.filename}`}
                    sx={{ width: 75, height: 75, marginRight: "20px" }}
                  />
                  <div>
                    <p className="name">{testmonial.name}</p>
                    <p className="position">{testmonial.company}</p>
                  </div>
                </div>
                <p className="testmonial-text">{testmonial.body}</p>
              </Box>
            </SwiperSlide>
          ))}
      </Swiper>
    </Box>
  );
}

export default Testmonial;
