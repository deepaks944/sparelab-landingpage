import { useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";
import AccountMenu from "./AccountMenu.jsx";
import trackEvent from "../utils/analytics.js";

const links = [
  { label: "How it works", href: "#buyer-flow" },
  { label: "For buyers", href: "#buyers" },
  { label: "For vendors", href: "#vendor-signup" },
  { label: "Trust", href: "#trust" },
  { label: "FAQs", href: "#faq" },
];

function Brand() {
  return (
    <a
      href="#home"
      aria-label="SpareLab home"
      className="flex shrink-0 items-center gap-1.5"
    >
      <span className="flex size-5 items-center justify-center rounded-full bg-emerald-600">
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          className="size-3.5"
        >
          <path
            d="M5.2 4.1h5.6v2H7.3v1.1h3.5v4.7H4.6v-2h4.1V8.8H5.2V4.1Z"
            fill="white"
          />
          <circle cx="12.1" cy="3.9" r="1.1" fill="white" />
        </svg>
      </span>
      <span className="text-[10px] font-extrabold tracking-[-0.06em] text-slate-800 dark:text-slate-100">
        SPARELAB
      </span>
    </a>
  );
}

function NavBar({ isDarkMode, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 mx-auto w-[calc(100%-2rem)] max-w-[1360px] pt-3 sm:w-[calc(100%-3rem)] sm:pt-5">
      <nav
        aria-label="Main navigation"
        className="glass-panel flex min-h-11 items-center justify-between rounded-full border px-4 transition-[background-color,border-color,box-shadow] duration-300 sm:px-6"
      >
        <Brand />

        <div className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() =>
                trackEvent("navigation_link_click", { label: link.label })
              }
              className="relative whitespace-nowrap py-1 text-[14px] font-medium text-slate-600 transition-colors hover:text-emerald-700 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-emerald-600 after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none dark:text-slate-300 dark:hover:text-emerald-400 dark:after:bg-emerald-400"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <a
            href="#request"
            onClick={() =>
              trackEvent("part_request_cta_click", { location: "navigation" })
            }
            className="relative py-1 text-[14px] font-medium text-slate-700 transition-colors hover:text-emerald-700 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-emerald-600 after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 motion-reduce:after:transition-none dark:text-slate-200 dark:hover:text-emerald-400 dark:after:bg-emerald-400"
          >
            Request a part
          </a>
          <AccountMenu />
          <ThemeToggle isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <AccountMenu />
          <button
            type="button"
            id="mobile-navigation-toggle"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-controls="mobile-navigation-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-8 items-center justify-center gap-1.5 rounded-full px-2 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {menuOpen ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="size-4"
              >
                <path
                  d="m5 5 10 10M15 5 5 15"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                className="size-4"
              >
                <path
                  d="M3 5.5h14M3 10h14M3 14.5h14"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            )}
            <span className="text-[11px] font-medium">
              {menuOpen ? "Close" : "Menu"}
            </span>
          </button>
          <ThemeToggle isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation-menu"
          aria-labelledby="mobile-navigation-toggle"
          className="glass-panel absolute left-0 right-0 top-full z-50 mt-2 rounded-2xl border p-3 shadow-lg lg:hidden"
        >
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setMenuOpen(false);
                  trackEvent("navigation_link_click", { label: link.label });
                }}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#request"
              onClick={() => {
                setMenuOpen(false);
                trackEvent("part_request_cta_click", {
                  location: "mobile_navigation",
                });
              }}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
            >
              Request a part
            </a>
          </div>
        </div>
      )}

      {import.meta.env.DEV && (
        <div
          role="status"
          aria-label="Developer mode"
          className="pointer-events-none fixed bottom-0 left-0 z-[60] size-36 overflow-hidden"
        >
          <span className="absolute -bottom-1 left-[-2.5rem] flex h-9 w-48 rotate-45 items-center justify-center bg-slate-950 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white shadow-[0_3px_8px_rgba(0,0,0,0.45)]">
            Developer mode
          </span>
        </div>
      )}
    </header>
  );
}

export default NavBar;
