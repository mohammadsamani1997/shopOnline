import React from 'react';
import styles from '../styles/Landing.module.css';

const servicesData = [
  { id: 1, name: 'Haircut', desc: 'Classic and modern cuts', price: '300,000 IRR' },
  { id: 2, name: 'Beard Trim', desc: 'Neat lines and shaping', price: '150,000 IRR' },
  { id: 3, name: 'Shave', desc: 'Straight razor finish', price: '200,000 IRR' },
  { id: 4, name: 'Combo', desc: 'Cut + Beard + Finish', price: '420,000 IRR' },
];

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Services</h2>

        <div className={styles.servicesGrid}>
          {servicesData.map((s) => (
            <div key={s.id} className={styles.serviceCard}>
              <h3 className={styles.serviceName}>{s.name}</h3>
              <p className={styles.serviceDesc}>{s.desc}</p>
              <div className={styles.servicePrice}>{s.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
