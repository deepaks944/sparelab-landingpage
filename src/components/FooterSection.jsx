const footerGroups = [
  {
    title: "Platform",
    links: [
      ["Request a part", "#request"],
      ["Part marketplace", "#marketplace"],
      ["Buyer workflows", "#buyers"],
      ["Vendor operations", "#vendor-network"],
    ],
  },
  {
    title: "Operations",
    links: [
      ["Tiered procurement & quotes", "#quality"],
      ["Merchant of Record model", "#privacy"],
      ["Fulfilment & settlement", "#business"],
      ["Sales, accounts & delivery", "#business"],
    ],
  },
  {
    title: "Product",
    links: [
      ["Catalogue & fitment", "#features"],
      ["Returns & disputes", "#business"],
      ["Channel-based coordination", "#privacy"],
      ["Tenant-ready platform", "#vendor-network"],
    ],
  },
];

function FooterSection() {
  return (
    <footer className="glass-inset border-t">
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1120px] gap-10 py-10 sm:w-[calc(100%-3rem)] sm:grid-cols-2 sm:py-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
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
            SpareLab buys and resells automotive parts on its own GSTIN, issuing
            customer tax invoices and receiving vendor tax invoices.
          </p>
          <a
            href="#request"
            className="mt-4 inline-flex text-xs font-medium text-emerald-700 hover:text-emerald-800 dark:text-emerald-400"
          >
            Preview a part request{" "}
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
          <span className="font-bold">
            © 2026 SpareLab. All rights reserved.
          </span>
          <span className="font-bold text-md text-slate-500 dark:text-slate-400">
            Build Version #{`0.0.0. ${__BUILD_NUMBER__}`} · Last Updated on:{" "}
            <time dateTime={__BUILD_DATE__}>
              {new Intl.DateTimeFormat("en-US", {
                dateStyle: "medium",
                timeStyle: "medium",
              }).format(new Date(__BUILD_DATE__))}
              {` IST`}
            </time>
          </span>
          <div className="flex gap-5 font-bold">
            <a
              href="#privacy"
              className="hover:text-emerald-700 dark:hover:text-emerald-400"
            >
              Privacy
            </a>
            <a
              href="#features"
              className="hover:text-emerald-700 dark:hover:text-emerald-400 font-bold"
            >
              How it works
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
