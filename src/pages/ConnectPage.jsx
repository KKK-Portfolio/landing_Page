import { Box } from "@mui/material";
import React from "react";
import ConnectInfo from "../components/Connectinfo/ConnectInfo";
import ContactUs from "../components/contactus/ContactUs";
import ServiceOffer from "../components/serviceoffer/ServiceOffer";
import ConnectProject from "../components/connectproject/ConnectProject";
import { motion } from "framer-motion";

function ConnectPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.05 }}
    >
      <ConnectInfo />
      <ContactUs />
      <ServiceOffer />
      <ConnectProject />
    </motion.div>
  );
}

export default ConnectPage;
