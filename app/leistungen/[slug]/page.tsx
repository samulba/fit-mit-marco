import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { leistungen, getLeistungBySlug } from "@/lib/leistungen";
import { LeistungDetailPage } from "@/components/LeistungDetailPage";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return leistungen.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = getLeistungBySlug(params.slug);
  if (!l) return { title: "Leistung nicht gefunden" };
  return {
    title: `${l.title} | Fit mit Marco`,
    description: l.hero.sub,
  };
}

export default function Page({ params }: Props) {
  const leistung = getLeistungBySlug(params.slug);
  if (!leistung) notFound();
  return <LeistungDetailPage leistung={leistung} />;
}
