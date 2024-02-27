import React from "react";
import CompanyInfo from "../components/companyinfo/CompanyInfo";
import OurMission from "../components/ourmission/OurMission";
import ServiceOffer from "../components/serviceoffer/ServiceOffer";
import AboutContact from "../components/aboutcontact/AboutContact";

function AboutPage() {
  return (
    <>
      <CompanyInfo />
      <OurMission />
      <ServiceOffer />
      <AboutContact />
    </>
  );
}

export default AboutPage;
