import Image from "next/image";
import Container from "@/components/layout/Container";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/blog/blog-hero-august-30A-sunset.png"
        alt="A peaceful 30A coastal boardwalk beside the Gulf at sunset in August."
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
            <span
              className={styles.downloadButton}
              aria-label="Nova is coming soon to the App Store"
            >
              Download Nova
            </span>

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