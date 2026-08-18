import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section
      className={styles.section}
      aria-labelledby="experience-final-cta-title"
    >
      <Container>
        <FadeIn>
          <div className={styles.content}>
            <p className={styles.eyebrow}>YOUR NEXT STEP</p>

            <h2
              id="experience-final-cta-title"
              className={styles.title}
            >
              One decision can change everything.
            </h2>

            <p className={styles.copy}>
              Whether you&apos;re thinking about cutting back, beginning Day 1,
              or celebrating years of recovery, Nova will walk beside you every
              step of the way.
            </p>

            <a
  href="https://apps.apple.com/app/nova-sobriety-companion/id6784290254"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.appStoreButton}
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
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}