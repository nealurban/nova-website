import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import { blogPosts, featuredPost } from "@/lib/blog";
import styles from "./LatestStories.module.css";

export default function LatestStories() {
  const latestPosts = blogPosts.filter(
    (post) => post.slug !== featuredPost.slug
  );

  if (latestPosts.length === 0) {
    return null;
  }

  return (
    <section
      id="latest-stories"
      className={styles.section}
      aria-labelledby="latest-stories-title"
    >
      <Container>
  <FadeIn>
    <div className={styles.header}>
      <div>
        <p className={styles.eyebrow}>LATEST STORIES</p>

        <h2
          id="latest-stories-title"
          className={styles.title}
        >
          Stories worth staying for.
        </h2>
      </div>
    </div>
  </FadeIn>

  <div className={styles.grid}>
    {latestPosts.map((post) => (
              <article
                key={post.slug}
                className={styles.card}
              >
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

                  <p className={styles.excerpt}>
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className={styles.link}
                  >
                    Read article
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
                  ))}
    </div>
</Container>
    </section>
  );
}