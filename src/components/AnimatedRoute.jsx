import React from "react";
import HomePage from "./../pages/HomePage";
import ProjectDetail from "./../pages/ProjectDetail";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Constuction from "./ProjectDetail/Constuction";
import Steel from "./ProjectDetail/Steel";
import Design from "./ProjectDetail/Design";
import Renovation from "./ProjectDetail/Renovation";
import Loading from "./Loading";
const LazyAbout = React.lazy(() => import("./../pages/AboutPage"));
const LazyProject = React.lazy(() => import("./../pages/ProjectPage"));
const LazyService = React.lazy(() => import("./../pages/ServicePage"));
const LazyConnect = React.lazy(() => import("./../pages/ConnectPage"));

function AnimatedRoute() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route
            path="/project"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyProject />
              </React.Suspense>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route
            path="/service"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyService />
              </React.Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <React.Suspense fallback={<Loading />}>
                <LazyConnect />
              </React.Suspense>
            }
          />
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
