import Image from "next/image";
import Container from "@/components/layout/Container";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src="/images/support/support-hero-maverick-sunset.png"
        alt="A Golden Retriever peacefully watching the ocean at sunset beside a beach chair."
        fill
        priority
        sizes="100vw"
        className={styles.heroImage}
      />

      <div className={styles.imageTreatment} aria-hidden="true" />

      <Container className={styles.contentContainer}>
        <div className={styles.content}>
          <p className={styles.eyebrow}>SUPPORT</p>

          <h1 className={styles.headline}>
            We&apos;re here
            <br />
            for you.
          </h1>

          <p className={styles.copy}>
            Whether you have a question about Nova, your account, or your
            recovery journey, we&apos;ll help you find the answer.
            <span className={styles.reassurance}>
              You don&apos;t have to figure it out alone.
            </span>
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

            <a href="#faq" className={styles.secondaryLink}>
              Find Answers
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}