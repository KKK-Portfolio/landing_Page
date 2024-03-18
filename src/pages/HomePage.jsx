import React from "react";
import Aboutus from "./../components/aboutus/Aboutus";
import Banner from "./../components/banner/banner";
import ContactUs from "./../components/contactus/ContactUs";
import OurClient from "./../components/ourclient/OurClient";
import OurProject from "./../components/ourproject/OurProject";
import ServiceOffer from "./../components/serviceoffer/ServiceOffer";
import WhyToChooseUs from "./../components/whychoose/WhyToChooseUs";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.05 }}
    >
      <Banner />
      <Aboutus />
      <OurProject />
      <ServiceOffer />
      <WhyToChooseUs />
      <OurClient />
      <ContactUs />
    </motion.div>
  );
}

export default HomePage;
