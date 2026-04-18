"use client";

import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  className?: string;
};

/**
 * Client-only link that opens the cookie-settings dialog exposed globally
 * by <CookieBanner />. Rendered in server components (e.g. legal pages)
 * where inline onClick handlers are not allowed.
 */
export function CookieSettingsLink({
  children = "Cookie-Einstellungen-Dialog",
  className,
}: Props) {
  return (
    <a
      href="#"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        if (
          typeof window !== "undefined" &&
          typeof (window as any).__openCookieSettings === "function"
        ) {
          (window as any).__openCookieSettings();
        }
      }}
    >
      {children}
    </a>
  );
}
