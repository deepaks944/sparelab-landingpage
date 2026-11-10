import { useEffect, useRef, useState } from "react";
import marketplaceStats from "../data/marketplaceStats.js";
import spareParts from "../data/spareParts.js";
import CountUp from "./CountUp.jsx";
import SparePartsViewer from "./SparePartsViewer.jsx";

const previewScenes = [
  {
    label: "Marketplace at a glance",
    title: "Parts sourcing, backed by a growing network.",
    detail:
      "Explore SpareLab's vendor reach, city coverage, catalogue, and on-time fulfilment.",
    status: "120+ vendors · 15,000+ catalogue parts",
    color:
      "from-emerald-100/80 via-white/80 to-teal-100/80 dark:from-emerald-950/70 dark:via-slate-900/80 dark:to-teal-950/70",
    art: "stats",
  },
  {
    label: "Automotive parts catalogue",
    title: "Find the parts that keep vehicles moving.",
    detail:
      "Browse common maintenance and replacement parts with vehicle fitment in mind.",
    status: "Filters · Brakes · Ignition · Bearings",
    color:
      "from-sky-100/80 via-white/80 to-indigo-100/80 dark:from-sky-950/70 dark:via-slate-900/80 dark:to-indigo-950/70",
    art: "parts",
  },
  {
    label: "Demand capture",
    title: "Request the part. SpareLab coordinates the rest.",
    detail:
      "Search, check fitment, or send an enquiry. In Phase 1, SpareLab staff coordinate sourcing on your behalf.",
    status: "Enquiry routed to SpareLab",
    color:
      "from-emerald-100/80 via-white/80 to-teal-100/80 dark:from-emerald-950/70 dark:via-slate-900/80 dark:to-teal-950/70",
    art: "fitment",
  },
  {
    label: "Tiered procurement",
    title: "A curated vendor network, sourced in sequence.",
    detail:
      "Requirements can cascade across vendor tiers, with time-boxed responses and a manual bypass for the procurement team.",
    status: "Procurement: T1 → T2 → T3",
    color:
      "from-sky-100/80 via-white/80 to-indigo-100/80 dark:from-sky-950/70 dark:via-slate-900/80 dark:to-indigo-950/70",
    art: "quality",
  },
  {
    label: "Quote to delivery",
    title: "One accountable transaction from quote to tax invoice.",
    detail:
      "Vendors invoice SpareLab; SpareLab invoices customers under its own GSTIN, controls delivery, and settles vendor payouts.",
    status: "MRP · Computed discount · Vendor margin",
    color:
      "from-amber-100/80 via-white/80 to-orange-100/80 dark:from-amber-950/50 dark:via-slate-900/80 dark:to-orange-950/50",
    art: "delivery",
  },
];

const catalogueParts = [
  { name: "Oil filter", type: "oil-filter" },
  { name: "Air filter", type: "air-filter" },
  { name: "Brake pads", type: "brake-pads" },
  { name: "Spark plug", type: "spark-plug" },
  { name: "Wheel bearing", type: "bearing" },
  { name: "Alternator", type: "alternator" },
];

