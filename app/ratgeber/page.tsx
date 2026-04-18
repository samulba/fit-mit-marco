import type { Metadata } from "next";
import { RatgeberIndexPage } from "@/components/RatgeberIndexPage";
import {
  JsonLd,
  makeBreadcrumb,
  makeWebPageSchema,
} from "@/components/StructuredData";
import { articles } from "@/lib/ratgeber";

export const metadata: Metadata = {
  title: "Ratgeber — Wissen rund um Training für Senioren",
  description:
    "Artikel zu Personal Training für Senioren, Übungen für zuhause, Sturzprävention, Krafttraining ab 60 und Reha-Nachsorge. Geschrieben von Marco Degel aus München.",
  alternates: { canonical: "/ratgeber" },
  openGraph: {
    title: "Ratgeber — Wissen rund um Training für Senioren",
    description:
      "Ehrliche Artikel rund um Fitness, Training und Gesundheit ab 60 – ohne Marketingfloskeln.",
    url: "/ratgeber",
    type: "website",
  },
};

const SITE = "https://fitmitmarco.com";

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE}/ratgeber#blog`,
  name: "Fit mit Marco – Ratgeber",
  url: `${SITE}/ratgeber`,
  description:
    "Artikel rund um Training, Gesundheit und Alltag für Menschen ab 60.",
  inLanguage: "de-DE",
  publisher: { "@id": `${SITE}/#business` },
  blogPost: articles.map((a) => ({
    "@type": "BlogPosting",
    "@id": `${SITE}/ratgeber/${a.slug}#article`,
    url: `${SITE}/ratgeber/${a.slug}`,
    headline: a.title,
    description: a.excerpt,
    datePublished: a.published,
    dateModified: a.updated || a.published,
    author: {
      "@type": "Person",
      name: a.author,
      "@id": `${SITE}/#marco`,
    },
  })),
};

export default function Page() {
  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd
        data={makeWebPageSchema({
          path: "/ratgeber",
          title: "Ratgeber — Fit mit Marco",
          description:
            "Artikel rund um Training, Gesundheit und Alltag für Menschen ab 60.",
        })}
      />
      <JsonLd
        data={makeBreadcrumb([
          { name: "Home", url: "/" },
          { name: "Ratgeber", url: "/ratgeber" },
        ])}
      />
      <RatgeberIndexPage />
    </>
  );
}
