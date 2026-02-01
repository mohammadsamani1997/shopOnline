import React from 'react';
import Navbar from '../Components/Navbar';
import  Gallery  from '../Components/Gallery';
import Footer from '../Components/Footer';

const GalleryPage = () => (
  <div className="app-root">
    <Navbar />
    <main>
      <Gallery />
    </main>
    <Footer />
  </div>
);

export default GalleryPage;