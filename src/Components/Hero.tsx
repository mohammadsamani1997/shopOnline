import React from "react";
import styles from "../styles/Landing.module.css";
import { Link } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

const Hero: React.FC = () => {
  const carouselImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1577003833154-a92bbd0e1435?w=1200&h=500&fit=crop",
      alt: "Herbal Medicine",
      title: "Premium Herbal Products",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&h=500&fit=crop",
      alt: "Natural Wellness",
      title: "Natural Wellness Solutions",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=1200&h=500&fit=crop",
      alt: "Organic Products",
      title: "100% Organic & Pure",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1563236527-3422018f6b0e?w=1200&h=500&fit=crop",
      alt: "Health Benefits",
      title: "Proven Health Benefits",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64e1a?w=1200&h=500&fit=crop",
      alt: "Trusted Quality",
      title: "Trusted Since 2015",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1548365328-c9403f173b8d?w=1200&h=500&fit=crop",
      alt: "Expert Guidance",
      title: "Expert Herbal Guidance",
    },
  ];

  return (
    <>
      <ImageCarousel
        images={carouselImages}
        autoplay={true}
        autoplayInterval={5000}
      />
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.business}>
            Welcome to Darchin - Premium Herbal Medicine & Natural Wellness
          </h1>
          <p className={styles.tagline}>
            Discover authentic herbal remedies, natural supplements, and
            wellness products. Trusted quality since 2015.
          </p>
          <div className={styles.ctas}>
            <Link to="/services" className={styles.ctaPrimary}>
              Explore Products
            </Link>
            <Link to="/contact" className={styles.ctaGhost}>
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
