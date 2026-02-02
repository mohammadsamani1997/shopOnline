import React from "react";
import styles from "../styles/Landing.module.css";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
};

const data: Testimonial[] = [
  {
    id: 1,
    name: "Sara Mohammadi",
    role: "Product Manager",
    quote: "High-quality products and exceptional customer service. Fast delivery and very reliable.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80"
  },
  {
    id: 2,
    name: "Ali Rezaei",
    role: "Software Engineer",
    quote: "Great selection and excellent value. The team answered all my questions promptly.",
    avatar: "https://images.unsplash.com/photo-1545996124-1b7d9d6f0a3f?w=100&q=80"
  },
  {
    id: 3,
    name: "Fatemeh Ahmadi",
    role: "Designer",
    quote: "Products arrived in perfect condition. Packaging and presentation felt very premium.",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&q=80"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
        <div className={styles.testGrid}>
          {data.map(t => (
            <article key={t.id} className={styles.testCard}>
              <div className={styles.testHeader}>
                <img src={t.avatar} alt={t.name} className={styles.testAvatar} />
                <div>
                  <div className={styles.testName}>{t.name}</div>
                  <div className={styles.testRole}>{t.role}</div>
                </div>
              </div>
              <p className={styles.testQuote}>"{t.quote}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
