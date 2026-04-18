import type { Metadata } from "next";
import { PreisePage } from "@/components/PreisePage";
import { JsonLd, makeBreadcrumb } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Preise & Pakete – Personal Trainer Senioren München",
  description:
    "Transparente Preise für Personal Training bei dir zuhause in München und Umgebung. Einzelstunde 70 €, 10er-Karte 600 €, Monatspaket 260 €. Keine Anfahrtskosten im 30-km-Umkreis.",
  alternates: { canonical: "/preise" },
  openGraph: {
    title: "Preise & Pakete – Personal Trainer Senioren München",
    description:
      "Einzelstunde 70 €, 10er-Karte 600 €, Monatspaket 260 €. Personal Training für Senioren in München.",
    url: "/preise",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
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
