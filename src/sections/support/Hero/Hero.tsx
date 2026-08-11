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
            <span
              className={styles.downloadButton}
              aria-label="Nova is coming soon to the App Store"
            >
              Download Nova
            </span>

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