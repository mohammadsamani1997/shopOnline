import React, { useState } from 'react';
import styles from '../styles/Landing.module.css';
import { products } from '../assets/data';

const Gallery: React.FC = () => {
  const images = products.slice(0, 6).map(p => p.image);

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='40' height='30'><rect width='100%' height='100%' fill='#eee'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#bbb' font-size='6'>Loading</text></svg>`;
  const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const handleImgLoad = (i: number) => {
    setLoaded(prev => ({ ...prev, [i]: true }));
  };

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    if (!img.dataset.fallback) {
      img.dataset.fallback = '1';
      img.src = placeholder;
    }
  };

  return (
    <section className={styles.gallery}>
      <div className={styles.inner}>
        <h2 className={styles.sectionTitle}>Gallery</h2>
        <div className={styles.galleryGrid}>
          {images.map((src, i) => (
            <div
              key={i}
              className={styles.galleryItem}
              style={{ backgroundImage: `url("${placeholder}")` }}
            >
              <img
                src={src}
                alt={`gallery-${i}`}
                className={`${styles.galleryImage} ${loaded[i] ? styles.loaded : styles.loading}`}
                loading="lazy"
                width={400}
                height={300}
                onLoad={() => handleImgLoad(i)}
                onError={handleImgError}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;