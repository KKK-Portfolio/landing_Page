import React from "react";
import ProjectInfo from "../components/ProjectInfo/ProjectInfo";
import ProjectShowcase from "../projectshowcase/ProjectShowcase";
import ServiceOffer from "../components/serviceoffer/ServiceOffer";
import AboutContact from "../components/aboutcontact/AboutContact";
import { motion } from "framer-motion";

function ProjectPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.05 }}
    >
      <ProjectInfo />
      <ProjectShowcase />
      <ServiceOffer />
      <AboutContact />
    </motion.div>
  );
}

export default ProjectPage;
