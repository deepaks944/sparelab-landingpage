import { useEffect, useRef, useState } from "react";

function CountUp({ value, suffix = "" }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(
    () => typeof window === "undefined" || !("IntersectionObserver" in window),
  );
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return undefined;

    if (!("IntersectionObserver" in window)) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (!entry.isIntersecting) setCount(0);
      },
      { threshold: 0.5 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return undefined;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const duration = reducedMotion ? 0 : 1400;
    let frameId = 0;
    let startTime;

    const animate = (time) => {
      if (startTime === undefined) startTime = time;
      const progress =
        duration === 0 ? 1 : Math.min((time - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 4;

      setCount(Math.round(value * easedProgress));

      if (progress < 1) {
        frameId = window.requestAnimationFrame(animate);
      }
    };

    frameId = window.requestAnimationFrame(animate);
    return () => window.cancelAnimationFrame(frameId);
  }, [isVisible, value]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default CountUp;
