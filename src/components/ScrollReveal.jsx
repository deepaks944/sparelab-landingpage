import { useEffect, useRef } from "react";

const revealElements = new Set();
let scheduledFrame = 0;

function updateActiveReveal() {
  scheduledFrame = 0;
  const viewportCenter = window.innerHeight / 2;
  const viewportHeight = window.innerHeight;
  let activeElement = null;
  let closestDistance = Infinity;

  revealElements.forEach((element) => {
    const bounds = element.getBoundingClientRect();
    const isInViewport = bounds.bottom > 0 && bounds.top < window.innerHeight;
    const center = bounds.top + bounds.height / 2;
    const distance = Math.abs(center - viewportCenter);
    const fadeDistance = viewportHeight * 0.85 + bounds.height / 2;
    const emphasis = isInViewport
      ? Math.max(0, 1 - distance / fadeDistance)
      : 0;
    element.style.setProperty(
      "--scroll-opacity",
      (0.32 + emphasis * 0.68).toFixed(3),
    );
    if (isInViewport && distance < closestDistance) {
      activeElement = element;
      closestDistance = distance;
    }
  });

  revealElements.forEach((element) => {
    element.classList.toggle("is-visible", element === activeElement);
  });
}

function scheduleActiveReveal() {
  if (!scheduledFrame) {
    scheduledFrame = window.requestAnimationFrame(updateActiveReveal);
  }
}

function ScrollReveal({ children, className = "", delay = 0 }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    revealElements.add(element);
    if (revealElements.size === 1) {
      window.addEventListener("scroll", scheduleActiveReveal, {
        passive: true,
      });
      window.addEventListener("resize", scheduleActiveReveal);
    }
    scheduleActiveReveal();

    return () => {
      revealElements.delete(element);
      if (revealElements.size === 0) {
        window.removeEventListener("scroll", scheduleActiveReveal);
        window.removeEventListener("resize", scheduleActiveReveal);
        if (scheduledFrame) {
          window.cancelAnimationFrame(scheduledFrame);
          scheduledFrame = 0;
        }
      } else {
        scheduleActiveReveal();
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;
