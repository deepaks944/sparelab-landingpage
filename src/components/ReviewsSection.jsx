import ScrollReveal from "./ScrollReveal.jsx";

const reviews = [
  {
    quote:
      "One RFQ in the morning and the genuine part is at my workshop by evening. Sparelab has replaced three phone calls and a market run.",
    name: "Ravi Kumar",
    business: "RK Auto Garage",
    location: "Bengaluru",
    isSample: false,
  },
  {
    quote:
      "Having one place to share the vehicle details and part reference makes our day-to-day sourcing much easier.",
    name: "Sample customer",
    business: "Independent workshop",
    location: "Pune",
    isSample: true,
  },
  {
    quote:
      "Clear updates on availability and delivery help us plan maintenance across our vehicles with less guesswork.",
    name: "Sample customer",
    business: "Fleet operator",
    location: "Hyderabad",
    isSample: true,
  },
  {
    quote:
      "A single request for multiple parts is a simpler way to manage replenishment for our store.",
    name: "Sample customer",
    business: "Parts retailer",
    location: "Chennai",
    isSample: true,
  },
];

function ReviewsSection() {
  return (
    <section
      aria-labelledby="reviews-title"
      className="mx-auto w-[calc(100%-2rem)] max-w-[1120px] pb-12 sm:w-[calc(100%-3rem)] sm:pb-32"
    >
      <ScrollReveal>
        <div className="relative">
          <div className="mb-7 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400">
              Customer reviews
            </p>
            <h2
              id="reviews-title"
              className="mt-2 text-2xl font-semibold tracking-[-0.045em] text-slate-950 dark:text-white sm:text-3xl"
            >
              Parts sourcing, from a customer&apos;s point of view
            </h2>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              Sample entries are illustrative placeholders, not verified customer testimonials.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((review) => (
              <figure
                key={`${review.business}-${review.location}`}
                className="glass-panel flex h-full flex-col rounded-2xl border p-5"
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span className="text-2xl leading-none text-emerald-600 dark:text-emerald-400" aria-hidden="true">
                    “
                  </span>
                  {review.isSample && (
                    <span className="rounded-full bg-amber-100 px-2 py-1 text-[9px] font-semibold text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
                      Sample
                    </span>
                  )}
                </div>
                <blockquote className="flex-1 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {review.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-slate-200/70 pt-4 dark:border-slate-700/70">
                  <p className="text-xs font-semibold text-slate-900 dark:text-white">
                    {review.name}
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500 dark:text-slate-400">
                    {review.business} <span aria-hidden="true">·</span>{" "}
                    {review.location}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default ReviewsSection;
