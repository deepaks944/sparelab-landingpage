import trackEvent from "../utils/analytics.js";

const footerGroups = [
  {
    title: "Platform",
    links: [
      ["Request a part", "#request"],
      ["How it works", "#buyer-flow"],
      ["Buyer community", "#buyers"],
      ["Vendor signup", "#vendor-signup"],
    ],
  },
  {
    title: "Trust",
    links: [
      ["Vendor checks & part labels", "#trust"],
      ["Payment & settlement", "#trust"],
      ["Returns & warranty", "#refund-policy"],
      ["Frequently asked questions", "#faq"],
    ],
  },
  {
    title: "Support & legal",
    links: [
      ["Contact & support", "#support"],
      ["Privacy policy", "#privacy-policy"],
      ["Terms of service", "#terms"],
      ["Refund policy", "#refund-policy"],
    ],
  },
];

function FooterSection() {
  return (
    <footer className="glass-inset border-t">
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1120px] gap-10 py-10 sm:w-[calc(100%-3rem)] sm:grid-cols-2 sm:py-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <a
            href="#home"
            aria-label="SpareLab home"
            className="inline-flex items-center gap-2"
          >
            <span className="flex size-7 items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
              S
            </span>
            <span className="text-xs font-extrabold tracking-[-0.05em] text-slate-900 dark:text-white">
              SPARELAB
            </span>
          </a>
          <p className="mt-4 max-w-xs text-xs leading-5 text-slate-500 dark:text-slate-400">
            A coordinated automotive parts marketplace. Confirm part
            condition, delivery estimate, invoice, and return terms on your
            written quote before ordering.
          </p>
          <a
            href="#request"
            onClick={() => trackEvent("part_request_cta_click", { location: "footer" })}
            className="mt-4 inline-flex text-xs font-medium text-emerald-700 hover:text-emerald-800 dark:text-emerald-400"
          >
            Prepare a part request{" "}
            <span aria-hidden="true" className="ml-1">
              →
            </span>
          </a>
        </div>
        {footerGroups.map((group) => (
          <div key={group.title}>
            <h2 className="text-xs font-semibold text-slate-900 dark:text-slate-100">
              {group.title}
            </h2>
            <ul className="mt-4 space-y-3">
              {group.links.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-xs text-slate-500 transition-colors hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-400"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/60 bg-white/15 backdrop-blur-md dark:border-white/10 dark:bg-slate-950/15">
        <div className="mx-auto flex w-[calc(100%-2rem)] max-w-[1120px] flex-col gap-3 py-4 text-[10px] text-slate-400 dark:text-slate-500 sm:w-[calc(100%-3rem)] sm:flex-row sm:items-center sm:justify-between">
          <span className="font-bold">© 2026 SpareLab. All rights reserved.</span>
          <span className="font-bold text-slate-500 dark:text-slate-400">
            Build Version #{`0.0.0. ${__BUILD_NUMBER__}`} ·{" "}
            {import.meta.env.DEV ? "DEV" : "PROD"} · Last Updated on:{" "}
            <time dateTime={__BUILD_DATE__}>
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "medium",
                timeStyle: "medium",
              }).format(new Date(__BUILD_DATE__))}
              {` IST`}
            </time>
          </span>
          <a
            href="#privacy-policy"
            className="font-bold hover:text-emerald-700 dark:hover:text-emerald-400"
          >
            Privacy & policies
          </a>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
