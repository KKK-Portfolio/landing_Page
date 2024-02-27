import React from "react";
import Aboutus from "./../components/aboutus/Aboutus";
import Banner from "./../components/banner/banner";
import ContactUs from "./../components/contactus/ContactUs";
import OurClient from "./../components/ourclient/OurClient";
import OurProject from "./../components/ourproject/OurProject";
import ServiceOffer from "./../components/serviceoffer/ServiceOffer";
import WhyToChooseUs from "./../components/whychoose/WhyToChooseUs";

function HomePage() {
  return (
    <>
      <Banner />
      <Aboutus />
      <OurProject />
      <ServiceOffer />
      <WhyToChooseUs />
      <OurClient />
      <ContactUs />
    </>
  );
}

export default HomePage;
