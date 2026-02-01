import React from 'react';
import Navbar from '../Components/Navbar';
import WhyUs from '../Components/WhyUs';
import Footer from '../Components/Footer';

const WhyUsPage = () => (
  <div className="app-root">
    <Navbar />
    <main>
      <WhyUs />
    </main>
    <Footer />
  </div>
);

export default WhyUsPage;