function SceneArt({ type }) {
  if (type === "stats") {
    return (
      <div
        aria-hidden="true"
        className="grid h-full w-full grid-cols-2 gap-2 rounded-2xl border border-white/60 bg-white/70 p-3 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-slate-950/65 sm:gap-3 sm:p-4"
      >
        {marketplaceStats.map((stat, index) => (
          <div
            key={stat.label}
            className="flex flex-col justify-between rounded-xl border border-emerald-900/5 bg-white/70 p-2.5 dark:border-white/10 dark:bg-white/5 sm:p-3"
          >
            <span className="text-[8px] font-medium leading-tight text-slate-500 dark:text-slate-400 sm:text-[10px]">
              {stat.label}
            </span>
            <span className="mt-1 text-base font-bold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
              <span className="text-emerald-600 dark:text-emerald-400">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </span>
            </span>
            <span
              className={`mt-1 h-1 rounded-full bg-emerald-500/70 ${
                index === 3 ? "w-full" : index === 2 ? "w-4/5" : "w-3/5"
              }`}
            />
          </div>
        ))}
      </div>
    );
  }

  if (type === "parts") {
    return (
      <div
        aria-hidden="true"
        className="grid h-full w-full grid-cols-3 grid-rows-2 gap-1.5 rounded-2xl border border-white/60 bg-white/70 p-2 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-slate-950/65 sm:gap-2 sm:p-3"
      >
        {catalogueParts.map((part) => (
          <div
            key={part.name}
            className="flex min-w-0 flex-col items-center justify-center rounded-lg border border-slate-200/70 bg-white/80 p-1 text-slate-600 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-300 sm:rounded-xl sm:p-2"
          >
            <svg
              viewBox="0 0 64 48"
              fill="none"
              className="h-7 w-9 text-emerald-700 dark:text-emerald-400 sm:h-10 sm:w-12"
            >
              {part.type === "oil-filter" && (
                <>
                  <path
                    d="M22 8h20l4 7v24H18V15l4-7Z"
                    fill="currentColor"
                    fillOpacity=".18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M22 8h20M18 18h28m-28 5h28m-28 5h28m-28 5h28"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M26 8V5h12v3"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />
                </>
              )}
              {part.type === "air-filter" && (
                <>
                  <path
                    d="M8 16 17 9h30l9 7v21H8V16Z"
                    fill="currentColor"
                    fillOpacity=".16"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m18 11-6 7m14-8-6 9m14-9-6 9m14-9-6 9m12-2-6 8M12 25h40"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </>
              )}
              {part.type === "brake-pads" && (
                <>
                  <path
                    d="M12 16q0-5 5-5h12v27H12V16Zm25-5h10q5 0 5 5v22H37V11Z"
                    fill="currentColor"
                    fillOpacity=".2"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 17h5m-5 6h5m20-6h5m-5 6h5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </>
              )}
              {part.type === "spark-plug" && (
                <>
                  <path
                    d="M25 7h14v8l4 4v10h-6v8H27v-8h-6V19l4-4V7Z"
                    fill="currentColor"
                    fillOpacity=".18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M25 12h14m-18 9h22m-15 8h8m-4 8v5m-5-2h10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </>
              )}
              {part.type === "bearing" && (
                <>
                  <circle
                    cx="32"
                    cy="24"
                    r="17"
                    fill="currentColor"
                    fillOpacity=".16"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="32"
                    cy="24"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />
                  <circle cx="32" cy="11" r="2" fill="currentColor" />
                  <circle cx="43" cy="18" r="2" fill="currentColor" />
                  <circle cx="39" cy="36" r="2" fill="currentColor" />
                  <circle cx="25" cy="36" r="2" fill="currentColor" />
                  <circle cx="21" cy="18" r="2" fill="currentColor" />
                </>
              )}
              {part.type === "alternator" && (
                <>
                  <path
                    d="m18 13 9-5h13l9 7 3 17-9 9H21l-8-8 2-15 3-5Z"
                    fill="currentColor"
                    fillOpacity=".18"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <circle
                    cx="32"
                    cy="24"
                    r="8"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M32 16v16m-8-8h16m-19-9 5 5m12 12 5 5m0-22-5 5m-12 12-5 5"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </>
              )}
            </svg>
            <span className="mt-1 truncate text-[7px] font-semibold leading-tight text-slate-700 dark:text-slate-200 sm:text-[9px]">
              {part.name}
            </span>
          </div>
        ))}
      </div>
    );
  }

  if (type === "fitment") {
    return (
      <svg viewBox="0 0 360 260" fill="none" className="h-full w-full" aria-hidden="true">
        <circle cx="180" cy="130" r="95" fill="currentColor" fillOpacity=".06" />
        <circle cx="180" cy="130" r="67" stroke="currentColor" strokeOpacity=".22" strokeWidth="2" />
        <circle cx="180" cy="130" r="49" fill="currentColor" fillOpacity=".08" stroke="currentColor" strokeOpacity=".55" strokeWidth="5" />
        <circle cx="180" cy="130" r="23" fill="currentColor" fillOpacity=".12" stroke="currentColor" strokeOpacity=".6" strokeWidth="4" />
        <circle cx="180" cy="130" r="8" fill="currentColor" fillOpacity=".75" />
        <path d="M180 63v44m0 46v44m67-67h-44m-46 0h-44m114-47-31 31m-32 32-31 31m94 0-31-31m-32-32-31-31" stroke="currentColor" strokeOpacity=".32" strokeWidth="7" strokeLinecap="round" />
        <circle cx="180" cy="130" r="86" stroke="currentColor" strokeOpacity=".11" strokeDasharray="3 8" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "quality") {
    return (
      <svg viewBox="0 0 360 260" fill="none" className="h-full w-full" aria-hidden="true">
        <circle cx="180" cy="130" r="95" fill="currentColor" fillOpacity=".06" />
        <path d="m180 47 72 31v51c0 44-29 72-72 91-43-19-72-47-72-91V78l72-31Z" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeOpacity=".45" strokeWidth="5" strokeLinejoin="round" />
        <path d="m143 129 25 25 51-54" stroke="currentColor" strokeOpacity=".75" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="180" cy="130" r="86" stroke="currentColor" strokeOpacity=".13" strokeDasharray="3 8" strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 360 260" fill="none" className="h-full w-full" aria-hidden="true">
      <circle cx="180" cy="130" r="95" fill="currentColor" fillOpacity=".06" />
      <path d="M68 85h137v91H68z" fill="currentColor" fillOpacity=".14" stroke="currentColor" strokeOpacity=".48" strokeWidth="4" strokeLinejoin="round" />
      <path d="M205 111h42l42 42v23h-84v-65Z" fill="currentColor" fillOpacity=".2" stroke="currentColor" strokeOpacity=".52" strokeWidth="4" strokeLinejoin="round" />
      <path d="M226 119v31h48" stroke="currentColor" strokeOpacity=".42" strokeWidth="4" strokeLinejoin="round" />
      <circle cx="112" cy="180" r="16" fill="currentColor" fillOpacity=".35" stroke="currentColor" strokeOpacity=".65" strokeWidth="4" />
      <circle cx="250" cy="180" r="16" fill="currentColor" fillOpacity=".35" stroke="currentColor" strokeOpacity=".65" strokeWidth="4" />
      <path d="M80 99h108m-108 18h75m-75 18h88" stroke="currentColor" strokeOpacity=".3" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

function HeroSection() {
  const previewRef = useRef(null);
  const previewZoomRef = useRef(null);
  const partsTrackRef = useRef(null);
  const animationFrameRef = useRef(0);
  const previewAnimationFrameRef = useRef(0);
  const [activeScene, setActiveScene] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPartHovered, setIsPartHovered] = useState(false);
  const activePartIndex = Math.min(
    spareParts.length - 1,
    Math.round(scrollProgress * (spareParts.length - 1)),
  );
  const activePart = spareParts[activePartIndex];

  useEffect(() => {
    const preview = previewRef.current;
    const previewZoom = previewZoomRef.current;
    if (!preview || !previewZoom) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateZoom = () => {
      previewAnimationFrameRef.current = 0;
      const { top, height } = preview.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const stickyTop = window.matchMedia("(min-width: 640px)").matches
        ? 80
        : 64;
      const scrollDistance = Math.max(
        1,
        height - (viewportHeight - stickyTop),
      );
      const progress = Math.max(
        0,
        Math.min(1, (stickyTop - top) / scrollDistance),
      );
      const scale = reduceMotion.matches
        ? 1
        : 0.96 + Math.sin(progress * Math.PI) * 0.24;
      const sceneIndex = Math.min(
        previewScenes.length - 1,
        Math.floor(progress * previewScenes.length),
      );

      previewZoom.style.setProperty("--preview-scale", scale.toFixed(3));
      setActiveScene((current) =>
        current === sceneIndex ? current : sceneIndex,
      );
    };
    const requestZoomUpdate = () => {
      if (!previewAnimationFrameRef.current) {
        previewAnimationFrameRef.current =
          window.requestAnimationFrame(updateZoom);
      }
    };

    updateZoom();
    window.addEventListener("scroll", requestZoomUpdate, { passive: true });
    window.addEventListener("resize", requestZoomUpdate);

    return () => {
      window.removeEventListener("scroll", requestZoomUpdate);
      window.removeEventListener("resize", requestZoomUpdate);
      if (previewAnimationFrameRef.current) {
        window.cancelAnimationFrame(previewAnimationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const track = partsTrackRef.current;
    if (!track) return undefined;

    const updateProgress = () => {
      animationFrameRef.current = 0;
      const { top, height } = track.getBoundingClientRect();
      const stickyTop = window.matchMedia("(min-width: 640px)").matches
        ? 80
        : 64;
      const scrollDistance = Math.max(
        1,
        height - (window.innerHeight - stickyTop),
      );
      const progress = Math.max(
        0,
        Math.min(1, (stickyTop - top) / scrollDistance),
      );
      setScrollProgress((current) =>
        Math.abs(current - progress) < 0.002 ? current : progress,
      );
    };
    const requestUpdate = () => {
      if (!animationFrameRef.current) {
        animationFrameRef.current = window.requestAnimationFrame(updateProgress);
      }
    };

    updateProgress();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <main
      id="home"
      className="mx-auto flex w-[calc(100%-2rem)] max-w-[1280px] flex-col items-center pb-12 pt-5 text-center sm:w-[calc(100%-3rem)] sm:pb-24 sm:pt-8 lg:pt-10"
    >
      <div className="glass-inset hero-load-in hero-delay-1 mb-6 inline-flex items-center gap-2.5 rounded-full border px-4 py-2">
        <span className="size-2 rounded-full bg-emerald-500" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-800 dark:text-emerald-300 sm:text-xs">
          Automotive parts commerce, coordinated end to end
        </span>
      </div>

      <h1 className="hero-load-in hero-delay-2 max-w-5xl text-balance text-xl font-semibold leading-[0.98] tracking-[-0.055em] text-slate-950 dark:text-white sm:text-6xl lg:text-7xl xl:text-7xl">
        Source automotive parts
        <br />
        <span className="text-emerald-700 dark:text-emerald-400">
          with one accountable
        </span>
        <br className="hidden sm:block" /> marketplace.
      </h1>

      <p className="hero-load-in hero-delay-3 mt-6 max-w-2xl text-pretty text-base leading-7 text-slate-500 dark:text-slate-400 sm:text-lg sm:leading-8">
        SpareLab connects buyers to a curated network of OE, OEM, OES, and other
        parts vendors. We buy from vendors and resell to customers under
        SpareLab&apos;s own GSTIN and invoice identity—coordinating the commercial
        journey from enquiry through fulfilment and settlement.
      </p>

      <div className="hero-load-in hero-delay-4 mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
        <a
          href="#request"
          className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-emerald-600 px-7 text-base font-semibold text-white shadow-[0_6px_18px_rgba(5,150,105,0.2)] transition hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
        >
          Request a part
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            fill="none"
            className="size-3.5"
          >
            <path
              d="M3 8h10m-4-4 4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          href="#vendor-network"
          className="glass-control inline-flex min-h-12 items-center justify-center rounded-full border px-7 text-base font-semibold text-slate-700 transition hover:border-emerald-200 hover:bg-emerald-50/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700 dark:text-slate-200 dark:hover:border-emerald-700"
        >
          Join as a vendor
        </a>
      </div>

      <div
        ref={previewRef}
        className="relative mt-8 h-[150vh] w-full max-w-[1120px] sm:mt-16"
      >
        <div className="sticky top-16 flex h-[calc(100svh-4rem)] min-h-[420px] items-center sm:top-20 sm:h-[calc(100svh-5rem)] sm:min-h-[480px]">
          <div
            ref={previewZoomRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="SpareLab procurement and order lifecycle"
            className="glass-panel hero-scroll-zoom w-full rounded-[1.5rem] border p-2.5 sm:rounded-[1.8rem] sm:p-3.5"
          >
            <div className="relative aspect-[1.25/1] overflow-hidden rounded-[1rem] bg-white/35 sm:aspect-[2.55/1] sm:rounded-[1.25rem]">
              {previewScenes.map((scene, index) => {
                const isActive = activeScene === index;
                const isPrevious = index < activeScene;

                return (
                  <div
                    key={scene.label}
                    aria-hidden={!isActive}
                    className={`hero-scene absolute inset-0 ${
                      isActive
                        ? "hero-scene-active z-20 translate-x-0 scale-100 opacity-100"
                        : isPrevious
                          ? "z-10 translate-x-full scale-[.97] opacity-0"
                          : "z-0 -translate-x-full scale-[.96] opacity-0"
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${scene.color}`} />
                    <div className="absolute -right-12 -top-20 size-64 rounded-full bg-white/25 blur-3xl dark:bg-emerald-400/10" />
                    <div className="relative grid h-full grid-cols-1 items-center px-5 pb-12 pt-10 sm:grid-cols-[1fr_.9fr] sm:px-10 sm:py-12 lg:px-16">
                      <div className="relative z-10 max-w-md text-left">
                        <span className="glass-chip inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-emerald-800 dark:text-emerald-300 sm:text-[10px]">
                          <span className="size-1.5 rounded-full bg-emerald-500" />
                          {scene.label}
                        </span>
                        <h2 className="mt-4 max-w-sm text-xl font-semibold leading-tight tracking-[-0.045em] text-slate-900 dark:text-white sm:text-3xl">
                          {scene.title}
                        </h2>
                        <p className="mt-2 max-w-xs text-[10px] leading-5 text-slate-600 dark:text-slate-300 sm:text-sm sm:leading-6">
                          {scene.detail}
                        </p>
                        <span className="glass-panel mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[9px] font-medium text-slate-700 dark:text-slate-200 sm:mt-6 sm:px-4 sm:py-2 sm:text-[10px]">
                          <span className="size-1.5 rounded-full bg-emerald-500" />
                          {scene.status}
                        </span>
                      </div>
                      <div className="pointer-events-none absolute bottom-7 right-2 top-7 w-[53%] text-emerald-700/80 opacity-40 dark:text-emerald-300/80 sm:relative sm:inset-auto sm:ml-auto sm:h-56 sm:w-full sm:max-w-sm sm:opacity-100">
                        <SceneArt type={scene.art} />
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="glass-panel absolute bottom-3 left-3 z-30 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 shadow-sm sm:bottom-5 sm:left-5">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                <span className="text-[9px] font-medium text-slate-700 dark:text-slate-200 sm:text-[10px]">
                  Scroll to explore
                </span>
              </div>

              <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5">
                {previewScenes.map((scene, index) => (
                  <span
                    key={scene.label}
                    aria-hidden="true"
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      activeScene === index
                        ? "w-6 bg-emerald-600"
                        : "w-1.5 bg-slate-400/60"
                    }`}
                  />
                ))}
              </div>

              <span className="sr-only" aria-live="polite">
                {previewScenes[activeScene].title}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        id="parts-viewer"
        ref={partsTrackRef}
        className="relative mt-8 h-[520svh] w-full max-w-[1120px] sm:mt-16"
      >
        <div className="sticky top-16 flex h-[calc(100svh-4rem)] min-h-[440px] items-center sm:top-20 sm:h-[calc(100svh-5rem)] sm:min-h-[480px]">
          <div
            onPointerEnter={() => setIsPartHovered(true)}
            onPointerLeave={() => setIsPartHovered(false)}
            onFocusCapture={() => setIsPartHovered(true)}
            onBlurCapture={() => setIsPartHovered(false)}
            className="glass-panel relative h-[min(76svh,680px)] min-h-[440px] w-full overflow-hidden rounded-[1.5rem] border text-left shadow-2xl sm:rounded-[1.8rem]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-emerald-100/35 dark:from-slate-950/25 dark:to-emerald-950/25" />
            <SparePartsViewer progress={scrollProgress} />

            <div
              aria-hidden={!isPartHovered}
              className={`pointer-events-none absolute left-4 top-4 z-10 max-w-[min(18rem,calc(100%-2rem))] transition-opacity duration-200 sm:left-7 sm:top-7 ${
                isPartHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="glass-panel rounded-2xl border p-4 shadow-xl sm:p-5">
                <p className="text-[9px] font-semibold tracking-[0.15em] text-emerald-700 dark:text-emerald-400 sm:text-[10px]">
                  {activePart.category}
                </p>
                <h2 className="mt-1 text-xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 dark:text-white sm:text-2xl">
                  {activePart.name}
                </h2>
                <p className="mt-2 text-[10px] leading-5 text-slate-600 dark:text-slate-300 sm:text-xs sm:leading-6">
                  {activePart.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
