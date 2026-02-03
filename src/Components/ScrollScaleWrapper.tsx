import React from "react";
import { useScrollScale } from "../hooks/useScrollScale";

interface ScrollScaleWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollScaleWrapper: React.FC<ScrollScaleWrapperProps> = ({
  children,
  className,
}) => {
  const ref = useScrollScale();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transition: "transform 0.8s ease, opacity 0.8s ease",
        transformOrigin: "center",
      }}
    >
      {children}
    </div>
  );
};

export default ScrollScaleWrapper;
