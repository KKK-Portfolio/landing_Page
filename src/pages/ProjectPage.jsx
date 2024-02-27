import React from "react";
import ProjectInfo from "../components/ProjectInfo/ProjectInfo";
import ProjectShowcase from "../projectshowcase/ProjectShowcase";
import ServiceOffer from "../components/serviceoffer/ServiceOffer";
import AboutContact from "../components/aboutcontact/AboutContact";

function ProjectPage() {
  return (
    <>
      <ProjectInfo />
      <ProjectShowcase />
      <ServiceOffer />
      <AboutContact />
    </>
  );
}

export default ProjectPage;
