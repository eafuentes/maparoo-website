const links = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Support", href: "mailto:support@maparoo.app" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-neutral-light)] bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-[var(--color-charcoal)]/70 sm:flex-row sm:px-10">
        <p className="text-center sm:text-left">
          {new Date().getFullYear()} MAParoo. All rights reserved.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
