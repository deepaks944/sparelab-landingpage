import ScrollReveal from "./ScrollReveal.jsx";
import marketplaceStats from "../data/marketplaceStats.js";
import CountUp from "./CountUp.jsx";

function CountersSection() {
  return (
    <section
      aria-label="SpareLab marketplace statistics"
      className="mx-auto w-[calc(100%-2rem)] max-w-[1120px] pb-10 sm:w-[calc(100%-3rem)] sm:pb-24"
    >
      <ScrollReveal>
        <div className="glass-panel grid grid-cols-2 gap-y-7 rounded-2xl border px-3 py-6 sm:grid-cols-3 sm:gap-y-0 sm:px-5 sm:py-8">
          {marketplaceStats.map((stat) => (
            <div key={stat.label} className="py-2 text-center">
              <p
                aria-hidden="true"
                className="text-3xl font-semibold tracking-[-0.06em] text-slate-950 dark:text-white sm:text-4xl"
              >
                <CountUp value={stat.value} suffix={stat.suffix} />
              </p>
              <span className="sr-only">
                {stat.value.toLocaleString()}
                {stat.suffix} {stat.label}
              </span>
              <p className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

export default CountersSection;
