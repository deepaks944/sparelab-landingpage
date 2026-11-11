import ScrollReveal from "./ScrollReveal.jsx";

const audiences = [
  {
    title: "Garages",
    description:
      "Find parts for customer vehicles and follow each enquiry through delivery.",
    icon: "⌕",
  },
  {
    title: "Fleets",
    description:
      "Coordinate sourcing and order visibility across vehicles and locations.",
    icon: "▤",
  },
  {
    title: "Wholesalers",
    description:
      "Source parts and manage repeat procurement through one platform.",
    icon: "⇄",
  },
  {
    title: "Resellers",
    description:
      "Access a curated vendor network and SpareLab customer-facing quotes.",
    icon: "⌘",
  },
  {
    title: "Retailers",
    description:
      "Capture part requests and manage customer orders from enquiry to delivery.",
    icon: "▣",
  },
  {
    title: "Distributors",
    description:
      "Coordinate supply, procurement, and fulfilment across your business.",
    icon: "⇄",
  },
  {
    title: "Individuals",
    description: "Request automotive parts with vehicle and fitment details.",
    icon: "▣",
  },
];

function AudienceSection() {
  return (
    <section
      id="buyers"
      className="mx-auto w-[calc(100%-2rem)] max-w-[1120px] pb-12 sm:w-[calc(100%-3rem)] sm:pb-32"
    >
      <ScrollReveal>
        <div className="mb-8 text-center sm:mb-10">
          <span className="glass-chip inline-flex rounded-full px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:text-emerald-300">
            Built around your business
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-slate-950 dark:text-white sm:text-4xl">
            Built for every kind of parts buyer
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-500 dark:text-slate-400">
            Garages, fleets, wholesalers, resellers, retailers, distributors,
            and individuals can request parts through one coordinated
            marketplace.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className={
                audience.title === "Individuals" ? "lg:col-span-2" : ""
              }
            >
              <article className="glass-panel h-full rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg dark:hover:border-emerald-900 sm:p-6">
                <span className="glass-chip flex size-9 items-center justify-center rounded-xl text-lg text-emerald-700 dark:text-emerald-300">
                  {audience.icon}
                </span>
                <h3 className="mt-4 text-sm font-semibold text-slate-900 dark:text-slate-100">
                  {audience.title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  {audience.description}
                </p>
                <a
                  href="#request"
                  className="mt-4 inline-flex text-[10px] font-semibold text-emerald-700 hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
                >
                  See how it works{" "}
                  <span aria-hidden="true" className="ml-1">
                    →
                  </span>
                </a>
              </article>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

export default AudienceSection;
