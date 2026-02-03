import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import WhyUs from "../Components/WhyUs";
import Gallery from "../Components/Gallery";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import ScrollScaleWrapper from "../Components/ScrollScaleWrapper";
import styles from "../styles/Landing.module.css";

const Home: React.FC = () => {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <ScrollScaleWrapper>
          <WhyUs />
        </ScrollScaleWrapper>
        <ScrollScaleWrapper>
          <Testimonials />
        </ScrollScaleWrapper>
        <ScrollScaleWrapper>
          <Gallery />
        </ScrollScaleWrapper>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
