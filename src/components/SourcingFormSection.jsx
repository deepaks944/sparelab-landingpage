import { useState } from "react";
import ScrollReveal from "./ScrollReveal.jsx";
import trackEvent from "../utils/analytics.js";

const maxVehicleYear = new Date().getFullYear() + 1;

function SourcingFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [photoName, setPhotoName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    trackEvent("part_request_preview", {
      hasPhoto: Boolean(formData.get("photo")?.size),
    });
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
              Buyer request
            </span>
            <h2 className="mt-4 text-2xl font-semibold tracking-[-0.045em] text-slate-950 dark:text-white sm:text-3xl">
              Tell SpareLab what part you need.
            </h2>
            <p className="mx-auto mt-2 max-w-lg text-xs leading-5 text-slate-500 dark:text-slate-400 sm:text-sm">
              Add fitment and contact details so a request can be reviewed. This
              form is a local preview only; it does not transmit or save your
              information.
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
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                Vehicle make
                <input
                  required
                  name="make"
                  autoComplete="off"
                  placeholder="e.g. Maruti Suzuki"
                  className="glass-control mt-1.5 min-h-11 w-full rounded-xl border px-3 text-xs font-normal text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:text-slate-100"
                />
              </label>
              <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                Vehicle model
                <input
                  required
                  name="model"
                  placeholder="e.g. Swift VXi"
                  className="glass-control mt-1.5 min-h-11 w-full rounded-xl border px-3 text-xs font-normal text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:text-slate-100"
                />
              </label>
              <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                Model year
                <input
                  required
                  name="year"
                  type="number"
                  min="1950"
                  max={maxVehicleYear}
                  placeholder="e.g. 2022"
                  className="glass-control mt-1.5 min-h-11 w-full rounded-xl border px-3 text-xs font-normal text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:text-slate-100"
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                VIN or registration number{" "}
                <span className="font-normal text-slate-400">(optional)</span>
                <input
                  name="vehicleIdentifier"
                  autoComplete="off"
                  placeholder="VIN or vehicle registration"
                  className="glass-control mt-1.5 min-h-11 w-full rounded-xl border px-3 text-xs font-normal text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:text-slate-100"
                />
              </label>
              <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                City / delivery pin code
                <input
                  required
                  name="city"
                  autoComplete="address-level2"
                  placeholder="Where is the part needed?"
                  className="glass-control mt-1.5 min-h-11 w-full rounded-xl border px-3 text-xs font-normal text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:text-slate-100"
                />
              </label>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                Phone number
                <input
                  required
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  pattern="[+0-9 ()-]{8,20}"
                  placeholder="For quote follow-up"
                  className="glass-control mt-1.5 min-h-11 w-full rounded-xl border px-3 text-xs font-normal text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 dark:text-slate-100"
                />
              </label>
              <label className="block text-[10px] font-semibold text-slate-600 dark:text-slate-300">
                Part photo <span className="font-normal text-slate-400">(optional)</span>
                <input
                  name="photo"
                  type="file"
                  accept="image/*"
                  onChange={(event) =>
                    setPhotoName(event.currentTarget.files?.[0]?.name ?? "")
                  }
                  className="glass-control mt-1.5 min-h-11 w-full rounded-xl border px-3 py-2 text-xs font-normal text-slate-600 file:mr-3 file:rounded-full file:border-0 file:bg-emerald-50 file:px-3 file:py-1 file:text-xs file:font-semibold file:text-emerald-700 dark:text-slate-300 dark:file:bg-emerald-950 dark:file:text-emerald-300"
                />
              </label>
            </div>
            {photoName && (
              <p className="text-[10px] text-slate-500 dark:text-slate-400">
                Selected: {photoName}. The image stays on this device.
              </p>
            )}
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
              onClick={() => trackEvent("part_request_cta_click")}
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 text-xs font-semibold text-white shadow-sm transition hover:bg-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
            >
              {submitted ? "Request previewed" : "Preview request"}
              {!submitted && <span aria-hidden="true">→</span>}
            </button>
            {submitted && (
              <p role="status" className="text-center text-xs text-emerald-700 dark:text-emerald-400">
                Preview only—your details were not sent or saved. Delivery
                coverage, ETA, and GST invoice availability must be confirmed
                with the written quote.
              </p>
            )}
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default SourcingFormSection;
