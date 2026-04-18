import type { Metadata } from "next";
import { ErstgespraechPage } from "@/components/ErstgespraechPage";
import { JsonLd, makeBreadcrumb } from "@/components/StructuredData";

export const metadata: Metadata = {
  title:
    "Kostenloses Erstgespräch – Personal Trainer Senioren München",
  description:
    "30 Minuten, kostenlos und unverbindlich. Lerne Marco telefonisch oder vor Ort kennen – dein Einstieg in Personal Training für Senioren in München.",
  alternates: { canonical: "/erstgespraech" },
  openGraph: {
    title:
      "Kostenloses Erstgespräch – Personal Trainer Senioren München",
    description:
      "30 Minuten. Kein Druck. Kein Verkauf. Lass uns unverbindlich kennenlernen.",
    url: "/erstgespraech",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
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
