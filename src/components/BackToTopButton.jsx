import { useEffect, useState } from "react";

function BackToTopButton() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frameId = 0;
    const updateScrollProgress = () => {
      frameId = 0;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress =
        scrollableHeight > 0
          ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100))
          : 0;

      setProgress(scrollProgress);
      setVisible(window.scrollY > 400);
    };
    const scheduleUpdate = () => {
      if (!frameId) frameId = window.requestAnimationFrame(updateScrollProgress);
    };

    updateScrollProgress();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      aria-label={`Back to top. Page ${Math.round(progress)}% scrolled`}
      onClick={scrollToTop}
      tabIndex={visible ? 0 : -1}
      className={`glass-panel fixed bottom-5 right-5 z-40 flex size-12 items-center justify-center rounded-full border text-emerald-800 shadow-lg transition-[opacity,transform,background-color] duration-300 motion-reduce:transition-none hover:-translate-y-1 hover:bg-white/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:text-emerald-300 dark:hover:bg-slate-800/80 sm:bottom-7 sm:right-7 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 48 48"
        className="pointer-events-none absolute inset-0 size-full -rotate-90"
      >
        <circle
          cx="24"
          cy="24"
          r="21"
          fill="none"
          stroke="currentColor"
          strokeOpacity="0.16"
          strokeWidth="2"
        />
        <circle
          cx="24"
          cy="24"
          r="21"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={2 * Math.PI * 21}
          strokeDashoffset={2 * Math.PI * 21 * (1 - progress / 100)}
          className="transition-[stroke-dashoffset] duration-150 ease-out"
        />
      </svg>
      <svg
        aria-hidden="true"
        viewBox="0 0 20 20"
        fill="none"
        className="size-5"
      >
        <path
          d="m5 11 5-5 5 5M10 6v9"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default BackToTopButton;
