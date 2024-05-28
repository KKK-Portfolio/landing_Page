import React from "react";
import HomePage from "./../pages/HomePage";
import AboutPage from "./../pages/AboutPage";
import ProjectPage from "./../pages/ProjectPage";
import ServicePage from "./../pages/ServicePage";
import ProjectDetail from "./../pages/ProjectDetail";
import ConnectPage from "./../pages/ConnectPage";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Constuction from "./ProjectDetail/Constuction";
import Steel from "./ProjectDetail/Steel";
import Design from "./ProjectDetail/Design";
import Renovation from "./ProjectDetail/Renovation";

function AnimatedRoute() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/contact" element={<ConnectPage />} />
          <Route path="/construction" element={<Constuction />} />
          <Route path="/design" element={<Design />} />
          <Route path="/steel" element={<Steel />} />
          <Route path="/renovation" element={<Renovation />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default AnimatedRoute;
