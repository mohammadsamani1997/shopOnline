import React from 'react';
import Navbar from '../Components/Navbar';
import Services from '../Components/Services';
import Footer from '../Components/Footer';

const ServicesPage = () => (
  <div className="app-root">
    <Navbar />
    <main>
      <Services />
    </main>
    <Footer />
  </div>
);

export default ServicesPage;