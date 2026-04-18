import type { Metadata } from "next";
import { AngehoerigePage } from "@/components/AngehoerigePage";
import { JsonLd, makeBreadcrumb } from "@/components/StructuredData";

export const metadata: Metadata = {
  title:
    "Für Angehörige – Personal Trainer für Ihre Eltern in München",
  description:
    "Sie machen sich Sorgen um Ihre Eltern? Marco kommt zu Ihnen nach Hause und unterstützt individuell bei Kraft, Balance und Mobilität. Kostenloses Kennenlernen.",
  alternates: { canonical: "/fuer-angehoerige" },
  openGraph: {
    title:
      "Für Angehörige – Personal Trainer für Ihre Eltern in München",
    description:
      "Persönliches Training bei Ihren Eltern zuhause – Kraft, Sicherheit und Lebensqualität zurückgeben.",
    url: "/fuer-angehoerige",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={makeBreadcrumb([
          { name: "Home", url: "/" },
          { name: "Für Angehörige", url: "/fuer-angehoerige" },
        ])}
      />
      <AngehoerigePage />
    </>
  );
}
