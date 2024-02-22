import Aboutus from "./components/aboutus/Aboutus";
import Banner from "./components/banner/banner";
import Navbar from "./components/navbar/Navbar";
import OurProject from "./components/ourproject/OurProject";
import ServiceOffer from "./components/serviceoffer/ServiceOffer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Aboutus />
      <OurProject />
      <ServiceOffer />
    </>
  );
}

export default App;
