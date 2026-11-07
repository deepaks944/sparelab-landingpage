import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

function BrandMark() {
  return (
    <Link
      to="/"
      aria-label="SpareLab home"
      className="flex items-center gap-2"
    >
      <span className="flex size-8 items-center justify-center rounded-full bg-emerald-600">
        <svg
          aria-hidden="true"
          viewBox="0 0 16 16"
          fill="none"
          className="size-4"
        >
          <path
            d="M5.2 4.1h5.6v2H7.3v1.1h3.5v4.7H4.6v-2h4.1V8.8H5.2V4.1Z"
            fill="white"
          />
          <circle cx="12.1" cy="3.9" r="1.1" fill="white" />
        </svg>
      </span>
      <span className="text-xs font-extrabold tracking-[-0.06em] text-slate-800 dark:text-slate-100">
        SPARELAB
      </span>
    </Link>
  );
}

function AuthPage({ isDarkMode, onToggleTheme }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const isSignUp = searchParams.get("mode") === "signup";
  const [notice, setNotice] = useState("");
  const [hasSwitchedMode, setHasSwitchedMode] = useState(false);

  useEffect(() => {
    document.title = "Sign in or create an account | SpareLab";
    return () => {
      document.title = "SpareLab | Automotive Parts Marketplace";
    };
  }, []);

  const selectMode = (mode) => {
    if (mode === (isSignUp ? "signup" : "signin")) return;
    setNotice("");
    setHasSwitchedMode(true);
    setSearchParams({ mode }, { replace: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNotice("Account access is not connected yet. Your details were not submitted.");
  };

  return (
    <div className="relative flex min-h-screen flex-col px-4 pb-8 pt-5 sm:px-8 sm:pt-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 size-80 -translate-x-1/2 rounded-full bg-emerald-300/20 blur-3xl dark:bg-emerald-500/10"
      />
      <header className="glass-panel auth-navbar sticky top-3 z-50 mx-auto flex min-h-14 w-full max-w-6xl items-center justify-between rounded-full border px-4 sm:px-6">
        <BrandMark />
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="hidden text-sm font-medium text-slate-600 transition hover:text-emerald-700 sm:inline dark:text-slate-300 dark:hover:text-emerald-400"
          >
            Back to home
          </Link>
          <ThemeToggle
            isDarkMode={isDarkMode}
            onToggleTheme={onToggleTheme}
          />
        </div>
      </header>

      <main className="relative z-10 mx-auto grid w-full max-w-6xl flex-1 items-center gap-10 py-10 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
        <section className="mx-auto max-w-xl text-center lg:mx-0 lg:text-left">
          <span className="glass-inset inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-emerald-800 dark:text-emerald-300">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            Automotive parts, made simpler
          </span>
          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.055em] text-slate-950 sm:text-5xl dark:text-white">
            One network.
            <br />
            <span className="text-emerald-700 dark:text-emerald-400">
              A smoother way
            </span>{" "}
            to source.
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-pretty text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-300 lg:mx-0">
            SpareLab brings buyers and automotive parts vendors together, with
            coordinated sourcing from enquiry to fulfilment.
          </p>
          <div className="mt-8 hidden flex-wrap gap-3 lg:flex">
            {["Curated vendor network", "Clear quote coordination", "One accountable journey"].map(
              (benefit) => (
                <span
                  key={benefit}
                  className="glass-chip inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-200"
                >
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  {benefit}
                </span>
              ),
            )}
          </div>
        </section>

        <section
          aria-labelledby="auth-title"
          className={`glass-panel mx-auto w-full max-w-md rounded-3xl border p-6 sm:p-9 ${
            hasSwitchedMode ? "auth-card-switch-drop" : "auth-card-drop"
          }`}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-400">
            SpareLab account
          </p>
          <h2
            id="auth-title"
            className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white"
          >
            {isSignUp ? "Create your account" : "Welcome back"}
          </h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            {isSignUp
              ? "Get started with a SpareLab account."
              : "Sign in to continue to SpareLab."}
          </p>

          <div
            aria-label="Account access"
            className="glass-inset mt-6 grid grid-cols-2 gap-1 rounded-full border p-1"
            role="tablist"
          >
            <button
              id="signin-tab"
              type="button"
              role="tab"
              aria-selected={!isSignUp}
              aria-controls="auth-form"
              onClick={() => selectMode("signin")}
              className={`min-h-10 rounded-full px-3 text-sm font-semibold transition ${
                !isSignUp
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400"
              }`}
            >
              Sign in
            </button>
            <button
              id="signup-tab"
              type="button"
              role="tab"
              aria-selected={isSignUp}
              aria-controls="auth-form"
              onClick={() => selectMode("signup")}
              className={`min-h-10 rounded-full px-3 text-sm font-semibold transition ${
                isSignUp
                  ? "bg-emerald-600 text-white shadow-sm"
                  : "text-slate-600 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400"
              }`}
            >
              Create account
            </button>
          </div>

          <form
            key={isSignUp ? "signup" : "signin"}
            id="auth-form"
            aria-labelledby={isSignUp ? "signup-tab" : "signin-tab"}
            className={`mt-6 space-y-4 ${
              hasSwitchedMode ? "auth-form-slide-enter" : "auth-form-enter"
            }`}
            onSubmit={handleSubmit}
            role="tabpanel"
          >
            {isSignUp && (
              <>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    Full name
                  </span>
                  <input
                    autoComplete="name"
                    className="glass-control min-h-11 w-full rounded-xl border px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:text-white"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                    I am a
                  </span>
                  <select
                    className="glass-control min-h-11 w-full rounded-xl border px-3.5 text-sm text-slate-900 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:text-white"
                    name="accountType"
                    defaultValue="buyer"
                  >
                    <option value="buyer">Buyer</option>
                    <option value="vendor">Vendor</option>
                  </select>
                </label>
              </>
            )}
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                Email address
              </span>
              <input
                autoComplete="email"
                className="glass-control min-h-11 w-full rounded-xl border px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:text-white"
                name="email"
                placeholder="you@example.com"
                required
                type="email"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-200">
                Password
              </span>
              <input
                autoComplete={isSignUp ? "new-password" : "current-password"}
                className="glass-control min-h-11 w-full rounded-xl border px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 dark:text-white"
                name="password"
                placeholder="Enter your password"
                required
                type="password"
              />
            </label>

            {notice && (
              <p
                aria-live="polite"
                className="rounded-xl border border-amber-300/70 bg-amber-50/70 px-3 py-2.5 text-sm text-amber-900 dark:border-amber-400/20 dark:bg-amber-400/10 dark:text-amber-200"
                role="status"
              >
                {notice}
              </p>
            )}

            <button
              className="min-h-12 w-full rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(5,150,105,0.2)] transition hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              type="submit"
            >
              {isSignUp ? "Create account" : "Sign in"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">
            {isSignUp ? "Already have an account?" : "New to SpareLab?"}{" "}
            <button
              type="button"
              onClick={() => selectMode(isSignUp ? "signin" : "signup")}
              className="font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              {isSignUp ? "Sign in" : "Create an account"}
            </button>
          </p>
        </section>
      </main>
      <p className="relative z-10 text-center text-xs text-slate-500 dark:text-slate-400">
        Secure sourcing starts with SpareLab.
      </p>
    </div>
  );
}

export default AuthPage;
