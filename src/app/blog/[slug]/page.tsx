import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PrimaryNavigation from "@/components/navigation/PrimaryNavigation";
import SiteFooter from "@/components/footer/SiteFooter";
import Article from "@/sections/blog/Article/Article";
import RelatedArticles from "@/sections/blog/RelatedArticles/RelatedArticles";
import ReadingProgress from "@/sections/blog/ReadingProgress/ReadingProgress";
import ArticleSchema from "@/sections/blog/ArticleSchema/ArticleSchema";
import { getPostBySlug } from "@/lib/blog";
import BreadcrumbSchema from "@/sections/blog/BreadcrumbSchema/BreadcrumbSchema";

type BlogArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const articleUrl = `https://novarecoveryapp.com/blog/${post.slug}`;

  return {
    title: post.seoTitle ?? post.title,
description: post.seoDescription ?? post.excerpt,

    alternates: {
      canonical: `/blog/${post.slug}`,
    },

    openGraph: {
      type: "article",
      url: articleUrl,
      siteName: "Nova",
      title: post.seoTitle ?? post.title,
description: post.seoDescription ?? post.excerpt,
      publishedTime: `${post.publishedDate}T${post.publishedTime}:00-04:00`,
      authors: [post.author],
      section: post.category,
      images: [
        {
          url: post.image,
          alt: post.heroAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: post.seoTitle ?? post.title,
description: post.seoDescription ?? post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PrimaryNavigation />

      <ReadingProgress />

<ArticleSchema post={post} />
<BreadcrumbSchema post={post} />

<main>
  <Article post={post} />
  <RelatedArticles relatedSlugs={post.relatedSlugs} />
</main>

      <SiteFooter />
    </>
  );
}