import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import { featuredPost } from "@/lib/blog";
import { getAuthorByName } from "@/lib/authors";
import styles from "./FeaturedStory.module.css";

export default function FeaturedStory() {
  const author = getAuthorByName(featuredPost.author);

  return (
    <section
      id="featured-story"
      className={styles.section}
    >
      <Container>
        <FadeIn>
          <div className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src={featuredPost.image}
                alt={featuredPost.heroAlt}
                fill
                sizes="(max-width: 64rem) 100vw, 50vw"
                className={styles.image}
              />
            </div>

            <div className={styles.content}>
              <p className={styles.eyebrow}>
                FEATURED STORY
              </p>

              <h2 className={styles.title}>
                {featuredPost.title}
              </h2>

              <p className={styles.copy}>
                {featuredPost.excerpt}
              </p>

              <div className={styles.author}>
                {author && (
                  <Image
                    src={author.avatar}
                    alt=""
                    width={44}
                    height={44}
                    className={styles.authorImage}
                  />
                )}

                <div className={styles.authorInfo}>
                  <div className={styles.authorLine}>
                    <span className={styles.authorName}>
                      {featuredPost.author}
                    </span>

                    {author && (
                      <>
                        <span aria-hidden="true">•</span>
                        <span>{author.role}</span>
                      </>
                    )}
                  </div>

                  <div className={styles.articleMeta}>
                    <span>{featuredPost.publishedAt}</span>
                    <span aria-hidden="true">•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
              </div>

              <a
                href={`/blog/${featuredPost.slug}`}
                className={styles.link}
              >
                Read article
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}