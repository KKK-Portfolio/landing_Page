import { Box, Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import FacebookIcon from "@mui/icons-material/Facebook";

import "./contactus.css";
import axios from "./../../api/axios";
import Swal from "sweetalert2";

function ContactUs() {
  const nameref = useRef();
  const emailref = useRef();
  const phoneref = useRef();
  const messageref = useRef();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [officeNumber, setOfficeNumber] = useState("");

  async function fetchContents() {
    try {
      const res = await axios.get("api/v1/about-us");
      console.log(res.data);
      setPhoneNumber(res.data.aboutUs[0].phone_number);
      setOfficeNumber(res.data.aboutUs[0].office_number);
      // console.log("phone", phoneNumber);
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Do you want to continue",
        icon: "error",
        confirmButtonText: "Cool",
      });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      company_name: nameref.current.value,
      phone: phoneref.current.value,
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
      const res = await axios.post("api/v1/contact-us/submit", data);
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
      phoneNumber.current.value = "";
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

  useEffect(() => {
    fetchContents();
  }, []);

  return (
    <Box sx={{ padding: { sm: "0", md: "50px 100px" }, background: "#E1E1E1" }}>
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
          <Box
            className="contact-container"
            sx={{
              padding: { xs: "0 20px", md: "0px 50px", lg: "0px 100px" },
            }}
          >
            <p className="text contact-header ">Contact Us</p>
            <span className="text contact-text">
              Our experts are just a call or email away. We look forward to
              discussing how we can support your next steel structure, building,
              or renovation project.
            </span>
            <Box sx={{ padding: "10px 0" }}>
              <p className="text contact-number">{phoneNumber}</p>
              <p className="text contact-number">{officeNumber}</p>
            </Box>
            <span className="text contact-text">Follow us on Social Media</span>
            <div>
              <a href="https://www.facebook.com/kaungkadaykyawl">
                <FacebookIcon sx={{ color: "#007fff", fontSize: "35px" }} />
              </a>
              <a href="http://t.me/kaungkadaykyawl">
                <TelegramIcon sx={{ color: "#007fff", fontSize: "35px" }} />
              </a>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              padding: { xs: "20px", md: "0px 50px", lg: "0px 100px" },
            }}
          >
            <form className="contact-form">
              <input type="text" placeholder="Company Name" ref={nameref} />
              <input type="email" placeholder="Email" ref={emailref} />
              <input type="text" placeholder="Phone Number" ref={phoneref} />
              <textarea placeholder="Message" rows="5" ref={messageref} />

              <button className="contact-button" onClick={handleSubmit}>
                Contact Us
              </button>
            </form>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactUs;
