import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section
      className={styles.section}
      aria-labelledby="support-final-cta-title"
    >
      <Container>
        <FadeIn>
          <div className={styles.content}>
            <p className={styles.eyebrow}>YOUR NEXT STEP</p>

            <h2
              id="support-final-cta-title"
              className={styles.title}
            >
              We&apos;ll be here when you&apos;re ready.
            </h2>

            <p className={styles.copy}>
              Whether today is Day 1 or simply the day you decide to begin
              thinking differently, Nova will be here to walk beside you.
            </p>

            <a
  href="https://apps.apple.com/app/nova-sobriety-companion/id6784290254"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.appStoreButton}
  aria-label="Download Nova on the App Store"
>
  <span
    className={styles.appleIcon}
    aria-hidden="true"
  >
    
  </span>

  <span className={styles.buttonText}>
    <small>Download on the</small>
    <strong>App Store</strong>
  </span>
</a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}