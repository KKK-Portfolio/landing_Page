import React from "react";
import ProjectBanner from "../components/projectbanner/ProjectBanner";
import ProjectPhoto from "../components/projectphoto/projectPhoto";
import SimilarProject from "../components/similarproject/SimilarProject";
import ServiceOffer from "../components/serviceoffer/ServiceOffer";
import AboutContact from "../components/aboutcontact/AboutContact";
import { motion } from "framer-motion";

function ProjectDetail() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.05 }}
    >
      <ProjectBanner />
      <ProjectPhoto />
      <SimilarProject />
      <ServiceOffer />
      <AboutContact />
    </motion.div>
  );
}

export default ProjectDetail;
