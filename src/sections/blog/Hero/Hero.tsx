import Image from "next/image";
import Container from "@/components/layout/Container";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/blog/nova-blog-header-september-2026.png"
alt="A quiet 30A coastal porch overlooking the Gulf in warm early September morning light."
        fill
        priority
        sizes="100vw"
        className={styles.heroImage}
      />

      <div className={styles.imageTreatment} aria-hidden="true" />

      <Container className={styles.contentContainer}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>THE NOVA BLOG</p>

          <h1 className={styles.headline}>
            Stories that
            <br />
            stay with you.
          </h1>

          <p className={styles.copy}>
            Encouragement, research, practical advice, and real stories for
            building a more peaceful life.
          </p>

          <div className={styles.actions}>
            <a
  href="https://apps.apple.com/app/nova-sobriety-companion/id6784290254"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.downloadButton}
  aria-label="Download Nova on the App Store"
>
  <span className={styles.appleIcon} aria-hidden="true">
    
  </span>

  <span className={styles.buttonText}>
    <small>Download on the</small>
    <strong>App Store</strong>
  </span>
</a>

            <a href="#featured-story" className={styles.secondaryLink}>
  Explore the latest stories
  <span aria-hidden="true">→</span>
</a>
          </div>
        </div>
      </Container>
    </section>
  );
}