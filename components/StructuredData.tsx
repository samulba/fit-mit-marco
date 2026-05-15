/**
 * JSON-LD structured data for SEO.
 * Placed inline in pages so Google can reliably parse the schema.
 */

const SITE = "https://fitmitmarco.com";

type JsonLdProps = { data: object };

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ── LocalBusiness / HealthAndBeautyBusiness — the main entity ── */
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "@id": `${SITE}/#business`,
  name: "Fit mit Marco",
  legalName: "Marco Degel – Fit mit Marco",
  alternateName: "Personal Training für Senioren",
  description:
    "Personal Training für Senioren in München und Umgebung. Individuelles Training bei dir zuhause – Kraft, Balance, Mobilität, Reha-Nachsorge und Ernährungsberatung.",
  url: SITE,
  telephone: "+49 172 6223371",
  email: "hallo@fitmitmarco.com",
  image: `${SITE}/marco.jpg`,
  logo: `${SITE}/icon-512.png`,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Überweisung, PayPal, Bar",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Beethovenstraße 3",
    addressLocality: "Feldkirchen",
    postalCode: "85622",
    addressRegion: "Bayern",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.1548,
    longitude: 11.733,
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 48.1351,
      longitude: 11.582,
    },
    geoRadius: 30000,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "20:00",
    },
  ],
  founder: {
    "@type": "Person",
    name: "Marco Degel",
    jobTitle: "Personal Trainer für Senioren",
  },
  makesOffer: [
    {
      "@type": "Offer",
      name: "Einzelstunde Personal Training",
      price: "70",
      priceCurrency: "EUR",
      description: "60 Minuten Personal Training bei dir zuhause",
    },
    {
      "@type": "Offer",
      name: "10er-Karte Personal Training",
      price: "600",
      priceCurrency: "EUR",
      description: "10 × 60 Minuten, 6 Monate gültig",
    },
    {
      "@type": "Offer",
      name: "Monatspaket Personal Training",
      price: "260",
      priceCurrency: "EUR",
      description:
        "4 × 60 Minuten pro Monat, Mindestlaufzeit 3 Monate",
    },
  ],
  slogan: "Wer rastet, der rostet.",
  foundingDate: "2018",
  knowsAbout: [
    "Seniorenfitness",
    "Krafttraining",
    "Sturzprävention",
    "Mobilitätstraining",
    "Balance-Training",
    "Reha-Nachsorge",
    "Herz-Kreislauf-Training",
    "Ernährungsberatung",
  ],
};

/* ── Marco as Person ── */
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE}/#marco`,
  name: "Marco Degel",
  jobTitle: "Personal Trainer für Senioren",
  description:
    "Personal Trainer mit Erfahrung aus dem Hochleistungssport, seit 2018 als Personal Trainer tätig, spezialisiert auf Training mit Menschen ab 60 in München und Umgebung.",
  image: `${SITE}/marco.jpg`,
  worksFor: { "@id": `${SITE}/#business` },
  hasOccupation: {
    "@type": "Occupation",
    name: "Personal Trainer für Senioren",
    occupationLocation: {
      "@type": "City",
      name: "München",
    },
    skills:
      "Seniorenfitness, Krafttraining, Sturzprävention, Mobilität, Balance, Reha-Nachsorge",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Beethovenstraße 3",
    addressLocality: "Feldkirchen",
    postalCode: "85622",
    addressCountry: "DE",
  },
  url: SITE,
  sameAs: [],
};

/* ── Build a Service schema for a Leistung ── */
export function makeServiceSchema(opts: {
  slug: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE}/leistungen/${opts.slug}#service`,
    name: opts.title,
    description: opts.description,
    serviceType: "Personal Training",
    provider: { "@id": `${SITE}/#business` },
    areaServed: {
      "@type": "City",
      name: "München",
    },
    audience: {
      "@type": "PeopleAudience",
      suggestedMinAge: 60,
    },
    url: `${SITE}/leistungen/${opts.slug}`,
  };
}

