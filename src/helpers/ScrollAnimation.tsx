import React, {
  useEffect,
  type FC,
  type ReactNode,
  useRef,
  useState,
} from "react";
import s from "./scrollAnimation.module.css";

interface ScrollAnimationsProps {
  children: ReactNode;
}

const ScrollAnimations: FC<ScrollAnimationsProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries: { isIntersecting: any }[]) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`${s.animation} ${isVisible ? s.visible : ""}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimations;
