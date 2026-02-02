import React, { useEffect, useState } from "react";
import styles from "../styles/Landing.module.css";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar?: string;
};

const Testimonials: React.FC = () => {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    fetch("/testimonials.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load testimonials");
        return res.json();
      })
      .then((data: Testimonial[]) => {
        if (mounted) {
          setItems(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (mounted) {
          setError(err.message || "Error");
          setLoading(false);
        }
      });
    return () => {
      mounted = false;
    };
  }, []);

  if (loading) return null;
  if (error) return null;

  return (
    <section className={styles.testimonials}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>What Our Customers Say</h2>
        <div className={styles.testGrid}>
          {items.map((t) => (
            <article key={t.id} className={styles.testCard}>
              <div className={styles.testHeader}>
                <img src={t.avatar} alt={t.name} className={styles.testAvatar} />
                <div>
                  <div className={styles.testName}>{t.name}</div>
                  <div className={styles.testRole}>{t.role}</div>
                </div>
              </div>
              <p className={styles.testQuote}>&quot;{t.quote}&quot;</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
