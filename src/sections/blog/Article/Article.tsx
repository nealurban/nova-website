import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import { getPostBySlug, type BlogPost } from "@/lib/blog";
import styles from "./Article.module.css";
import ArticleShare from "./ArticleShare";
import TableOfContents from "@/sections/blog/TableOfContents/TableOfContents";
import { getAuthorByName } from "@/lib/authors";

type ArticleProps = {
  post: BlogPost;
};

function createHeadingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function Article({ post }: ArticleProps) {
  const author = getAuthorByName(post.author);

  const headings = post.body
  .filter((section) => section.type === "heading")
  .map((section) => section.text);

  return (
    <article className={styles.article}>
      <section className={styles.hero}>
        <div className={styles.heroImageWrapper}>
          <Image
            src={post.image}
            alt={post.heroAlt}
            fill
            priority
            sizes="100vw"
            className={styles.heroImage}
          />

          <div className={styles.heroOverlay} aria-hidden="true" />
        </div>

        <Container className={styles.heroContainer}>
          <FadeIn>
            <div className={styles.heroContent}>
              <p className={styles.category}>{post.category}</p>

              <h1 className={styles.title}>{post.title}</h1>

              <p className={styles.excerpt}>{post.excerpt}</p>

              <div className={styles.authorMeta}>
  {author && (
    <Image
      src={author.avatar}
      alt={`${author.name}, ${author.role}`}
      width={44}
      height={44}
      className={styles.authorAvatar}
    />
  )}

  <div className={styles.authorDetails}>
    <div className={styles.authorLine}>
      <span className={styles.authorName}>
        {author?.name ?? post.author}
      </span>

      {author?.role && (
        <>
          <span aria-hidden="true">•</span>
          <span>{author.role}</span>
        </>
      )}
    </div>

    <div className={styles.meta}>
      <span>{post.publishedAt}</span>
      <span aria-hidden="true">•</span>
      <span>{post.readTime}</span>
    </div>
  </div>
</div>
<ArticleShare title={post.title} />
            </div>
          </FadeIn>
        </Container>
      </section>

      <Container>
  <div className={styles.readingLayout}>
    <div className={styles.tableOfContents}>
      <TableOfContents headings={headings} />
    </div>

    <div className={styles.body}>
          {post.body.map((section, index) => {
            if (section.type === "paragraph") {
              return <p key={index}>{section.text}</p>;
            }

            if (section.type === "heading") {
              const headingId = createHeadingId(section.text);

              return (
                <h2
                  key={index}
                  id={headingId}
                >
                  {section.text}
                </h2>
              );
            }

            if (section.type === "subheading") {
              return <h3 key={index}>{section.text}</h3>;
            }

            if (section.type === "quote") {
              return <blockquote key={index}>{section.text}</blockquote>;
            }

            if (section.type === "list") {
              return (
                <ul key={index}>
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              );
            }

            if (section.type === "image") {
              return (
                <figure key={index} className={styles.articleImage}>
                  <div className={styles.articleImageWrapper}>
                    <Image
                      src={section.src}
                      alt={section.alt}
                      fill
                      sizes="(max-width: 48rem) 100vw, 46rem"
                      className={styles.articleImagePhoto}
                    />
                  </div>

                  <figcaption>{section.caption}</figcaption>
                </figure>
              );
            }

            if (section.type === "faq") {
              return (
                <div key={index} className={styles.faqItem}>
                  <h3>{section.question}</h3>
                  <p>{section.answer}</p>
                </div>
              );
            }
if (section.type === "continueReading") {
  const recommendedPost = getPostBySlug(section.slug);

  if (!recommendedPost) {
    return null;
  }

  return (
    <a
  key={index}
  href={`/blog/${recommendedPost.slug}`}
  className={styles.continueReading}
>
  <p className={styles.continueEyebrow}>
    Continue reading
  </p>

  <p className={styles.continueText}>
    {section.text}
  </p>

  <div className={styles.continueRow}>
    <span className={styles.continueLink}>
      {recommendedPost.shortTitle}
    </span>

    <span
      className={styles.continueArrow}
      aria-hidden="true"
    >
      →
    </span>
  </div>
</a>
  );
}
            if (section.type === "featureCallout") {
  return (
    <aside key={index} className={styles.featureCallout}>
      <p className={styles.featureLabel}>{section.feature}</p>

      <h2>{section.title}</h2>

      <p>{section.text}</p>

      <div className={styles.featureActions}>
        <Link
          href="/#download"
          className={styles.featureButton}
        >
          Download Nova
        </Link>

        <p className={styles.featureAvailability}>
          Available on the App Store.
        </p>
      </div>
    </aside>
  );
}

                       return null;
          })}

          <ArticleShare title={post.title} />
        </div>
      </div>
    </Container>
  </article>
  );
}