import { Box } from "@mui/material";
import React from "react";
import ConnectInfo from "../components/Connectinfo/ConnectInfo";
import ContactUs from "../components/contactus/ContactUs";
import ServiceOffer from "../components/serviceoffer/ServiceOffer";
import ConnectProject from "../components/connectproject/ConnectProject";

function ConnectPage() {
  return (
    <Box>
      <ConnectInfo />
      <ContactUs />
      <ServiceOffer />
      <ConnectProject />
    </Box>
  );
}

export default ConnectPage;
