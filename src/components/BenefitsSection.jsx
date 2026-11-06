import ScrollReveal from "./ScrollReveal.jsx";

const benefits = [
  {
    id: "features",
    number: "01",
    eyebrow: "Demand, catalogue & fitment",
    title: "From part search to a fitment-aware enquiry.",
    description:
      "Buyers can search parts, look up vehicle fitment, or request a part. SpareLab coordinates enquiries with staff support in Phase 1, with self-serve requests planned for Phase 2.",
    bullets: [
      "Support catalogue, inventory, EPC, and fitment workflows",
      "Capture vehicle, part, quantity, and delivery requirements",
      "Keep a clear enquiry and order history",
    ],
    panelTitle: "Customer enquiry",
    panelRows: ["ENQ-000020  ·  Request received", "Volkswagen Polo 2013  ·  Fitment details", "Front wheel bearing ×2  ·  CV joint boot kit ×1"],
  },
  {
    id: "privacy",
    number: "02",
    eyebrow: "One accountable merchant",
    title: "Buy from SpareLab—not directly from an unknown vendor.",
    description:
      "SpareLab transacts on its own GSTIN: vendors issue tax invoices to SpareLab, and SpareLab issues tax invoices to customers. All cross-party communication is mediated and anonymised by SpareLab.",
    bullets: [
      "Vendor identities are never exposed to buyers, and customer identities are never exposed to vendors",
      "SpareLab mediates and anonymises every cross-party communication",
      "Coordinate sales, procurement, accounts, and delivery in role-based channels",
    ],
    panelTitle: "Private, channel-based coordination",
    panelRows: ["Vendor tax invoice → SpareLab", "SpareLab tax invoice → Customer", "Mediated chat  ·  Identities anonymised"],
  },
  {
    id: "quality",
    number: "03",
    eyebrow: "Tiered procurement & quoting",
    title: "Cascade requirements across OE, OEM, OES, and other vendors.",
    description:
      "SpareLab controls time-boxed procurement routing across vendor tiers (T1 → T2 → T3), with manual bypass. Admin configures each vendor's margin; customer pricing displays MRP and the computed discount.",
    bullets: [
      "Vendor quotes expire after 7 days",
      "Admin-configured per-vendor margin contributes to revenue alongside subscriptions and search credits",
      "Display MRP and the computed discount",
      "Collect via gateway, direct transfer, or credit; verify payment before placing the order",
    ],
    panelTitle: "Procurement & quote",
    panelRows: ["T1 → T2 → T3  ·  SpareLab-controlled routing", "Vendor cost + configured margin → customer price", "MRP · Computed discount · Quote valid for 7 days"],
  },
  {
    id: "business",
    number: "04",
    eyebrow: "Order to settlement",
    title: "Track fulfilment, accounts, delivery, and feedback in one flow.",
    description:
      "After payment verification, vendors send tax invoices to SpareLab and Accounts reconciles them against orders. SpareLab controls QC, delivery, customer invoicing, and vendor settlement.",
    bullets: [
      "SpareLab issues customer tax invoices under its own GSTIN",
      "Control delivery routing and track shipments or LR copies",
      "Manage advance and post-bill vendor payouts; retain the customer-price-to-vendor-cost margin",
      "Handle vendor ratings, customer reviews, returns, issues, disputes, and refund-to-ledger credits",
    ],
    panelTitle: "Accounts & delivery checklist",
    panelRows: ["Vendor tax invoice  ·  Order cross-check", "SpareLab GSTIN  ·  Customer tax invoice", "Controlled delivery  ·  Vendor settlement"],
  },
];

function MockPanel({ title, rows }) {
  return (
    <div className="glass-inset rounded-2xl border p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
        <span className="flex gap-1">
          <i className="size-1.5 rounded-full bg-rose-400" />
          <i className="size-1.5 rounded-full bg-amber-400" />
          <i className="size-1.5 rounded-full bg-emerald-400" />
        </span>
        <span className="text-[9px] font-medium text-slate-400">SPARELAB PORTAL</span>
      </div>
      <p className="mb-3 text-xs font-semibold text-slate-800 dark:text-slate-100">{title}</p>
      <div className="space-y-2.5">
        {rows.map((row, index) => (
          <div
            key={row}
            className="glass-chip flex items-center gap-2.5 rounded-xl px-3 py-2.5"
          >
            <span className={`flex size-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold ${index === 0 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300" : "bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-400"}`}>
              {index === 0 ? "✓" : index + 1}
            </span>
            <span className="text-[10px] font-medium text-slate-600 dark:text-slate-300">{row}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function BenefitsSection() {
  return (
    <section className="mx-auto w-[calc(100%-2rem)] max-w-[1120px] space-y-4 pb-12 sm:w-[calc(100%-3rem)] sm:space-y-7 sm:pb-32">
      {benefits.map((benefit, index) => (
        <ScrollReveal key={benefit.id}>
          <article
            id={benefit.id}
            className={`glass-panel grid items-center gap-7 rounded-3xl border p-5 sm:gap-10 sm:p-8 lg:grid-cols-2 lg:gap-14 lg:p-10 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="relative">
              <span className="glass-chip mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-emerald-700 dark:text-emerald-300">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                {benefit.eyebrow}
              </span>
              <p className="mb-2 text-[10px] font-semibold tracking-[0.16em] text-slate-300 dark:text-slate-600">{benefit.number} / 04</p>
              <h2 className="max-w-lg text-2xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 dark:text-white sm:text-3xl">
                {benefit.title}
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500 dark:text-slate-400">
                {benefit.description}
              </p>
              <ul className="mt-5 space-y-2.5">
                {benefit.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-xs leading-5 text-slate-600 dark:text-slate-300">
                    <span className="glass-chip mt-1 flex size-4 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-emerald-700 dark:text-emerald-300">✓</span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <a href="#request" className="mt-5 inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="glass-inset rounded-2xl border p-4 sm:p-6">
              <MockPanel title={benefit.panelTitle} rows={benefit.panelRows} />
            </div>
          </article>
        </ScrollReveal>
      ))}
    </section>
  );
}

export default BenefitsSection;
