import ScrollReveal from "./ScrollReveal.jsx";
import trackEvent from "../utils/analytics.js";

function FinalCtaSection() {
  return (
    <section
      id="get-started"
      className="mx-auto w-[calc(100%-2rem)] max-w-[1120px] pb-12 sm:w-[calc(100%-3rem)] sm:pb-24"
    >
      <ScrollReveal>
        <div className="glass-cta relative overflow-hidden rounded-3xl border px-6 py-10 text-center text-white sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-20 -top-32 size-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-48 -left-20 size-96 rounded-full border border-white/10" />
          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-emerald-50">
              One coordinated parts lifecycle
            </span>
            <h2 className="mx-auto mt-5 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.05em] sm:text-4xl">
              From a part request to a settled order.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-emerald-50/85">
              SpareLab buys and resells under its own GSTIN, mediates anonymised
              communication, and controls procurement, pricing, delivery, and
              settlement. Revenue includes transaction margin, subscriptions,
              and search credits.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#request"
                onClick={() => trackEvent("part_request_cta_click", { location: "final_cta" })}
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 text-xs font-semibold text-emerald-800 transition hover:bg-emerald-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Request a part{" "}
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
              <a
                href="#vendor-signup"
                onClick={() => trackEvent("vendor_signup_cta_click", { location: "final_cta" })}
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/35 px-6 text-xs font-semibold text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore vendor operations
              </a>
            </div>
            <p className="mt-6 text-[10px] text-emerald-50/70">
              Merchant of Record <span className="mx-2">·</span> Buyer/vendor
              privacy <span className="mx-2">·</span> Automotive parts
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default FinalCtaSection;
