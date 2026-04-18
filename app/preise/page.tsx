import type { Metadata } from "next";
import { PreisePage } from "@/components/PreisePage";
import {
  JsonLd,
  makeBreadcrumb,
  makeWebPageSchema,
  makeFaqSchema,
  offerCatalogSchema,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Preise & Pakete — Personal Trainer Senioren München",
  description:
    "Transparente Preise für Personal Training bei dir zuhause in München: Einzelstunde 70 €, 10er-Karte 600 € (60 €/Std), Monatspaket 260 € (4 Einheiten). Keine Anfahrtskosten im 30-km-Umkreis.",
  alternates: { canonical: "/preise" },
  openGraph: {
    title: "Preise & Pakete — Personal Trainer Senioren München",
    description:
      "Einzelstunde 70 €, 10er-Karte 600 €, Monatspaket 260 €. Personal Training für Senioren in München.",
    url: "/preise",
    type: "website",
  },
};

const faq = [
  {
    q: "Warum sind Einzelstunden teurer als Pakete?",
    a: "Pakete belohnen Planungssicherheit. Bei regelmäßigem Training kann der Zeitrahmen besser strukturiert werden und dieser Vorteil wird als Rabatt weitergegeben.",
  },
  {
    q: "Fallen Anfahrtskosten an?",
    a: "Innerhalb von 30 km um München ist die Anfahrt kostenfrei. Bei weiteren Entfernungen sprechen wir individuell bzw. es kommt ein kleiner Aufpreis dazu.",
  },
  {
    q: "Welche Zahlungsarten gibt es?",
    a: "Überweisung, PayPal oder Barzahlung. Zahlungsziel ist 14 Tage nach Rechnungsdatum.",
  },
  {
    q: "Kann meine Krankenkasse etwas erstatten?",
    a: "Personal Training ist grundsätzlich eine Selbstzahlerleistung. Eine Erstattung ist nur im Einzelfall möglich und hängt von deinem Tarif bzw. deiner Zusatzversicherung ab.",
  },
  {
    q: "Gibt es Partnertraining?",
    a: "Ja, Partnertraining für zwei Personen ist möglich. Dafür kommt ein Aufpreis von 30 € pro Einheit dazu.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={offerCatalogSchema} />
      <JsonLd
        data={makeWebPageSchema({
          path: "/preise",
          title: "Preise & Pakete — Personal Trainer Senioren München",
          description:
            "Transparente Preise für Personal Training für Senioren in München: Einzelstunde 70 €, 10er-Karte 600 €, Monatspaket 260 €.",
        })}
      />
      <JsonLd data={makeFaqSchema(faq)} />
      <JsonLd
        data={makeBreadcrumb([
          { name: "Home", url: "/" },
          { name: "Preise", url: "/preise" },
        ])}
      />
      <PreisePage />
    </>
  );
}
