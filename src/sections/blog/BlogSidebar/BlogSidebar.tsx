import Image from "next/image";
import Link from "next/link";
import { blogPosts, featuredPost } from "@/lib/blog";
import styles from "./BlogSidebar.module.css";

export default function BlogSidebar() {
  const categories = Array.from(
    new Set(blogPosts.map((post) => post.category))
  );

  const recommendedPosts = blogPosts
    .filter((post) => post.slug !== featuredPost.slug)
    .slice(0, 4);

  return (
    <aside
      className={styles.sidebar}
      aria-label="Explore the Nova Blog"
    >
      <section className={styles.section}>
        <p className={styles.eyebrow}>CATEGORIES</p>

        <div className={styles.categories}>
          {categories.map((category) => {
            const articleCount = blogPosts.filter(
              (post) => post.category === category
            ).length;

            return (
              <div
                key={category}
                className={styles.category}
              >
                <span>{category}</span>

                <span
                  className={styles.categoryCount}
                  aria-label={`${articleCount} ${
                    articleCount === 1 ? "article" : "articles"
                  }`}
                >
                  {articleCount}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {recommendedPosts.length > 0 && (
        <section className={styles.section}>
          <p className={styles.eyebrow}>
            RECOMMENDED ARTICLES
          </p>

          <div className={styles.recommended}>
            {recommendedPosts.map((post) => (
              <article
                key={post.slug}
                className={styles.recommendedArticle}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className={styles.recommendedImageLink}
                  aria-label={`Read ${post.title}`}
                >
                  <div className={styles.recommendedImageWrapper}>
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="6rem"
                      className={styles.recommendedImage}
                    />
                  </div>
                </Link>

                <div className={styles.recommendedContent}>
                  <h3 className={styles.recommendedTitle}>
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <p className={styles.recommendedMeta}>
                    {post.readTime}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </aside>
  );
}