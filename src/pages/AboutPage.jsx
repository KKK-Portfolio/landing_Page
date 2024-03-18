import React from "react";
import CompanyInfo from "../components/companyinfo/CompanyInfo";
import OurMission from "../components/ourmission/OurMission";
import ServiceOffer from "../components/serviceoffer/ServiceOffer";
import AboutContact from "../components/aboutcontact/AboutContact";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.05 }}
    >
      <CompanyInfo />
      <OurMission />
      <ServiceOffer />
      <AboutContact />
    </motion.div>
  );
}

export default AboutPage;
