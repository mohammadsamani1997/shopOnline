import React from 'react';
import styles from '../styles/Landing.module.css';

const WhyUs: React.FC = () => {
  const bullets = [
    '10+ years of experience',
    'Fast, friendly service',
    'Trusted by local customers',
  ];

  return (
    <section className={styles.why}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Why Us</h2>
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
