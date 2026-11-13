import { useState } from "react";
import ScrollReveal from "./ScrollReveal.jsx";
import trackEvent from "../utils/analytics.js";
import faqs from "../data/faqs.js";

const vendorTiers = [
  {
    tier: "T1",
    title: "Manufacturer / authorised source",
    detail:
      "Business identity, GST registration where applicable, and current manufacturer or authorised-channel evidence are checked before an authorisation claim is shown.",
  },
  {
    tier: "T2",
    title: "Established distributor",
    detail:
      "Business and tax details, parts categories, sourcing documents, and ability to issue a valid invoice are reviewed during onboarding.",
  },
  {
    tier: "T3",
    title: "Independent parts supplier",
    detail:
      "Business/contact details, product origin documentation, invoice capability, and the exact part condition are recorded before a listing is offered.",
  },
];

const buyerSteps = [
  ["Request", "Share vehicle, part, quantity, photo, and destination."],
  ["Get quotes", "Review availability, source, condition, price, and ETA."],
  ["Compare", "Check fitment, invoice, warranty, and return terms."],
  ["Order", "Confirm the written quote and use its payment instructions."],
  ["Track", "Follow dispatch and delivery updates through SpareLab."],
  ["Settle", "Delivery is checked before vendor settlement under agreed terms."],
];

const legalSummaries = [
  {
    id: "privacy-policy",
    title: "Privacy",
    text: "A request may include contact details, vehicle identifiers, and an optional part photo. Use these details only to assess fitment, obtain a quote, coordinate the order, and provide support. This demo form does not transmit or store submissions.",
  },
  {
    id: "terms",
    title: "Terms of service",
    text: "A quote should state part description/condition, price, taxes, availability, delivery estimate, payment instructions, and applicable return/warranty terms. An order is confirmed only through the agreed written order flow.",
  },
  {
    id: "refund-policy",
    title: "Returns & refunds",
    text: "Return eligibility, inspection, replacement/refund options, and timing must be confirmed in the order terms before purchase. Report damage or an incorrect item promptly and retain its packaging and invoice.",
  },
];

