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

            <span
              className={styles.appStoreButton}
              aria-label="Nova is coming soon to the App Store"
            >
              <span
                className={styles.appleIcon}
                aria-hidden="true"
              >
                
              </span>

              <span className={styles.buttonText}>
                <small>Coming soon to the</small>
                <strong>App Store</strong>
              </span>
            </span>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}