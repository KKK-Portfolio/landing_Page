import React, { useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import Testmonial from "./Testmonial";
import axios from "./../../api/axios";

import "./ourclient.css";

function OurClient() {
  const [clients, setClients] = useState([]);

  async function fetchClients() {
    try {
      const res = await axios.get("api/v1/logos/getAll");
      // console.log(res.data);
      setClients(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  // console.log(clients[0].filename);

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <>
      <Box
        sx={{ padding: { xs: "20px", md: "50px 100px" }, background: "#fff" }}
        className="backImage"
      >
        <p className="titles">Our Satified Clients</p>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
          labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore eiusmod tempor incididunt ut
          labore{" "}
        </p>
        <Grid container spacing={2} sx={{ paddingTop: "50px" }}>
          {clients.length > 0 &&
            clients.map((client) => (
              <Grid
                item
                xs={2}
                // md={2}
                className="logo"
                key={client._id}
                sx={{ background: "red" }}
              >
                <img
                  src={`https://kkk.otastechsolutions.com/api/v1/logos/${client.filename}`}
                  alt="client"
                />
              </Grid>
            ))}
        </Grid>
      </Box>
      <Box sx={{ paddingTop: "50px" }}>
        <Testmonial />
      </Box>
    </>
  );
}

export default OurClient;
