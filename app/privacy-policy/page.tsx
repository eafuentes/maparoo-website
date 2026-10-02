import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How MAParoo collects, uses, and protects your information.",
};

const sections = [
  { id: "information-we-collect", label: "Information We Collect" },
  { id: "how-kid-data-is-used", label: "How Kid Data Is Used" },
  { id: "data-sent-to-openai", label: "Other Data Sent to OpenAI" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "your-choices", label: "Your Choices" },
  { id: "contact", label: "Contact Information" },
];

const linkClass =
  "font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]";

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
          Last updated: October 1, 2026
        </p>
        <p className="mt-6 text-base leading-7 text-[var(--color-charcoal)]/80">
          This Privacy Policy explains how MAParoo collects, uses, and protects
          your information when you use our mobile application.
        </p>

        <div className="mt-10 rounded-2xl border border-white/70 bg-white/80 p-6">
          <h2 className="text-lg font-semibold text-[var(--color-charcoal)]">
            Table of contents
          </h2>
          <ul className="mt-4 grid gap-2 text-sm text-[var(--color-charcoal)]/80 sm:grid-cols-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className={linkClass}>
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
            We collect the following when you use MAParoo.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>
              Account: email, password (stored by Supabase), and an optional
              display name.
            </li>
            <li>Sign-in can be email, Google, or Sign in with Apple.</li>
            <li>
              Location only while the app is in use, to show nearby places. We
              do not keep a location history for ads.
            </li>
            <li>
              Kid profiles the parent creates: name, birth date, and interests.
              These are private to that parent. Other users cannot see them.
            </li>
            <li>
              Content the parent posts: reviews, photos, and short videos.
              Reviews, photos, and videos are public inside the app.
            </li>
            <li>Crash and diagnostic data.</li>
            <li>Subscription status.</li>
          </ul>
        </section>

        <section id="how-kid-data-is-used" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            How Kid Data Is Used
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>
              Names and birth dates stay in our database (Supabase).
            </li>
            <li>
              For Plan My Day, recommendations, and search, we send OpenAI the
              child&apos;s age in months (calculated from the birth date) and
              their interests. We do not send the child&apos;s name.
            </li>
            <li>
              The parent can use the map without creating a kid profile. AI
              features that need ages only run when the parent has added one
              and uses those features.
            </li>
          </ul>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            Other parents cannot see a kid profile. Ages and interests are sent
            to OpenAI only for the features above.
          </p>
        </section>

        <section id="data-sent-to-openai" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Other Data Sent to OpenAI
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>The text of a search.</li>
            <li>
              Public parent reviews on a place, used only to write the short
              &quot;What parents say&quot; summary. Those reviews are already
              visible to other parents.
            </li>
          </ul>
        </section>

        <section id="third-party-services" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Third-Party Services
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            We use these services to run MAParoo:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>
              Supabase: accounts, database, and file storage.{" "}
              <a href="https://supabase.com/privacy" className={linkClass}>
                supabase.com/privacy
              </a>
            </li>
            <li>
              Google: Maps, Places, and Sign-In.{" "}
              <a
                href="https://policies.google.com/privacy"
                className={linkClass}
              >
                policies.google.com/privacy
              </a>
            </li>
            <li>
              OpenAI: search, recommendations, Plan My Day, and review
              summaries, as described above.{" "}
              <a
                href="https://openai.com/policies/privacy-policy"
                className={linkClass}
              >
                openai.com/policies/privacy-policy
              </a>
            </li>
            <li>
              Apple: Sign in with Apple and subscriptions through the App
              Store.{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                className={linkClass}
              >
                apple.com/legal/privacy
              </a>
            </li>
            <li>
              RevenueCat: subscription status.{" "}
              <a href="https://www.revenuecat.com/privacy" className={linkClass}>
                revenuecat.com/privacy
              </a>
            </li>
            <li>
              Sentry: crash reports.{" "}
              <a href="https://sentry.io/privacy/" className={linkClass}>
                sentry.io/privacy
              </a>
            </li>
            <li>
              Ticketmaster: event listings, only when someone opens the Events
              tab.{" "}
              <a
                href="https://www.ticketmaster.com/privacy"
                className={linkClass}
              >
                ticketmaster.com/privacy
              </a>
            </li>
            <li>
              Expo: delivering the app.{" "}
              <a href="https://expo.dev/privacy" className={linkClass}>
                expo.dev/privacy
              </a>
            </li>
          </ul>
        </section>

        <section id="your-choices" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Your Choices
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            We do not sell personal information, and we do not use data for
            advertising or tracking across other companies&apos; apps.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>
              A parent can delete their account inside the app. Deleting the
              account does not cancel an Apple subscription; that is managed in
              Apple ID settings. Reviews and other public posts may remain
              without the account name.
            </li>
            <li>
              A signed-in parent can report a review, photo, or video, and can
              block another parent. Blocking hides that person&apos;s posts for
              the person who blocked them.
            </li>
          </ul>
        </section>

        <section id="contact" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Contact Information
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            If you have questions about this policy, contact us at
            <a href="mailto:support@maparoo.app" className={`ml-1 ${linkClass}`}>
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
