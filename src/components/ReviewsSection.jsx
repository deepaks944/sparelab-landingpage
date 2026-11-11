import ScrollReveal from "./ScrollReveal.jsx";

function ReviewsSection() {
  return (
    <section
      aria-labelledby="reviews-title"
      className="mx-auto w-[calc(100%-2rem)] max-w-[1120px] pb-12 sm:w-[calc(100%-3rem)] sm:pb-32"
    >
      <ScrollReveal>
        <div className="glass-panel rounded-3xl border px-5 py-8 text-center sm:px-10 sm:py-10">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-400">
            Customer stories
          </p>
          <h2
            id="reviews-title"
            className="mt-2 text-2xl font-semibold tracking-[-0.045em] text-slate-950 dark:text-white sm:text-3xl"
          >
            Trust is earned—and verified.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
            Verified customer testimonials and approved customer logos will be
            added with permission. We don&apos;t publish sample reviews as real
            customer endorsements.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}

export default ReviewsSection;
