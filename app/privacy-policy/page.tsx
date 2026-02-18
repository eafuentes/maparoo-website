import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MAParoo collects, uses, and protects your information.",
};

const sections = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-we-use-information", label: "How We Use Information" },
  { id: "data-storage-security", label: "Data Storage & Security" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "user-rights", label: "User Rights" },
  { id: "children-privacy", label: "Children's Privacy" },
  { id: "contact", label: "Contact Information" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--color-neutral-light)]">
      <main className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
          MAParoo
        </p>
        <h1 className="mt-2 text-4xl font-semibold text-[var(--color-charcoal)]">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-[var(--color-charcoal)]/70">
          Last updated: February 11, 2026
        </p>
        <p className="mt-6 text-base leading-7 text-[var(--color-charcoal)]/80">
          This Privacy Policy explains how MAParoo collects, uses, and protects
          your information when you use our mobile application. We are committed
          to protecting family data and keeping kid profiles private.
        </p>

        <div className="mt-10 rounded-2xl border border-white/70 bg-white/80 p-6">
          <h2 className="text-lg font-semibold text-[var(--color-charcoal)]">
            Table of contents
          </h2>
          <ul className="mt-4 grid gap-2 text-sm text-[var(--color-charcoal)]/80 sm:grid-cols-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
                >
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <section id="information-we-collect" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Information We Collect
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            We collect the minimum data needed to provide a safe and helpful
            experience for families.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>Email address and authentication data.</li>
            <li>
              Kid profiles (names and ages) that are private and never shared.
            </li>
            <li>Photos uploaded by users.</li>
            <li>Reviews and ratings you submit.</li>
            <li>Location data when the app is in use.</li>
            <li>
              Device information such as operating system and app version.
            </li>
          </ul>
        </section>

        <section id="how-we-use-information" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            How We Use Information
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>Provide age-appropriate recommendations.</li>
            <li>Display user-contributed content like photos and reviews.</li>
            <li>Improve the app experience and features.</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </section>

        <section id="data-storage-security" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Data Storage & Security
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>Data is hosted on Supabase (US-based servers).</li>
            <li>We use industry-standard encryption to protect your data.</li>
            <li>Kid profiles are private and not shared with other users.</li>
          </ul>
        </section>

        <section id="third-party-services" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Third-Party Services
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            We rely on trusted partners to run MAParoo:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>Google Maps API for maps and place data.</li>
            <li>Supabase for authentication, database, and storage.</li>
            <li>Expo for app delivery.</li>
          </ul>
        </section>

        <section id="user-rights" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            User Rights
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>Access your data.</li>
            <li>Delete your account and data.</li>
            <li>Opt-out of data collection where available.</li>
          </ul>
        </section>

        <section id="children-privacy" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Children&apos;s Privacy
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            MAParoo is designed for families with children. Kid profiles are
            private, protected, and fully controlled by parents or guardians.
          </p>
        </section>

        <section id="contact" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Contact Information
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            If you have questions about this policy, contact us at
            <a
              href="mailto:support@maparoo.app"
              className="ml-1 font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
            >
              support@maparoo.app
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
