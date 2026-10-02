import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for the MAParoo mobile application, including subscriptions, user content, and kid profiles.",
};

const sections = [
  { id: "agreement", label: "Agreement to Terms" },
  { id: "eligibility", label: "Eligibility" },
  { id: "your-account", label: "Your Account" },
  { id: "subscriptions", label: "Subscriptions and Payment" },
  { id: "acceptable-use", label: "Acceptable Use" },
  { id: "user-content", label: "User Content" },
  { id: "place-data", label: "Place Data" },
  { id: "kid-profiles", label: "Kid Profiles" },
  { id: "third-party-services", label: "Third-Party Services" },
  { id: "disclaimers", label: "Disclaimers" },
  { id: "limitation-of-liability", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "termination", label: "Termination" },
  { id: "governing-law", label: "Governing Law" },
  { id: "changes", label: "Changes to These Terms" },
  { id: "contact", label: "Contact" },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[var(--color-neutral-light)]">
      <main className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
          MAParoo
        </p>
        <h1 className="mt-2 text-4xl font-semibold text-[var(--color-charcoal)]">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-[var(--color-charcoal)]/70">
          Last updated: May 1, 2026
        </p>
        <p className="mt-1 text-sm text-[var(--color-charcoal)]/70">
          Effective date: May 1, 2026
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

        <section id="agreement" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Agreement to Terms
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            By downloading, installing, or using the MAParoo mobile application
            (&quot;the App&quot;), you agree to these Terms of Service
            (&quot;Terms&quot;). If you do not agree, do not use the App.
          </p>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            These Terms apply to all users, including parents, caregivers, and
            guests browsing community content.
          </p>
        </section>

        <section id="eligibility" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Eligibility
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>You must be at least 18 years old to create an account.</li>
            <li>
              You must have the legal capacity to enter into a binding
              contract.
            </li>
            <li>
              You agree to provide accurate registration information and to
              keep it up to date.
            </li>
          </ul>
        </section>

        <section id="your-account" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Your Account
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>
              You are responsible for keeping your password secure and for all
              activity under your account.
            </li>
            <li>
              Notify us immediately at{" "}
              <a
                href="mailto:support@maparoo.app"
                className="font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
              >
                support@maparoo.app
              </a>{" "}
              if you believe your account has been accessed without
              authorization.
            </li>
            <li>
              We reserve the right to suspend or terminate accounts that
              violate these Terms.
            </li>
          </ul>
        </section>

        <section id="subscriptions" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Subscriptions and Payment
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>
              MAParoo offers optional paid subscriptions (&quot;MAParoo+&quot;,
              &quot;MAParoo Family&quot;) via Apple In-App Purchase.
            </li>
            <li>
              Subscriptions auto-renew at the end of each billing period unless
              you cancel at least 24 hours before the renewal date.
            </li>
            <li>Cancel anytime via your Apple ID → Subscriptions.</li>
            <li>
              Free trials, where offered, automatically convert to paid
              subscriptions if not cancelled before the trial ends.
            </li>
            <li>
              Refunds are handled by Apple per their{" "}
              <a
                href="https://support.apple.com/HT204084"
                className="font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
              >
                refund policy
              </a>
              .
            </li>
          </ul>
        </section>

        <section id="acceptable-use" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Acceptable Use
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            You agree NOT to:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>
              Post content that is unlawful, hateful, harassing, defamatory,
              sexually explicit, or harmful to children.
            </li>
            <li>
              Submit fake reviews, fake amenity verifications, or otherwise
              manipulate community data.
            </li>
            <li>
              Scrape, reverse-engineer, or attempt to derive the source code of
              the App or its APIs.
            </li>
            <li>
              Use the App to violate any law, infringe intellectual property
              rights, or invade privacy.
            </li>
            <li>Impersonate any person or entity.</li>
            <li>
              Upload content that contains identifiable images of children
              other than your own without consent of their parent/guardian.
            </li>
          </ul>
        </section>

        <section id="user-content" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            User Content
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>
              You retain ownership of the reviews, photos, and other content
              you post.
            </li>
            <li>
              By posting, you grant MAParoo a worldwide, royalty-free,
              non-exclusive license to display, distribute, and modify your
              content within the App and our marketing materials, provided no
              children&apos;s faces are used in marketing without explicit
              consent.
            </li>
            <li>
              We may remove content that violates these Terms or is reported by
              other users, at our sole discretion.
            </li>
            <li>
              A parent can report a post or block another parent in the app.
            </li>
          </ul>
        </section>

        <section id="place-data" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Place Data
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>
              Place data is sourced from Google Places, Ticketmaster, and
              parent contributions. We do not guarantee accuracy.
            </li>
            <li>
              Always verify hours, prices, accessibility, and amenities
              directly with the venue before relying on them — especially for
              kid-critical needs (changing tables, allergens, age policies).
            </li>
            <li>
              We are not responsible for any decision you make based on data
              shown in the App.
            </li>
          </ul>
        </section>

        <section id="kid-profiles" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Kid Profiles
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>Kid profiles are private to your account.</li>
            <li>
              You are responsible for the accuracy of any kid information you
              store.
            </li>
            <li>
              We do not market to kids and do not knowingly collect data from
              anyone under 13. See our{" "}
              <a
                href="/privacy-policy"
                className="font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
              >
                Privacy Policy
              </a>
              .
            </li>
          </ul>
        </section>

        <section id="third-party-services" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Third-Party Services
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            The App integrates with Apple StoreKit, Google (Maps, Places,
            Sign-In), Supabase, RevenueCat, Sentry, and Ticketmaster. It also
            uses OpenAI for search, recommendations, Plan My Day, and review
            summaries, as described in our{" "}
            <a
              href="/privacy-policy"
              className="font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
            >
              Privacy Policy
            </a>
            . Use of these services is also governed by their respective terms.
          </p>
        </section>

        <section id="disclaimers" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Disclaimers
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot;,
            WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT
            WARRANT THAT THE APP WILL BE UNINTERRUPTED, ERROR-FREE, OR THAT
            PLACE DATA WILL BE ACCURATE, COMPLETE, OR CURRENT.
          </p>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            NOTHING IN THE APP CONSTITUTES MEDICAL, LEGAL, SAFETY, OR CHILDCARE
            ADVICE.
          </p>
        </section>

        <section id="limitation-of-liability" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Limitation of Liability
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, MAPAROO AND ITS AFFILIATES,
            OFFICERS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY
            INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES
            ARISING OUT OF OR RELATED TO YOUR USE OF THE APP.
          </p>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            OUR TOTAL CUMULATIVE LIABILITY SHALL NOT EXCEED THE AMOUNT YOU HAVE
            PAID US IN THE 12 MONTHS BEFORE THE CLAIM AROSE, OR USD $100,
            WHICHEVER IS GREATER.
          </p>
        </section>

        <section id="indemnification" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Indemnification
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            You agree to indemnify and hold MAParoo harmless from any claims,
            damages, or expenses arising out of your content, your violation of
            these Terms, or your violation of any third-party rights.
          </p>
        </section>

        <section id="termination" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Termination
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[var(--color-charcoal)]/75">
            <li>
              You may stop using the App at any time and delete your account in
              Settings.
            </li>
            <li>
              We may suspend or terminate your access for violations of these
              Terms.
            </li>
            <li>
              Upon termination, public content (reviews, photos) may be
              retained in anonymized form unless deletion is requested.
            </li>
          </ul>
        </section>

        <section id="governing-law" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Governing Law
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            These Terms are governed by the laws of the State of California,
            USA, without regard to conflict of law principles. Disputes shall
            be resolved in the courts of San Diego County, California.
          </p>
        </section>

        <section id="changes" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Changes to These Terms
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            We may modify these Terms from time to time. Material changes will
            be communicated via email or in-app notice. Continued use after
            changes constitutes acceptance.
          </p>
        </section>

        <section id="contact" className="mt-12">
          <h2 className="text-2xl font-semibold text-[var(--color-charcoal)]">
            Contact
          </h2>
          <p className="mt-4 text-sm leading-6 text-[var(--color-charcoal)]/80">
            Questions about these Terms? Email
            <a
              href="mailto:support@maparoo.app"
              className="ml-1 font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
            >
              support@maparoo.app
            </a>
            .
          </p>
          <p className="mt-4 text-sm font-semibold leading-6 text-[var(--color-charcoal)]/80">
            MAParoo is operated by Fuentes Studio, San Diego, CA, USA.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
