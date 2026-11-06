import { useRef, useState } from "react";
import { flushSync } from "react-dom";
import NavBar from "./components/NavBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import CountersSection from "./components/CountersSection.jsx";
import SupplierBrandsSection from "./components/SupplierBrandsSection.jsx";
import BenefitsSection from "./components/BenefitsSection.jsx";
import CategoriesSection from "./components/CategoriesSection.jsx";
import AudienceSection from "./components/AudienceSection.jsx";
import SourcingFormSection from "./components/SourcingFormSection.jsx";
import FinalCtaSection from "./components/FinalCtaSection.jsx";
import FooterSection from "./components/FooterSection.jsx";
import BackToTopButton from "./components/BackToTopButton.jsx";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [themeCarId, setThemeCarId] = useState(null);
  const themeCarSequence = useRef(0);

  const toggleTheme = () => {
    const nextIsDarkMode = !isDarkMode;
    const nextCarId = ++themeCarSequence.current;
    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", nextIsDarkMode);
      flushSync(() => {
        setIsDarkMode(nextIsDarkMode);
        setThemeCarId(nextCarId);
      });
    };

    if (document.startViewTransition) {
      document.startViewTransition(applyTheme).finished.then(
        () => setThemeCarId((currentId) => currentId === nextCarId ? null : currentId),
        () => setThemeCarId((currentId) => currentId === nextCarId ? null : currentId),
      );
    } else {
      applyTheme();
    }
  };

  return (
    <div
      className={`${isDarkMode ? "dark" : ""} glass-page min-h-screen text-slate-950 transition-colors duration-300 dark:text-slate-100`}
    >
      {themeCarId !== null && (
        <svg
          key={themeCarId}
          aria-hidden="true"
          className="theme-car"
          viewBox="0 0 88 48"
          fill="none"
          onAnimationEnd={() =>
            setThemeCarId((currentId) =>
              currentId === themeCarId ? null : currentId,
            )
          }
        >
          <path
            d="M17 29.5 22.4 16c.9-2.2 3-3.6 5.4-3.6h26.7c2.2 0 4.2 1.2 5.3 3.2l7.2 14H17Z"
            fill="#10b981"
            stroke="#064e3b"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="m27.2 16.3-4 10.1h19.3V14.6H28.8c-.7 0-1.3.6-1.6 1.7Zm18.3-1.7v11.8h18.2l-5.8-11.2a1.2 1.2 0 0 0-1.1-.6H45.5Z"
            fill="#d1fae5"
          />
          <path
            d="M13 29.5c0-2.2 1.8-4 4-4h52c3.9 0 7 3.1 7 7v3H13v-6Z"
            fill="#059669"
            stroke="#064e3b"
            strokeWidth="2"
          />
          <circle cx="27" cy="35" r="6" fill="#0f172a" />
          <circle cx="27" cy="35" r="2.5" fill="#d1d5db" />
          <circle cx="63" cy="35" r="6" fill="#0f172a" />
          <circle cx="63" cy="35" r="2.5" fill="#d1d5db" />
        </svg>
      )}
      <NavBar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
      <HeroSection />
      <CountersSection />
      <SupplierBrandsSection />
      <BenefitsSection />
      <CategoriesSection />
      <AudienceSection />
      <SourcingFormSection />
      <FinalCtaSection />
      <FooterSection />
      <BackToTopButton />
    </div>
  );
}

export default App;