function MarketplaceDetailsSection() {
  const [vendorSubmitted, setVendorSubmitted] = useState(false);
  const [inventoryFile, setInventoryFile] = useState("");
  const [vendorError, setVendorError] = useState("");

  const handleVendorSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const categories = formData.getAll("categories");
    if (categories.length === 0) {
      setVendorError("Choose at least one parts category.");
      return;
    }

    setVendorError("");
    trackEvent("vendor_application_preview", {
      categories,
    });
    setVendorSubmitted(true);
  };

  return (
    <>
      <section
        id="trust"
        aria-labelledby="trust-title"
        className="mx-auto w-[calc(100%-2rem)] max-w-[1120px] pb-12 sm:w-[calc(100%-3rem)] sm:pb-24"
      >
        <ScrollReveal>
          <div className="mb-8 text-center">
            <span className="glass-chip inline-flex rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
              Trust & transparency
            </span>
            <h2
              id="trust-title"
              className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white sm:text-4xl"
            >
              Know what you&apos;re buying—and who you&apos;re buying from.
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
              Vendor tiers describe sourcing channels, not a guarantee of
              quality. Confirm the exact part, condition, invoice, warranty,
              and order terms before payment.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {vendorTiers.map((item) => (
              <article
                key={item.tier}
                className="glass-panel rounded-2xl border p-5 sm:p-6"
              >
                <span className="glass-chip inline-flex rounded-lg px-2.5 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                  {item.tier}
                </span>
                <h3 className="mt-4 text-sm font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>

          <div className="glass-panel mt-4 grid gap-5 rounded-2xl border p-5 sm:grid-cols-2 sm:p-7">
            <div>
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Clear part-condition labels
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Genuine / OE", "OEM / OES", "Aftermarket", "Used / refurbished"].map(
                  (label) => (
                    <span
                      key={label}
                      className="glass-chip rounded-full px-3 py-1.5 text-[10px] font-semibold text-slate-700 dark:text-slate-200"
                    >
                      {label}
                    </span>
                  ),
                )}
              </div>
              <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                Labels are not interchangeable. Request supporting brand or
                source evidence when authenticity matters.
              </p>
            </div>
            <div className="border-t border-slate-200/70 pt-5 dark:border-white/10 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Protected order flow
              </h3>
              <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                In the proposed SpareLab flow, the buyer pays SpareLab. SpareLab
                records delivery and order checks before settling the vendor.
                Use only the payment instructions on your confirmed quote;
                settlement timing and any dispute hold must be stated in the
                order terms.
              </p>
            </div>
          </div>

          <div className="glass-inset mt-4 flex flex-col gap-3 rounded-2xl border p-4 text-xs leading-5 text-slate-600 dark:text-slate-300 sm:flex-row sm:items-center sm:justify-between sm:px-6">
            <p>
              Return eligibility and warranty depend on the item, manufacturer,
              and written order terms. Review them before paying.
            </p>
            <a
              href="#refund-policy"
              className="shrink-0 font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400"
            >
              Read return summary <span aria-hidden="true">→</span>
            </a>
          </div>
        </ScrollReveal>
      </section>

      <section
        id="buyer-flow"
        aria-labelledby="buyer-flow-title"
        className="mx-auto w-[calc(100%-2rem)] max-w-[1120px] pb-12 sm:w-[calc(100%-3rem)] sm:pb-24"
      >
        <ScrollReveal>
          <div className="mb-7 text-center">
            <span className="glass-chip inline-flex rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
              For buyers
            </span>
            <h2
              id="buyer-flow-title"
              className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white"
            >
              Request, compare, order, and track.
            </h2>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {buyerSteps.map(([title, detail], index) => (
              <li key={title} className="glass-panel rounded-2xl border p-5">
                <span className="glass-chip inline-flex size-8 items-center justify-center rounded-full text-xs font-bold text-emerald-700 dark:text-emerald-300">
                  {index + 1}
                </span>
                <h3 className="mt-3 text-sm font-semibold text-slate-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {detail}
                </p>
              </li>
            ))}
          </ol>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xs leading-5 text-slate-500 dark:text-slate-400">
            Network coverage currently lists 24 cities. Exact pin-code
            serviceability and delivery timelines vary by part and are
            confirmed with each quote. GST invoice availability is shown on the
            written offer.
          </p>
        </ScrollReveal>
      </section>

      <section
        id="vendor-signup"
        aria-labelledby="vendor-signup-title"
        className="mx-auto w-[calc(100%-2rem)] max-w-[900px] pb-12 sm:w-[calc(100%-3rem)] sm:pb-24"
      >
        <ScrollReveal>
          <div className="glass-panel rounded-3xl border p-5 sm:p-8 lg:p-10">
            <div className="mb-7 text-center">
              <span className="glass-chip inline-flex rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
                Join the vendor network
              </span>
              <h2
                id="vendor-signup-title"
                className="mt-4 text-2xl font-semibold tracking-[-0.045em] text-slate-950 dark:text-white sm:text-3xl"
              >
                Tell us about your parts business.
              </h2>
              <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">
                Share your business details for an onboarding conversation.
                Commission, payout timing, and eligibility are confirmed in
                writing before activation.
              </p>
            </div>

            <form onSubmit={handleVendorSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Business name
                  <input
                    required
                    name="businessName"
                    autoComplete="organization"
                    className="glass-control mt-1.5 min-h-11 w-full rounded-xl border px-3 text-xs font-normal text-slate-800 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:text-slate-100"
                  />
                </label>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300">
                  GSTIN <span className="font-normal text-slate-400">(if registered)</span>
                  <input
                    name="gstin"
                    autoComplete="off"
                    maxLength="15"
                    pattern="[0-9]{2}[A-Za-z]{5}[0-9]{4}[A-Za-z][A-Za-z0-9]Z[A-Za-z0-9]"
                    title="Enter a 15-character GSTIN or leave this blank."
                    className="glass-control mt-1.5 min-h-11 w-full rounded-xl border px-3 text-xs font-normal uppercase text-slate-800 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:text-slate-100"
                  />
                </label>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300">
                  City
                  <input
                    required
                    name="city"
                    autoComplete="address-level2"
                    className="glass-control mt-1.5 min-h-11 w-full rounded-xl border px-3 text-xs font-normal text-slate-800 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:text-slate-100"
                  />
                </label>
                <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Contact phone
                  <input
                    required
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    pattern="[+0-9 ()-]{8,20}"
                    className="glass-control mt-1.5 min-h-11 w-full rounded-xl border px-3 text-xs font-normal text-slate-800 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:text-slate-100"
                  />
                </label>
              </div>

              <fieldset>
                <legend className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                  Parts categories
                </legend>
                <div className="mt-2 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {["Engine", "Electrical", "Body", "Brakes", "Suspension", "Filters", "Accessories", "Other"].map(
                    (category) => (
                      <label
                        key={category}
                        className="glass-inset flex min-h-10 items-center gap-2 rounded-xl border px-3 text-xs text-slate-600 dark:text-slate-300"
                      >
                        <input
                          type="checkbox"
                          name="categories"
                          value={category}
                          className="accent-emerald-600"
                        />
                        {category}
                      </label>
                    ),
                  )}
                </div>
              </fieldset>
              {vendorError && (
                <p role="alert" className="text-xs text-rose-700 dark:text-rose-300">
                  {vendorError}
                </p>
              )}

              <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300">
                Inventory file <span className="font-normal text-slate-400">(optional CSV or Excel)</span>
                <input
                  name="inventory"
                  type="file"
                  accept=".csv,.xls,.xlsx"
                  onChange={(event) =>
                    setInventoryFile(event.currentTarget.files?.[0]?.name ?? "")
                  }
                  className="glass-control mt-1.5 min-h-11 w-full rounded-xl border px-3 py-2 text-xs font-normal text-slate-600 file:mr-3 file:rounded-full file:border-0 file:bg-emerald-50 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-emerald-700 dark:text-slate-300 dark:file:bg-emerald-950 dark:file:text-emerald-300"
                />
              </label>
              {inventoryFile && (
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Selected: {inventoryFile}. This preview does not upload the file.
                </p>
              )}
              <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                Inventory can be shared as a spreadsheet during onboarding.
                File sync/API options and commercial terms are discussed and
                agreed separately.
              </p>
              <button
                type="submit"
                onClick={() => trackEvent("vendor_signup_cta_click")}
                className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 text-xs font-semibold text-white transition hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
              >
                {vendorSubmitted ? "Application previewed" : "Preview vendor application"}
                {!vendorSubmitted && <span aria-hidden="true">→</span>}
              </button>
              {vendorSubmitted && (
                <p role="status" className="text-center text-xs text-emerald-700 dark:text-emerald-400">
                  Preview only—nothing was sent or saved. Vendor onboarding is
                  not connected to a service yet.
                </p>
              )}
            </form>

            <div className="mt-6 grid gap-3 border-t border-slate-200/70 pt-5 text-xs leading-5 text-slate-500 dark:border-white/10 dark:text-slate-400 sm:grid-cols-2">
              <p>
                <strong className="text-slate-700 dark:text-slate-200">Commission:</strong>{" "}
                discussed and disclosed in the vendor offer before activation.
              </p>
              <p>
                <strong className="text-slate-700 dark:text-slate-200">Payout:</strong>{" "}
                settle after delivery checks as stated in the agreed vendor terms;
                timing is not published until confirmed.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section
        id="support"
        aria-labelledby="support-title"
        className="mx-auto w-[calc(100%-2rem)] max-w-[1120px] pb-12 sm:w-[calc(100%-3rem)] sm:pb-24"
      >
        <ScrollReveal>
          <div className="glass-panel grid gap-6 rounded-3xl border p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
            <div>
              <span className="glass-chip inline-flex rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
                Contact & support
              </span>
              <h2
                id="support-title"
                className="mt-4 text-2xl font-semibold tracking-[-0.045em] text-slate-950 dark:text-white"
              >
                Need help with a part or order?
              </h2>
              <p className="mt-2 max-w-2xl text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">
                Contact channels, business address, and support hours are
                awaiting verified details. Use the request preview to prepare
                the information for a SpareLab conversation.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:min-w-48">
              <a
                href="#request"
                onClick={() => trackEvent("support_request_cta_click", { channel: "request_form" })}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-emerald-600 px-5 text-xs font-semibold text-white transition hover:bg-emerald-700"
              >
                Prepare a part request
              </a>
              <span className="text-center text-[10px] text-slate-400">
                WhatsApp / phone / email: setup pending
              </span>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <section
        id="faq"
        aria-labelledby="faq-title"
        className="mx-auto w-[calc(100%-2rem)] max-w-[900px] pb-12 sm:w-[calc(100%-3rem)] sm:pb-24"
      >
        <ScrollReveal>
          <div className="mb-7 text-center">
            <span className="glass-chip inline-flex rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
              Help & FAQs
            </span>
            <h2
              id="faq-title"
              className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white"
            >
              Before you place an order
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="glass-panel group rounded-2xl border p-4 sm:p-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-slate-900 marker:hidden dark:text-slate-100">
                  {faq.question}
                  <span className="text-emerald-600 transition-transform group-open:rotate-45 dark:text-emerald-400" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-3xl text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <section
        id="legal"
        aria-labelledby="legal-title"
        className="mx-auto w-[calc(100%-2rem)] max-w-[1120px] pb-12 sm:w-[calc(100%-3rem)] sm:pb-24"
      >
        <ScrollReveal>
          <div className="glass-panel rounded-3xl border p-5 sm:p-8">
            <h2
              id="legal-title"
              className="text-xl font-semibold tracking-[-0.04em] text-slate-950 dark:text-white"
            >
              Legal & policies
            </h2>
            <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
              These are plain-language summaries, not complete legal terms.
              Confirm and publish approved policies before accepting orders.
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {legalSummaries.map((policy) => (
                <article
                  id={policy.id}
                  key={policy.id}
                  className="glass-inset scroll-mt-24 rounded-2xl border p-4"
                >
                  <h3 className="text-xs font-semibold text-slate-900 dark:text-white">
                    {policy.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                    {policy.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}

export default MarketplaceDetailsSection;
