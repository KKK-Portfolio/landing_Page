import React from "react";
import ProjectBanner from "../components/projectbanner/ProjectBanner";
import ProjectPhoto from "../components/projectphoto/projectPhoto";
import SimilarProject from "../components/similarproject/SimilarProject";
import ServiceOffer from "../components/serviceoffer/ServiceOffer";
import AboutContact from "../components/aboutcontact/AboutContact";

function ProjectDetail() {
  return (
    <>
      <ProjectBanner />
      <ProjectPhoto />
      <SimilarProject />
      <ServiceOffer />
      <AboutContact />
    </>
  );
}

export default ProjectDetail;
