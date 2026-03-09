import AppStoreButton from "./app-store-button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-sky)]">
      <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-[var(--color-accent)]/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[var(--color-secondary)]/20 blur-3xl" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:gap-16 lg:py-24">
        <div className="flex-1">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
            Built by parents, for parents
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-[var(--color-charcoal)] sm:text-5xl lg:text-6xl">
            Discover Kid-Friendly Places, Powered by Parents
          </h1>
          <p className="mt-5 text-lg leading-8 text-[var(--color-charcoal)]/80">
            MAParoo helps families discover and share kid-friendly places with
            age-appropriate recommendations. Find playgrounds, museums,
            restaurants, and activities perfect for your child&apos;s age.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <AppStoreButton href="https://apps.apple.com/us/app/solimo/id6758738965" />
            <a
              href="#features"
              className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
            >
              Explore features
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-[var(--color-charcoal)]/70">
            <span className="rounded-full bg-white px-3 py-1">Ages 0-12</span>
            <span className="rounded-full bg-white px-3 py-1">
              Real parent reviews
            </span>
            <span className="rounded-full bg-white px-3 py-1">
              Private kid profiles
            </span>
          </div>
        </div>
        <div className="flex-1">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Nearby playgrounds",
              "Weekend events",
              "Kid-friendly dining",
              "Family museums",
            ].map((label) => (
              <div
                key={label}
                className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm"
              >
                <p className="font-semibold text-[var(--color-charcoal)]">
                  {label}
                </p>
                <p className="mt-2 text-sm text-[var(--color-charcoal)]/70">
                  Tailored picks based on your child&apos;s age and location.
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-3xl border border-white/80 bg-white/90 p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-[var(--color-charcoal)]">
                Today&apos;s top spot
              </p>
              <span className="rounded-full bg-[var(--color-accent)]/20 px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
                4.9 • 312 reviews
              </span>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-[var(--color-charcoal)]">
              Riverside Adventure Park
            </h3>
            <p className="mt-2 text-sm text-[var(--color-charcoal)]/70">
              Shade, restrooms, stroller-friendly paths, and a splash pad for
              kids 2-8.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
