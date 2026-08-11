import type { BlogPost } from "@/lib/blog";
import { getAuthorByName } from "@/lib/authors";

type ArticleSchemaProps = {
  post: BlogPost;
};

export default function ArticleSchema({
  post,
}: ArticleSchemaProps) {
  const siteUrl = "https://novarecoveryapp.com";
  const articleUrl = `${siteUrl}/blog/${post.slug}`;
  const imageUrl = `${siteUrl}${post.image}`;

  const publishedDateTime =
    `${post.publishedDate}T${post.publishedTime}:00-04:00`;

  const authorRecord = getAuthorByName(post.author);

  const author = authorRecord
    ? {
        "@type": "Person",
        name: authorRecord.name,
        jobTitle: authorRecord.role,
        url: siteUrl,
      }
    : {
        "@type": "Person",
        name: post.author,
        url: siteUrl,
      };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: post.title,
    description: post.seoDescription ?? post.excerpt,

    image: [imageUrl],

    datePublished: publishedDateTime,

    author,

    publisher: {
      "@type": "Organization",
      name: "Nova",
      url: siteUrl,
    },

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },

    url: articleUrl,

    articleSection: post.category,

    inLanguage: "en-US",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}