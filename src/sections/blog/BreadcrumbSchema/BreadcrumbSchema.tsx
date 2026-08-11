import type { BlogPost } from "@/lib/blog";

type BreadcrumbSchemaProps = {
  post: BlogPost;
};

export default function BreadcrumbSchema({
  post,
}: BreadcrumbSchemaProps) {
  const siteUrl = "https://novarecoveryapp.com";
  const articleUrl = `${siteUrl}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.shortTitle,
        item: articleUrl,
      },
    ],
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