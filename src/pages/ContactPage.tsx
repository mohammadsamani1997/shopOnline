import React from 'react';
import Navbar from '../Components/Navbar';
import ContactSection from '../Components/ContactSection';
import Footer from '../Components/Footer';

const ContactPage = () => (
  <div className="app-root">
    <Navbar />
    <main>
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default ContactPage;