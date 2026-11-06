import ScrollReveal from "./ScrollReveal.jsx";

const vendorTypes = [
  { label: "OE", description: "Original equipment" },
  { label: "OEM", description: "Original equipment manufacturers" },
  { label: "OES", description: "Original equipment suppliers" },
  { label: "Others", description: "Additional parts vendors" },
];

const partnerBrands = [
  "Bosch",
  "Denso",
  "Valeo",
  "ZF",
  "MAHLE",
  "SKF",
  "Gabriel",
  "Lumax",
];

function PartnerBrandNames({ duplicate = false }) {
  return partnerBrands.map((brand) => (
    <span
      key={`${duplicate ? "duplicate-" : ""}${brand}`}
      className="shrink-0 px-6 text-sm font-extrabold tracking-[0.04em] text-slate-500 dark:text-slate-300 sm:px-10 sm:text-base"
    >
      {brand}
    </span>
  ));
}

function SupplierBrandsSection() {
  return (
    <section
      id="vendor-network"
      aria-labelledby="partner-brands-title"
      className="mx-auto w-[calc(100%-2rem)] max-w-[1120px] pb-12 sm:w-[calc(100%-3rem)] sm:pb-28"
    >
      <ScrollReveal>
        <div className="glass-panel rounded-2xl border px-5 py-7 text-center sm:px-8 sm:py-9">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400">
            Authorised partner brands
          </p>
          <h2
            id="partner-brands-title"
            className="mt-2 text-xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white sm:text-2xl"
          >
            Trusted names across automotive
          </h2>
          <div
            className="glass-inset brand-marquee-container mt-6 overflow-hidden rounded-xl border py-5"
            role="group"
            aria-label={`Authorised partner brands: ${partnerBrands.join(", ")}`}
          >
            <div className="brand-marquee flex w-max motion-reduce:animate-none">
              <div className="flex min-w-max items-center" aria-hidden="true">
                <PartnerBrandNames />
              </div>
              <div
                className="flex min-w-max items-center"
                aria-hidden="true"
              >
                <PartnerBrandNames duplicate />
              </div>
            </div>
          </div>
          <p
            id="vendor-network-title"
            className="mt-7 text-sm font-semibold text-slate-900 dark:text-slate-100"
          >
            A curated, tiered vendor network
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">
            SpareLab coordinates procurement across OE, OEM, OES, and other
            vendors. Vendor operations can support seller, distributor, and
            retailer workflows in one hybrid panel.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {vendorTypes.map((vendor) => (
              <div
                key={vendor.label}
                className="glass-inset rounded-xl border px-3 py-4"
              >
                <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
                  {vendor.label}
                </p>
                <p className="mt-1 text-[10px] leading-4 text-slate-500 dark:text-slate-400">
                  {vendor.description}
                </p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-5 max-w-3xl text-[10px] leading-5 text-slate-500 dark:text-slate-400 sm:text-xs">
            The wider platform scope includes a buyer marketplace, hybrid
            seller/distributor/retailer panels, admin ERP, Sales CRM,
            procurement, accounts, invoicing, payments, payouts, delivery,
            returns, and disputes. Cross-cutting tools include role-based
            access, audit, chat, notifications, reports, documents, HR, finance,
            subscriptions, and search credits. Single-tenant active; designed
            to support multiple tenants.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default SupplierBrandsSection;
