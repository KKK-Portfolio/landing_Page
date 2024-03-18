import React from "react";
import ServiceInfo from "../components/serviceinfo/servieinfo";
import Servicedetail from "../components/servicedetail/servicedetail";
import OurProject from "../components/ourproject/OurProject";
import AboutContact from "../components/aboutcontact/AboutContact";
import { motion } from "framer-motion";

function ServicePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.05 }}
    >
      <ServiceInfo />
      <Servicedetail />
      <OurProject />
      <AboutContact />
    </motion.div>
  );
}

export default ServicePage;
