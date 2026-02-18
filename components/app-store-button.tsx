type AppStoreButtonProps = {
  href: string;
  label?: string;
};

export default function AppStoreButton({
  href,
  label = "Download on the App Store",
}: AppStoreButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-primary-dark)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
      aria-label={label}
    >
      <span className="text-base">{label}</span>
    </a>
  );
}
