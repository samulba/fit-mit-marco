/**
 * Accessibility skip-link — lets keyboard users jump straight to
 * the main content, bypassing the navigation. Visually hidden
 * until focused, then anchored top-left in brand colors.
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-3 focus:rounded-full focus:bg-teal focus:text-forest focus:font-semibold focus:shadow-soft-lg focus:outline-none focus:ring-4 focus:ring-teal/30"
    >
      Zum Hauptinhalt springen
    </a>
  );
}
