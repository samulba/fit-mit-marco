import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { leistungen, getLeistungBySlug } from "@/lib/leistungen";
import { LeistungDetailPage } from "@/components/LeistungDetailPage";
import {
  JsonLd,
  makeServiceSchema,
  makeFaqSchema,
  makeBreadcrumb,
} from "@/components/StructuredData";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return leistungen.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const l = getLeistungBySlug(params.slug);
  if (!l) return { title: "Leistung nicht gefunden" };

  const title = `${l.title} – Personal Trainer München`;
  return {
    title,
    description: l.hero.sub,
    alternates: { canonical: `/leistungen/${l.slug}` },
    openGraph: {
      title,
      description: l.hero.sub,
      url: `/leistungen/${l.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: l.hero.sub,
    },
  };
}

export default function Page({ params }: Props) {
  const leistung = getLeistungBySlug(params.slug);
  if (!leistung) notFound();

  return (
    <>
      <JsonLd
        data={makeServiceSchema({
          slug: leistung.slug,
          title: leistung.title,
          description: leistung.hero.sub,
        })}
      />
      <JsonLd data={makeFaqSchema(leistung.faq)} />
      <JsonLd
        data={makeBreadcrumb([
          { name: "Home", url: "/" },
          { name: "Leistungen", url: "/#leistungen" },
          {
            name: leistung.titleShort,
            url: `/leistungen/${leistung.slug}`,
          },
        ])}
      />
      <LeistungDetailPage leistung={leistung} />
    </>
  );
}
