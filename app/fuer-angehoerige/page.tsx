import type { Metadata } from "next";
import { AngehoerigePage } from "@/components/AngehoerigePage";
import {
  JsonLd,
  makeBreadcrumb,
  makeWebPageSchema,
  makeFaqSchema,
  angehoerigeServiceSchema,
} from "@/components/StructuredData";

export const metadata: Metadata = {
  title:
    "Für Angehörige — Personal Trainer für Ihre Eltern in München",
  description:
    "Sie machen sich Sorgen um Ihre Eltern? Marco kommt zu Ihnen nach Hause und unterstützt individuell bei Kraft, Balance und Mobilität. Kostenloses Kennenlernen in München.",
  alternates: { canonical: "/fuer-angehoerige" },
  openGraph: {
    title:
      "Für Angehörige — Personal Trainer für Ihre Eltern in München",
    description:
      "Persönliches Training bei Ihren Eltern zuhause – Kraft, Sicherheit und Lebensqualität zurückgeben.",
    url: "/fuer-angehoerige",
    type: "website",
  },
};

const faq = [
  {
    q: "Meine Eltern wollen eigentlich gar nicht trainieren. Geht das trotzdem?",
    a: "Das ist völlig normal — fast alle Senioren sind anfangs skeptisch. Ein kostenloses Kennenlernen hilft, Vertrauen aufzubauen. Viele, die anfangs nicht wollten, freuen sich heute auf jede Einheit.",
  },
  {
    q: "Meine Mutter hat Demenz. Ist das trotzdem möglich?",
    a: "Ja, Bewegung ist bei Demenz besonders wertvoll. Das Training wird an kognitive Einschränkungen angepasst.",
  },
  {
    q: "Mein Vater wohnt alleine. Kann ich das Training für ihn buchen und bezahlen?",
    a: "Selbstverständlich. Viele Angehörige buchen und bezahlen das Training für ihre Eltern. Die Rechnung kann auf Sie ausgestellt werden.",
  },
  {
    q: "Wie weit fährt Marco?",
    a: "Im Umkreis von 30 km um München. Für weitere Entfernungen sprechen wir individuell.",
  },
  {
    q: "Kann ich bei der ersten Einheit dabei sein?",
    a: "Gerne. Viele Familien wünschen sich das — gerade am Anfang. Danach entscheiden Sie und Ihre Eltern, wie es weitergeht.",
  },
];

export default function Page() {
  return (
    <>
      <JsonLd data={angehoerigeServiceSchema} />
      <JsonLd
        data={makeWebPageSchema({
          path: "/fuer-angehoerige",
          title:
            "Für Angehörige — Personal Trainer für Ihre Eltern in München",
          description:
            "Personal Training, das zu Ihren Eltern nach Hause kommt. Kraft, Sicherheit und Mobilität für Senioren in München.",
        })}
      />
      <JsonLd data={makeFaqSchema(faq)} />
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
