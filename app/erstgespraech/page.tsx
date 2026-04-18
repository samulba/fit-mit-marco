import type { Metadata } from "next";
import { ErstgespraechPage } from "@/components/ErstgespraechPage";
import {
  JsonLd,
  makeBreadcrumb,
  makeWebPageSchema,
  makeFaqSchema,
  erstgespraechOfferSchema,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title:
    "Kostenloses Erstgespräch — Personal Trainer Senioren München",
  description:
    "30 Minuten, kostenlos und unverbindlich. Lerne Marco telefonisch oder vor Ort kennen — dein Einstieg in Personal Training für Senioren in München und Umgebung.",
  alternates: { canonical: "/erstgespraech" },
  openGraph: {
    title:
      "Kostenloses Erstgespräch — Personal Trainer Senioren München",
    description:
      "30 Minuten. Kein Druck. Kein Verkauf. Lass uns unverbindlich kennenlernen.",
    url: "/erstgespraech",
    type: "website",
  },
};

const faq = [
  {
    q: "Was kostet das Erstgespräch?",
    a: "Nichts. Das Erstgespräch ist komplett kostenlos — auch wenn wir am Ende feststellen, dass wir nicht zusammenpassen.",
  },
  {
    q: "Muss ich mich danach entscheiden?",
    a: "Nein. Du hast nach dem Gespräch alle Zeit der Welt. Kein Druck, kein Abschluss vor Ort.",
  },
  {
    q: "Wie lange dauert es?",
    a: "Rechne mit circa 30 Minuten. Wenn wir mehr Zeit brauchen, nehmen wir sie uns.",
  },
  {
    q: "Was muss ich vorbereiten?",
    a: "Nichts. Bequeme Kleidung und ein Glas Wasser – mehr braucht es nicht. Wenn du Vorerkrankungen hast, erwähne sie im Gespräch.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={erstgespraechOfferSchema} />
      <JsonLd
        data={makeWebPageSchema({
          path: "/erstgespraech",
          title:
            "Kostenloses Erstgespräch — Personal Trainer Senioren München",
          description:
            "30 Minuten, kostenlos und unverbindlich. Dein Einstieg in Personal Training für Senioren in München.",
          type: "ContactPage",
        })}
      />
      <JsonLd data={makeFaqSchema(faq)} />
      <JsonLd
        data={makeBreadcrumb([
          { name: "Home", url: "/" },
          { name: "Erstgespräch", url: "/erstgespraech" },
        ])}
      />
      <ErstgespraechPage />
    </>
  );
}
