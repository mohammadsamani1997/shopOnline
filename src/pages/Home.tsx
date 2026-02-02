import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import WhyUs from "../Components/WhyUs";
import Gallery from "../Components/Gallery";
import ContactSection from "../Components/ContactSection";
import Testimonials from "../Components/Testimonials";
import Footer from "../Components/Footer";
import styles from "../styles/Landing.module.css";

const Home: React.FC = () => {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <Gallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
