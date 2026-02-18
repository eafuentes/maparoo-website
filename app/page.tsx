"use client";

import { useState } from "react";
import Image from "next/image";
import AppStoreButton from "@/components/app-store-button";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";

export default function Home() {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    title: string;
  } | null>(null);

  return (
    <div className="min-h-screen bg-[var(--color-neutral-light)]">
      <Hero />
      <Features />
      <section className="bg-[var(--color-neutral-light)] py-16">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-secondary)]">
                Made for real family life
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[var(--color-charcoal)] sm:text-4xl">
                Plan weekends in minutes, not hours
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--color-charcoal)]/70">
                Save your favorite spots, share must-know tips, and keep
                everyone&apos;s preferences organized in one place. MAParoo
                makes it simple to say yes to more kid-friendly adventures.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[var(--color-charcoal)]/75">
                <li>Quick filters for age, amenities, and stroller access</li>
                <li>Follow other parents in your community</li>
                <li>Get notified when new events pop up nearby</li>
              </ul>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Map view with amenities!!",
                  src: "/explore.jpg",
                },
                {
                  title: "Parent review highlights",
                  src: "/amenities.jpg",
                },
                {
                  title: "Kid profile setup",
                  src: "/kids-profile.jpg",
                },
                {
                  title: "Upcoming kid-friendly events",
                  src: "/kids-events-ui.svg",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setActiveImage(item)}
                    className="group relative h-40 w-full overflow-hidden rounded-xl bg-[var(--color-sky)]/70"
                    aria-label={`View ${item.title} image`}
                  >
                    {item.src.endsWith(".svg") ? (
                      <img
                        src={item.src}
                        alt={item.title}
                        className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover transition-transform duration-200 group-hover:scale-105"
                        priority={item.src === "/amenities.jpg"}
                      />
                    )}
                    <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[var(--color-charcoal)] shadow">
                      Tap to expand
                    </span>
                  </button>
                  <p className="mt-4 text-sm font-semibold text-[var(--color-charcoal)]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 px-6 text-center sm:px-10">
          <h2 className="text-3xl font-semibold text-[var(--color-charcoal)] sm:text-4xl">
            Download MAParoo on the App Store
          </h2>
          <p className="max-w-2xl text-base leading-7 text-[var(--color-charcoal)]/70">
            Real recommendations from real families. Find playgrounds, museums,
            restaurants, and activities perfect for your child&apos;s age.
          </p>
          <AppStoreButton href="https://apps.apple.com/app/id6757502261" />
        </div>
      </section>
      <Footer />

      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative w-full max-w-[min(92vw,820px)] overflow-hidden rounded-3xl bg-white shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[var(--color-neutral-light)] px-6 py-4">
              <p className="text-sm font-semibold text-[var(--color-charcoal)]">
                {activeImage.title}
              </p>
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="rounded-full bg-[var(--color-neutral-light)] px-3 py-1 text-xs font-semibold text-[var(--color-charcoal)]"
              >
                Close
              </button>
            </div>
            <div className="relative flex h-[75vh] items-center justify-center bg-[var(--color-sky)]/70 p-4 sm:h-[78vh]">
              <div className="relative h-full w-full">
                {activeImage.src.endsWith(".svg") ? (
                  <img
                    src={activeImage.src}
                    alt={activeImage.title}
                    className="h-full w-full object-contain"
                  />
                ) : (
                  <Image
                    src={activeImage.src}
                    alt={activeImage.title}
                    fill
                    sizes="(max-width: 768px) 92vw, 820px"
                    className="object-contain"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
