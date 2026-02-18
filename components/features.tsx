const features = [
  {
    title: "Age-Based Discovery",
    description:
      "Filter places by your child’s age (0-12 years) to find activities that match their developmental stage.",
  },
  {
    title: "Parent-Powered Reviews",
    description:
      "See real photos and reviews from other parents. Know what to expect before you go.",
  },
  {
    title: "Interactive Maps",
    description:
      "Explore nearby places with detailed amenity information: parking, restrooms, nursing rooms, and more.",
  },
  {
    title: "Private Kid Profiles",
    description:
      "Create profiles for each child to get personalized recommendations. Your data stays private.",
  },
  {
    title: "Events Calendar",
    description:
      "Never miss kid-friendly events in your area. From story time to festivals.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white py-16">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
            Why families love MAParoo
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--color-charcoal)] sm:text-4xl">
            Everything you need to plan kid-friendly adventures
          </h2>
          <p className="mt-4 text-base leading-7 text-[var(--color-charcoal)]/70">
            Search confidently with age-aware recommendations, trusted parent
            insights, and maps that call out every amenity your family cares
            about.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-[var(--color-neutral-light)] bg-[var(--color-neutral-light)]/50 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-[var(--color-charcoal)]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-charcoal)]/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
