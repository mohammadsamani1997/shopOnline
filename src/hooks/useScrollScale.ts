import { useEffect, useRef } from "react";

export const useScrollScale = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.target instanceof HTMLElement) {
          const ratio = entry.intersectionRatio;
          // Scale from 0.85 (when out of view) to 1 (when fully in view)
          const scale = 0.85 + ratio * 0.15;
          const opacity = 0.7 + ratio * 0.3;
          
          entry.target.style.transform = `scale(${scale})`;
          entry.target.style.opacity = opacity.toString();
        }
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return ref;
};
