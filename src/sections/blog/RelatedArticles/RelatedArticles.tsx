import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import { getPostBySlug } from "@/lib/blog";
import styles from "./RelatedArticles.module.css";

type RelatedArticlesProps = {
  relatedSlugs: string[];
};

export default function RelatedArticles({
  relatedSlugs,
}: RelatedArticlesProps) {
  const relatedPosts = relatedSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((post) => post !== undefined);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className={styles.section}>
      <Container>
        <FadeIn>
          <div className={styles.header}>
            <p className={styles.eyebrow}>KEEP READING</p>

            <h2 className={styles.title}>
              More stories for wherever you are.
            </h2>
          </div>

          <div className={styles.grid}>
            {relatedPosts.map((post) => (
              <article key={post.slug} className={styles.card}>
                <Link
                  href={`/blog/${post.slug}`}
                  className={styles.imageLink}
                  aria-label={`Read ${post.title}`}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={post.image}
                      alt={post.heroAlt}
                      fill
                      sizes="(max-width: 48rem) 100vw, 33vw"
                      className={styles.image}
                    />
                  </div>
                </Link>

                <div className={styles.content}>
                  <div className={styles.meta}>
                    <span>{post.category}</span>
                    <span aria-hidden="true">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className={styles.cardTitle}>
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className={styles.excerpt}>{post.excerpt}</p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className={styles.link}
                  >
                    Read article <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}