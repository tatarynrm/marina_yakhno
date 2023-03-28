import React from "react";
import "./Home.scss";
import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Services from "../../sections/Services/Services";
import Footer from "../../components/footer/Footer";
import Gallery from "../../sections/Gallery/Gallery";
const Home = () => {
  return (
    <>
      <Hero />
      {/* <About /> */}
      <Services />
      <Gallery />
      <Footer />
    </>
  );
};

export default Home;
