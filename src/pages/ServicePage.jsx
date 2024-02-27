import React from "react";
import ServiceInfo from "../components/serviceinfo/servieinfo";
import Servicedetail from "../components/servicedetail/servicedetail";
import OurProject from "../components/ourproject/OurProject";
import AboutContact from "../components/aboutcontact/AboutContact";

function ServicePage() {
  return (
    <>
      <ServiceInfo />
      <Servicedetail />
      <OurProject />
      <AboutContact />
    </>
  );
}

export default ServicePage;
