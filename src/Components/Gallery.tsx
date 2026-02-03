import React, { useState } from "react";
import styles from "../styles/Landing.module.css";

const Gallery: React.FC = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1577003833154-a92bbd0e1435?w=800&q=80",
      alt: "Dried Turmeric Root",
      title: "Premium Turmeric",
    },
    {
      src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
      alt: "Organic Ginger",
      title: "Fresh Ginger Root",
    },
    {
      src: "https://images.unsplash.com/photo-1587854692152-cbe660dbde0b?w=800&q=80",
      alt: "Herbal Tea Blend",
      title: "Herbal Tea Collection",
    },
    {
      src: "https://images.unsplash.com/photo-1563236527-3422018f6b0e?w=800&q=80",
      alt: "Healing Herbs",
      title: "Medicinal Herbs",
    },
    {
      src: "https://images.unsplash.com/photo-1599599810694-b5ac4dd64e1a?w=800&q=80",
      alt: "Natural Botanicals",
      title: "Pure Botanicals",
    },
    {
      src: "https://images.unsplash.com/photo-1548365328-c9403f173b8d?w=800&q=80",
      alt: "Organic Herbs",
      title: "Organic Collection",
    },
  ];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="30"><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#bbb" font-size="6">Loading</text></svg>`;
  const placeholder = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  const [loaded, setLoaded] = useState<Record<number, boolean>>({});

  const handleImgLoad = (i: number) => {
    setLoaded((prev) => ({ ...prev, [i]: true }));
  };

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    if (!img.dataset.fallback) {
      img.dataset.fallback = "1";
      img.src = placeholder;
    }
  };

  return (
    <section className={styles.gallery}>
      <div className={styles.galleryContainer}>
        <h2 className={styles.sectionTitle}>Our Herbs & Products</h2>
        <p className={styles.gallerySubtitle}>
          We are the independent choice for high quality, ethically sourced,
          organic botanicals
        </p>
        <div className={styles.galleryScroll}>
          {images.map((image, i) => (
            <div key={i} className={styles.galleryCard}>
              <div
                className={styles.galleryItem}
                style={{ backgroundImage: `url("${placeholder}")` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`${styles.galleryImage} ${
                    loaded[i] ? styles.loaded : styles.loading
                  }`}
                  loading="lazy"
                  width={500}
                  height={400}
                  onLoad={() => handleImgLoad(i)}
                  onError={handleImgError}
                />
              </div>
              <h3 className={styles.galleryCardTitle}>{image.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;


