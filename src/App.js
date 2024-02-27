import Navbar from "./components/navbar/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/footer/Footer";
import ProjectPage from "./pages/ProjectPage";
import ServicePage from "./pages/ServicePage";
import { useEffect, useState } from "react";
import ProjectDetail from "./pages/ProjectDetail";
import ConnectPage from "./pages/ConnectPage";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    console.log(window);

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <Router>
      <Navbar scrollY={scrollY} scrollToTop={scrollToTop} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ConnectPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
