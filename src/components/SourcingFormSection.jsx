import { useState } from "react";
import ScrollReveal from "./ScrollReveal.jsx";

function SourcingFormSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="request"
      className="mx-auto w-[calc(100%-2rem)] max-w-[760px] pb-12 sm:w-[calc(100%-3rem)] sm:pb-32"
    >
      <ScrollReveal>
        <div className="glass-panel rounded-3xl border p-5 sm:p-8 lg:p-10">
          <div className="mb-7 text-center">
            <span className="glass-chip inline-flex rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
              Phase 1 · Staff-assisted requests
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.045em] text-slate-950 dark:text-white sm:text-3xl">
              Tell SpareLab what part you need.
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">
              Share the part, vehicle, quantity, and destination. SpareLab staff will coordinate sourcing in Phase 1; self-serve requests are planned for Phase 2.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                Part name or number
                <input
                  required
                  name="part"
                  placeholder="Part name, OE/OEM reference, or description"
                  className="glass-control mt-1.5 min-h-11 w-full rounded-xl border px-3 text-xs font-normal text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:text-slate-100"
                />
              </label>
              <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                Vehicle make & model
                <input
                  required
                  name="vehicle"
                  placeholder="Make, model, year, or fitment details"
                  className="glass-control mt-1.5 min-h-11 w-full rounded-xl border px-3 text-xs font-normal text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:text-slate-100"
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                Quantity
                <input
                  required
                  min="1"
                  type="number"
                  name="quantity"
                  placeholder="How many do you need?"
                  className="glass-control mt-1.5 min-h-11 w-full rounded-xl border px-3 text-xs font-normal text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:text-slate-100"
                />
              </label>
              <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                Delivery destination
                <input
                  required
                  name="destination"
                  placeholder="City or postal code"
                  className="glass-control mt-1.5 min-h-11 w-full rounded-xl border px-3 text-xs font-normal text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:text-slate-100"
                />
              </label>
            </div>
            <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300">
              Anything else we should know? <span className="font-normal text-slate-400">(optional)</span>
              <textarea
                name="details"
                rows="3"
                placeholder="Share a part reference, preferred brand, or deadline"
                className="glass-control mt-1.5 w-full resize-y rounded-xl border px-3 py-2.5 text-xs font-normal text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:text-slate-100"
              />
            </label>
            <button
              type="submit"
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              {submitted ? "Request previewed" : "Preview part request"}
              {!submitted && <span aria-hidden="true">→</span>}
            </button>
            {submitted && (
              <p role="status" className="text-center text-xs text-emerald-700 dark:text-emerald-400">
                Preview only—this form does not submit a request. In Phase 1, SpareLab staff coordinate enquiries.
              </p>
            )}
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default SourcingFormSection;
