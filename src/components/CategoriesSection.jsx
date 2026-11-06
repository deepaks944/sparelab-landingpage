import ScrollReveal from "./ScrollReveal.jsx";

const categories = [
  { icon: "⚙", name: "Engine Components", count: "Parts that power every journey" },
  { icon: "◈", name: "Brake Systems", count: "Reliable stopping, every time" },
  { icon: "⌁", name: "Suspension & Steering", count: "Control for every road" },
  { icon: "ϟ", name: "Electrical & ECU", count: "Smarter vehicle systems" },
  { icon: "▣", name: "Filters & Fluids", count: "Essential everyday maintenance" },
  { icon: "✳", name: "Clutch & Transmission", count: "Power delivered smoothly" },
  { icon: "◇", name: "Body & Exterior", count: "The details that make it whole" },
  { icon: "⌘", name: "Cooling Systems", count: "Keep performance in balance" },
];

function CategoriesSection() {
  return (
    <section
      id="marketplace"
      className="mx-auto w-[calc(100%-2rem)] max-w-[1120px] pb-12 sm:w-[calc(100%-3rem)] sm:pb-32"
    >
      <ScrollReveal>
      <div className="mb-8 text-center sm:mb-10">
        <span className="glass-chip inline-flex rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
          Find what you need
        </span>
        <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white sm:text-4xl">
          Explore parts across every system
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
          Search across automotive systems, then request the parts that match your vehicle and fitment requirements.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {categories.map((category) => (
          <div key={category.name}>
            <a
              href="#request"
              className="glass-panel group flex h-full min-h-36 flex-col rounded-2xl border p-4 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg dark:hover:border-emerald-900 sm:min-h-40 sm:p-5"
            >
              <span className="glass-chip flex size-9 items-center justify-center rounded-xl text-lg text-emerald-700 dark:text-emerald-300">
                {category.icon}
              </span>
              <h3 className="mt-4 text-xs font-semibold text-slate-900 dark:text-slate-100 sm:text-sm">
                {category.name}
              </h3>
              <p className="mt-1.5 text-[10px] leading-4 text-slate-500 dark:text-slate-400">
                {category.count}
              </p>
              <span className="mt-auto pt-3 text-[10px] font-semibold text-emerald-700 dark:text-emerald-400">
                Explore parts <span aria-hidden="true">→</span>
              </span>
            </a>
          </div>
        ))}
      </div>
      </ScrollReveal>
    </section>
  );
}

export default CategoriesSection;
