import React, { useState, useEffect } from "react";
import styles from "../styles/ImageCarousel.module.css";

interface CarouselProps {
  images: {
    id: number;
    src: string;
    alt: string;
    title?: string;
  }[];
  autoplay?: boolean;
  autoplayInterval?: number;
}

const ImageCarousel: React.FC<CarouselProps> = ({
  images,
  autoplay = true,
  autoplayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(autoplay);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [isAutoplay, images.length, autoplayInterval]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoplay(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsAutoplay(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsAutoplay(false);
  };

  return (
    <div className={styles.carousel}>
      <div className={styles.carouselContainer}>
        <div
          className={styles.carouselTrack}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image) => (
            <div key={image.id} className={styles.slide}>
              <img src={image.src} alt={image.alt} />
              {image.title && (
                <div className={styles.slideTitle}>{image.title}</div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className={`${styles.navButton} ${styles.prevButton}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          className={`${styles.navButton} ${styles.nextButton}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ❯
        </button>
      </div>

      {/* Dot Indicators */}
      <div className={styles.dotsContainer}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Autoplay Toggle */}
      <button
        className={styles.autoplayToggle}
        onClick={() => setIsAutoplay(!isAutoplay)}
        title={isAutoplay ? "Pause autoplay" : "Resume autoplay"}
      >
        {isAutoplay ? "⏸" : "▶"}
      </button>
    </div>
  );
};

export default ImageCarousel;
