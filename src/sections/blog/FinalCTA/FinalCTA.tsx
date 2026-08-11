import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section
      className={styles.section}
      aria-labelledby="blog-final-cta-title"
    >
      <Container>
        <FadeIn>
          <div className={styles.content}>
            <p className={styles.eyebrow}>
              KEEP GROWING
            </p>

            <h2
              id="blog-final-cta-title"
              className={styles.title}
            >
              Your next chapter starts here.
            </h2>

            <p className={styles.copy}>
              Whether you&apos;re looking for encouragement, practical advice,
              or the latest research, new stories are always waiting to help
              you take the next step.
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