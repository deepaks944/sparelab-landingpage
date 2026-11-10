const stages = [
  {
    title: "Garage enquiry",
    detail: "Part, vehicle & quantity",
    icon: [
      "M3 11 12 4l9 7",
      "M5 10v10h14V10",
      "M9 20v-6h6v6",
      "M3 11h18",
    ],
  },
  {
    title: "Vendor quote",
    detail: "Price, stock & ETA",
    icon: [
      "M7 3h7l5 5v13H7z",
      "M14 3v6h5",
      "M10 13h6",
      "M10 17h4",
    ],
  },
  {
    title: "Purchase order",
    detail: "Order confirmed",
    icon: ["m5 12 4 4L19 6", "M4 20h16"],
  },
  {
    title: "Purchase bill",
    detail: "Vendor bill recorded",
    icon: [
      "M6 3h12v18l-3-2-3 2-3-2-3 2z",
      "M9 8h6",
      "M9 12h6",
      "M9 16h3",
    ],
  },
  {
    title: "Purchase invoice",
    detail: "Invoice issued",
    icon: [
      "M6 3h12v18l-3-2-3 2-3-2-3 2z",
      "M9 8h6",
      "M9 12h3",
      "m13 15 1.5 1.5L18 13",
    ],
  },
  {
    title: "Part delivered",
    detail: "Delivered to garage",
    icon: [
      "M3 7h11v11H3z",
      "M14 11h4l3 3v4h-7z",
      "M7 18a2 2 0 1 0 0 .01",
      "M17 18a2 2 0 1 0 0 .01",
    ],
  },
];

function ProcurementFlow() {
  return (
    <section
      id="procurement-flow"
      aria-labelledby="procurement-flow-title"
      className="procurement-flow mt-10 w-full max-w-[1120px] text-left sm:mt-16"
    >
      <div className="glass-panel procurement-flow-shell overflow-hidden rounded-[1.5rem] border p-5 sm:rounded-[1.8rem] sm:p-8 lg:p-10">
        <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="glass-chip inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-800 dark:text-emerald-300 sm:text-[10px]">
              <span className="size-1.5 rounded-full bg-emerald-500" />
              One connected workflow
            </span>
            <h2
              id="procurement-flow-title"
              className="mt-4 max-w-xl text-2xl font-semibold leading-tight tracking-[-0.045em] text-slate-950 dark:text-white sm:text-3xl"
            >
              From garage enquiry to delivered part.
            </h2>
            <p className="mt-2 max-w-xl text-xs leading-5 text-slate-600 dark:text-slate-300 sm:text-sm sm:leading-6">
              Every request moves through vendor pricing, purchasing, billing,
              invoicing and fulfilment—with SpareLab coordinating each step.
            </p>
          </div>
          <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/75 px-3 py-2 text-[10px] font-medium text-emerald-800 dark:border-emerald-800/60 dark:bg-emerald-950/50 dark:text-emerald-300">
            <span className="size-1.5 animate-pulse rounded-full bg-emerald-500 motion-reduce:animate-none" />
            Enquiry → fulfilment
          </span>
        </div>

        <div
          className="procurement-flow-scene mt-8 sm:mt-10"
          role="img"
          aria-label="Animated 3D flow chart: garage enquiry, vendor quote, purchase order, purchase bill, purchase invoice, and part delivered"
        >
          <div className="procurement-flow-board">
            <div className="procurement-flow-route" aria-hidden="true">
              <span />
            </div>
            <ol className="procurement-flow-stages">
              {stages.map((stage, index) => (
                <li
                  className="procurement-flow-stage"
                  key={stage.title}
                  style={{ "--step-index": index }}
                >
                  <article className="procurement-flow-card">
                    <span className="procurement-flow-step">
                      STEP 0{index + 1}
                    </span>
                    <span className="procurement-flow-icon" aria-hidden="true">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        {stage.icon.map((path) => (
                          <path d={path} key={path} />
                        ))}
                      </svg>
                    </span>
                    <h3>{stage.title}</h3>
                    <p>{stage.detail}</p>
                  </article>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 pt-5 text-[10px] font-medium text-slate-500 dark:border-white/10 dark:text-slate-400 sm:mt-8 sm:pt-6 sm:text-xs">
          <span>One request. Clear purchasing steps. Parts delivered.</span>
          <a
            className="inline-flex items-center gap-2 text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
            href="#request"
          >
            Start an enquiry
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
        </div>
      </div>
    </section>
  );
}

export default ProcurementFlow;