/* ── FAQPage schema helper ── */
export function makeFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

/* ── BreadcrumbList helper ── */
export function makeBreadcrumb(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE}${item.url}`,
    })),
  };
}

/* ── Site-wide WebSite (for sitelinks search) ── */
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE}/#website`,
  url: SITE,
  name: "Fit mit Marco",
  inLanguage: "de-DE",
  publisher: { "@id": `${SITE}/#business` },
};

/* ── WebPage helper (for legal + content pages) ── */
export function makeWebPageSchema(opts: {
  path: string;
  title: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "FAQPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": opts.type || "WebPage",
    "@id": `${SITE}${opts.path}#webpage`,
    url: `${SITE}${opts.path}`,
    name: opts.title,
    description: opts.description,
    inLanguage: "de-DE",
    isPartOf: { "@id": `${SITE}/#website` },
    about: { "@id": `${SITE}/#business` },
  };
}

/* ── Free consultation offer (Erstgespräch) ── */
export const erstgespraechOfferSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE}/erstgespraech#service`,
  name: "Kostenloses Erstgespräch — Personal Trainer Senioren München",
  description:
    "30 Minuten kostenloses und unverbindliches Erstgespräch — telefonisch oder persönlich vor Ort — mit Marco Degel, Personal Trainer für Senioren in München.",
  serviceType: "Personal Training Consultation",
  provider: { "@id": `${SITE}/#business` },
  areaServed: {
    "@type": "City",
    name: "München",
  },
  audience: {
    "@type": "PeopleAudience",
    suggestedMinAge: 60,
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
    availability: "https://schema.org/InStock",
    validFrom: new Date().toISOString().split("T")[0],
  },
  url: `${SITE}/erstgespraech`,
};

/* ── OfferCatalog for Preise page ── */
export const offerCatalogSchema = {
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "@id": `${SITE}/preise#offers`,
  name: "Personal Training Preise — Fit mit Marco",
  url: `${SITE}/preise`,
  provider: { "@id": `${SITE}/#business` },
  itemListElement: [
    {
      "@type": "Offer",
      name: "Einzelstunde Personal Training",
      description: "60 Minuten Personal Training bei dir zuhause",
      price: "70",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "70",
        priceCurrency: "EUR",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: "60",
          unitCode: "MIN",
        },
      },
    },
    {
      "@type": "Offer",
      name: "10er-Karte Personal Training",
      description:
        "10 × 60 Minuten Personal Training, 6 Monate gültig",
      price: "600",
      priceCurrency: "EUR",
    },
    {
      "@type": "Offer",
      name: "Monats-Paket Personal Training",
      description:
        "4 × 60 Minuten pro Monat, Mindestlaufzeit 3 Monate, danach monatlich kündbar",
      price: "260",
      priceCurrency: "EUR",
    },
  ],
};

/* ── Service schema for "Für Angehörige" landing page ── */
export const angehoerigeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE}/fuer-angehoerige#service`,
  name: "Personal Training für Eltern und Großeltern — München",
  description:
    "Personal Training, das zu Ihren Eltern oder Großeltern nach Hause kommt. Individuelle Begleitung für Senioren im Umkreis München – geeignet, wenn Angehörige im Alter Kraft, Sicherheit und Mobilität erhalten möchten.",
  serviceType: "Personal Training für Senioren",
  provider: { "@id": `${SITE}/#business` },
  areaServed: {
    "@type": "City",
    name: "München",
  },
  audience: [
    {
      "@type": "PeopleAudience",
      suggestedMinAge: 60,
      audienceType: "Senioren",
    },
    {
      "@type": "PeopleAudience",
      audienceType: "Angehörige (Kinder und Enkel)",
    },
  ],
  url: `${SITE}/fuer-angehoerige`,
};
