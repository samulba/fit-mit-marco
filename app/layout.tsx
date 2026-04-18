import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#1A3C34",
};

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fit mit Marco | Personal Trainer für Senioren in München",
  description:
    "Dein Personal Trainer für mehr Lebensqualität in München. Ich helfe Menschen ab 60, ihre Stärke, Beweglichkeit und Lebensfreude zurückzugewinnen – individuell, sicher und bei dir zuhause.",
  keywords: [
    "Personal Trainer München",
    "Senioren Fitness",
    "Training ab 60",
    "Sturzprävention",
    "Reha Sport",
    "Hausbesuch Training",
  ],
  authors: [{ name: "Marco Degel" }],
  openGraph: {
    title: "Fit mit Marco | Personal Trainer für Senioren",
    description:
      "Individuelles Personal Training für Senioren in München und Umgebung.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${outfit.variable} ${jetbrains.variable}`}
    >
      <body className="font-sans">{children}</body>
    </html>
  );
}
