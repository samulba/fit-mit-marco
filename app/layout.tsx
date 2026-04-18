import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SkipLink } from "@/components/SkipLink";
import { CookieBanner } from "@/components/CookieBanner";

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

const SITE_URL = "https://fitmitmarco.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Personal Trainer für Senioren in München – Fit mit Marco",
    template: "%s | Fit mit Marco",
  },
  description:
    "Personal Training für Senioren in München & Umgebung. Kraft, Balance, Mobilität und Sturzprävention – individuell, sicher und bei dir zuhause. Kostenloses Erstgespräch.",
  keywords: [
    // Core intent
    "Personal Trainer München",
    "Personal Trainer Senioren München",
    "Personal Training ab 60",
    "Seniorenfitness München",
    "Fitnesstrainer Senioren München",
    "Personal Training zuhause München",
    "Hausbesuch Personal Trainer München",
    // Themen
    "Sturzprävention München",
    "Krafttraining Senioren",
    "Beweglichkeit Senioren",
    "Reha Training nach OP",
    "Mobilitätstraining Senioren",
    "Gleichgewichtstraining Senioren",
    // Zielgruppe
    "Fitness ab 60",
    "Fitness ab 70",
    "Training für ältere Menschen",
    "Gesundheitscoach München",
    // Lokal
    "Personal Trainer Feldkirchen",
    "Personal Trainer München Umgebung",
  ],
  authors: [{ name: "Marco Degel", url: SITE_URL }],
  creator: "Marco Degel",
  publisher: "Marco Degel – Fit mit Marco",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Personal Trainer für Senioren in München – Fit mit Marco",
    description:
      "Persönliches Training für Menschen ab 60 – individuell und sicher bei dir zuhause. Kraft, Balance, Mobilität und mehr Lebensqualität im Alltag.",
    url: SITE_URL,
    siteName: "Fit mit Marco",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/marco.jpg",
        width: 1200,
        height: 1600,
        alt: "Marco Degel – Personal Trainer für Senioren in München",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Trainer für Senioren in München – Fit mit Marco",
    description:
      "Persönliches Training für Menschen ab 60 – individuell und sicher bei dir zuhause.",
    images: ["/marco.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "health & fitness",
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
      <body className="font-sans">
        <SkipLink />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
