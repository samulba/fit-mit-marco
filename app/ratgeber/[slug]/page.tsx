import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { articles, getArticleBySlug } from "@/lib/ratgeber";
import { RatgeberArticlePage } from "@/components/RatgeberArticlePage";
import {
  JsonLd,
  makeBreadcrumb,
  makeFaqSchema,
} from "@/components/StructuredData";

const SITE = "https://fitmitmarco.com";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: "Artikel nicht gefunden" };

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    alternates: { canonical: `/ratgeber/${article.slug}` },
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: `/ratgeber/${article.slug}`,
      type: "article",
      publishedTime: article.published,
      modifiedTime: article.updated || article.published,
      authors: [article.author],
      tags: article.keywords,
      images: [
        {
          url: "/marco-og.jpg",
          width: 1200,
          height: 630,
          alt: `${article.title} – Fit mit Marco`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
      images: ["/marco-og.jpg"],
    },
  };
}

export default function Page({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE}/ratgeber/${article.slug}#article`,
    headline: article.title,
    description: article.metaDescription,
    articleBody: article.body
      .filter((b) => b.type === "p")
      .map((b) => (b as { type: "p"; text: string }).text)
      .join(" "),
    datePublished: article.published,
    dateModified: article.updated || article.published,
    author: {
      "@type": "Person",
      name: article.author,
      "@id": `${SITE}/#marco`,
    },
    publisher: { "@id": `${SITE}/#business` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE}/ratgeber/${article.slug}`,
    },
    inLanguage: "de-DE",
    keywords: article.keywords.join(", "),
    image: `${SITE}/marco-og.jpg`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd
        data={makeBreadcrumb([
          { name: "Home", url: "/" },
          { name: "Ratgeber", url: "/ratgeber" },
          {
            name: article.title,
            url: `/ratgeber/${article.slug}`,
          },
        ])}
      />
      <RatgeberArticlePage article={article} />
    </>
  );
}
