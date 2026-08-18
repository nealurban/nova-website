import Image from "next/image";
import Container from "@/components/layout/Container";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/experience/experience-hero-bedroom-home.png"
        alt="A peaceful coastal bedroom in warm morning light with a Golden Retriever resting beside the bed and the Nova sobriety companion displayed on a phone."
        fill
        priority
        sizes="100vw"
        className={styles.heroImage}
      />

      <div className={styles.imageTreatment} aria-hidden="true" />

      <Container className={styles.contentContainer}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>THE NOVA EXPERIENCE</p>

          <h1 className={styles.headline}>
            Support that grows with you.
          </h1>

          <p className={styles.copy}>
            From Day 1 and every day after, Nova combines thoughtful tools,
            encouragement, and progress tracking to help you stay strong,
            understand yourself, and keep moving forward.
          </p>

          <div className={styles.actions}>
            <a
  href="https://apps.apple.com/app/nova-sobriety-companion/id6784290254"
  className={styles.downloadButton}
  aria-label="Download Nova on the App Store"
  target="_blank"
  rel="noopener noreferrer"
>
  <span className={styles.appleIcon} aria-hidden="true">
    
  </span>

  <span className={styles.buttonText}>
    <small>Download on the</small>
    <strong>App Store</strong>
  </span>
</a>

            <a href="#coach" className={styles.secondaryLink}>
              See What&apos;s Inside
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}