import { useState } from "react";
import { Link } from "react-router-dom";

function AccountMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        if (!document.activeElement?.closest("[data-account-menu]")) {
          setIsOpen(false);
        }
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
      data-account-menu
    >
      <button
        type="button"
        aria-label="Account options"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        onFocus={() => setIsOpen(true)}
        className="glass-inset flex size-9 items-center justify-center rounded-full border text-slate-600 transition hover:border-emerald-300 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className="size-5"
        >
          <circle
            cx="10"
            cy="6.5"
            r="3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M4.5 17c.4-3 2.4-4.5 5.5-4.5s5.1 1.5 5.5 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <div
        role="menu"
        aria-label="Account"
        className={`glass-panel absolute right-0 top-full z-50 mt-2 w-44 rounded-2xl border p-2 shadow-lg ${
          isOpen ? "block" : "hidden"
        } group-hover:block group-focus-within:block`}
      >
        <Link
          role="menuitem"
          to="/account?mode=signin"
          onClick={() => setIsOpen(false)}
          className="block rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-emerald-400"
        >
          Sign in
        </Link>
        <Link
          role="menuitem"
          to="/account?mode=signup"
          onClick={() => setIsOpen(false)}
          className="block rounded-xl bg-emerald-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Create account
        </Link>
      </div>
    </div>
  );
}

export default AccountMenu;
