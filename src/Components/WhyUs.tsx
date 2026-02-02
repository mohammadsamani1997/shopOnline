import React from "react";
import styles from "../styles/Landing.module.css";

const WhyUs: React.FC = () => {
  const bullets = [
    "100% natural & organic herbs",
    "Certified quality & purity tested",
    "Trusted by 5,000+ families",
  ];

  return (
    <section className={styles.why}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Why Choose Darchin</h2>
        <ul className={styles.bullets}>
          {bullets.map((b, i) => (
            <li key={i} className={styles.bullet}>{b}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
