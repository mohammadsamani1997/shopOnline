import React from "react";
import styles from "../styles/Landing.module.css";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.business}>Welcome to ShopCenter  Quality products at great prices</h1>
        <p className={styles.tagline}>Curated electronics, accessories and home essentials with reliable local support.</p>
        <div className={styles.ctas}>
          <Link to="/services" className={styles.ctaPrimary}>Our Services</Link>
          <Link to="/contact" className={styles.ctaGhost}>Contact Us</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
