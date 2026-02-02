import React from "react";
import styles from "../styles/Landing.module.css";

const servicesData = [
  { id: 1, name: "Turmeric & Ginger", desc: "Anti-inflammatory herbal blend for joint health and immunity", price: "45,000 IRR" },
  { id: 2, name: "Herbal Tea Collection", desc: "Organic loose leaf teas for digestion and relaxation", price: "35,000 IRR" },
  { id: 3, name: "Golden Honey Mix", desc: "Raw honey infused with medicinal herbs", price: "120,000 IRR" },
  { id: 4, name: "Wellness Capsules", desc: "Natural supplement blend for energy and vitality", price: "85,000 IRR" },
];

const Services: React.FC = () => {
  return (
    <section className={styles.services}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Featured Products</h2>

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
