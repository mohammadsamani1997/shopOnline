import React from "react";
import styles from "../styles/Landing.module.css";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.business}>Welcome to Darchin  Premium Herbal Medicine & Natural Wellness</h1>
        <p className={styles.tagline}>Discover authentic herbal remedies, natural supplements, and wellness products. Trusted quality since 2015.</p>
        <div className={styles.ctas}>
          <Link to="/services" className={styles.ctaPrimary}>Explore Products</Link>
          <Link to="/contact" className={styles.ctaGhost}>Get in Touch</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
