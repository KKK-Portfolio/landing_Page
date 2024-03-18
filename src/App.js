import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";
import AnimatedRoute from "./components/AnimatedRoute";

function App() {
  const [scrollY, setScrollY] = useState(0);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // console.log(window);

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
      <AnimatedRoute />
      <Footer />
    </Router>
  );
}

export default App;
