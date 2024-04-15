import { Box, Grid } from "@mui/material";
import React, { useRef } from "react";
import facebook from "./../../assets/image/facebook.png";
import tiktok from "./../../assets/image/tiktok.png";

import "./contactus.css";
import axios from "axios";
import Swal from "sweetalert2";

function ContactUs() {
  const nameref = useRef();
  const emailref = useRef();
  const messageref = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      company_name: nameref.current.value,
      email: emailref.current.value,
      about_project: messageref.current.value,
    };
    Swal.fire({
      title: "Loading...",
      allowOutsideClick: false,
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      const res = await axios.post(
        "https://kkk-pgh0.onrender.com/api/v1/contact-us/submit",
        data
      );
      console.log(res);
      Swal.close();
      Swal.fire({
        title: "Good job!",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      nameref.current.value = "";
      emailref.current.value = "";
      messageref.current.value = "";
    } catch (error) {
      console.log(error);
      Swal.close();
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
        allowOutsideClick: false,
        // showConfirmButton: false,
        onBeforeOpen: () => {
          Swal.showLoading();
        },
      });
    }
  };

  return (
    <Box sx={{ padding: { xs: "0", md: "50px 100px" }, background: "#E1E1E1" }}>
      <Grid
        container
        sx={{
          background: "#000",
          padding: "50px 0",
          borderRadius: { xs: "0", md: "50px" },
        }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="contact-container">
            <p className="text contact-header ">Contact Us</p>
            <span className="text contact-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
              labore
            </span>
            <p className="text contact-number">09 42 3623 353</p>
            <span className="text contact-text">Follow us on Social Media</span>
            <div>
              <a href="https://www.facebook.com/">
                <img src={facebook} alt="facebook" />
              </a>
              <a href="https://www.facebook.com/">
                <img src={tiktok} alt="tiktok" />
              </a>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <form className="contact-form">
            <input type="text" placeholder="Company Name" ref={nameref} />
            <input type="email" placeholder="Email" ref={emailref} />
            <textarea placeholder="Message" rows="8" ref={messageref} />

            <button className="contact-button" onClick={handleSubmit}>
              Contact Us
            </button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactUs;
