import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Navigate, Route, Routes } from "react-router-dom";

const NavBar = lazy(() => import("./components/NavBar.jsx"));
const HeroSection = lazy(() => import("./components/HeroSection.jsx"));
const CountersSection = lazy(() => import("./components/CountersSection.jsx"));
const SupplierBrandsSection = lazy(
  () => import("./components/SupplierBrandsSection.jsx"),
);
const ReviewsSection = lazy(() => import("./components/ReviewsSection.jsx"));
const BenefitsSection = lazy(() => import("./components/BenefitsSection.jsx"));
const CategoriesSection = lazy(
  () => import("./components/CategoriesSection.jsx"),
);
const AudienceSection = lazy(() => import("./components/AudienceSection.jsx"));
const MarketplaceDetailsSection = lazy(
  () => import("./components/MarketplaceDetailsSection.jsx"),
);
const SourcingFormSection = lazy(
  () => import("./components/SourcingFormSection.jsx"),
);
const FinalCtaSection = lazy(() => import("./components/FinalCtaSection.jsx"));
const FooterSection = lazy(() => import("./components/FooterSection.jsx"));
const BackToTopButton = lazy(() => import("./components/BackToTopButton.jsx"));
const AuthPage = lazy(() => import("./components/AuthPage.jsx"));

function PageLoader() {
  return (
    <div
      className="app-loader"
      role="status"
      aria-live="polite"
      aria-label="Loading SpareLab"
    >
      <span className="app-loader-mark" aria-hidden="true">
        S
      </span>
      <span className="app-loader-spinner" aria-hidden="true" />
      <span className="app-loader-label">Loading SpareLab</span>
    </div>
  );
}

const THEME_STORAGE_KEY = "theme";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.localStorage.getItem(THEME_STORAGE_KEY) === "dark",
  );
  const [themeCarId, setThemeCarId] = useState(null);
  const themeCarSequence = useRef(0);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    const nextIsDarkMode = !isDarkMode;
    const nextCarId = ++themeCarSequence.current;
    window.localStorage.setItem(
      THEME_STORAGE_KEY,
      nextIsDarkMode ? "dark" : "light",
    );
    const applyTheme = () => {
      document.documentElement.classList.toggle("dark", nextIsDarkMode);
      flushSync(() => {
        setIsDarkMode(nextIsDarkMode);
        setThemeCarId(nextCarId);
      });
    };

    if (document.startViewTransition) {
      document.startViewTransition(applyTheme).finished.then(
        () =>
          setThemeCarId((currentId) =>
            currentId === nextCarId ? null : currentId,
          ),
        () =>
          setThemeCarId((currentId) =>
            currentId === nextCarId ? null : currentId,
          ),
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
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
                <HeroSection />
                <CountersSection />
                <SupplierBrandsSection />
                <ReviewsSection />
                <BenefitsSection />
                <CategoriesSection />
                <AudienceSection />
                <MarketplaceDetailsSection />
                <SourcingFormSection />
                <FinalCtaSection />
                <FooterSection />
                <BackToTopButton />
              </>
            }
          />
          <Route
            path="/account"
            element={
              <AuthPage isDarkMode={isDarkMode} onToggleTheme={toggleTheme} />
            }
          />
          <Route
            path="/signin"
            element={<Navigate to="/account?mode=signin" replace />}
          />
          <Route
            path="/signup"
            element={<Navigate to="/account?mode=signup" replace />}
          />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
