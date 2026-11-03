import type { Metadata } from "next";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Support",
  description: "Help with your MAParoo account, subscription, and safety tools.",
};

const linkClass =
  "font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]";

const questions = [
  {
    q: "How do I delete my account?",
    a: "Open Settings in the app and tap Delete Account. This removes your account and your private data, such as kid profiles and favorites. Deleting your account does not cancel an App Store subscription; manage that in your Apple ID settings. Reviews and other public posts may remain without your name.",
  },
  {
    q: "How do I cancel my subscription?",
    a: "Subscriptions are managed by Apple. On your iPhone, open Settings, tap your name, then Subscriptions, and choose MAParoo. Cancel at least 24 hours before the renewal date to avoid being charged.",
  },
  {
    q: "I subscribed but my plan is not showing.",
    a: "Open Settings in the app and tap Restore Purchases while signed in with the same Apple ID you used to subscribe.",
  },
  {
    q: "How do I report a review, photo, or video, or block someone?",
    a: "Tap Report on any review, photo, or video, then choose a reason. You can also hide a parent's posts from the same menu, and unblock them later from Blocked parents in Settings. We review reports and remove content that breaks our Terms.",
  },
  {
    q: "How do I turn off AI suggestions?",
    a: "Open Settings and switch off AI suggestions. Nothing is sent to our AI provider while it is off.",
  },
  {
    q: "Who can see my kid's profile?",
    a: "Only you. Kid profiles are private to your account. Other parents cannot see them.",
  },
  {
    q: "A place has wrong information.",
    a: "Open the place, swipe the amenity that is wrong, and tap Not here? so other parents can confirm. You can also add missing amenities, photos, and reviews to help the next family.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-[var(--color-neutral-light)]">
      <main className="mx-auto w-full max-w-4xl px-6 py-16 sm:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">
          MAParoo
        </p>
        <h1 className="mt-2 text-4xl font-semibold text-[var(--color-charcoal)]">
          Support
        </h1>
        <p className="mt-6 text-base leading-7 text-[var(--color-charcoal)]/80">
          Questions, problems, or feedback? Email us and we will read it.
        </p>
        <p className="mt-4 text-base">
          <a href="mailto:support@maparoo.app" className={linkClass}>
            support@maparoo.app
          </a>
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-[var(--color-charcoal)]">
          Common questions
        </h2>
        <dl className="mt-6 space-y-6">
          {questions.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-white/70 bg-white/80 p-6"
            >
              <dt className="text-base font-semibold text-[var(--color-charcoal)]">
                {item.q}
              </dt>
              <dd className="mt-2 text-sm leading-6 text-[var(--color-charcoal)]/75">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 text-sm leading-6 text-[var(--color-charcoal)]/75">
          Read our{" "}
          <a href="/privacy-policy" className={linkClass}>
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="/terms-of-service" className={linkClass}>
            Terms of Service
          </a>
          .
        </p>
      </main>
      <Footer />
    </div>
  );
}
