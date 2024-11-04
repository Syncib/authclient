import React, { useEffect, useRef, useState } from "react";
import "../styles/styles.css";

const SlideFadeIn = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`slide-fade-in ${isVisible ? "visible" : ""}`}
    >
      {children}
    </div>
  );
};

export default SlideFadeIn;
