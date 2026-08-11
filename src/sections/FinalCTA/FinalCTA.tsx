import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  return (
    <section className={styles.section} id="download">
      <Container>
        <FadeIn>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Your Next Step</p>

            <h2 className={styles.title}>
              You don&apos;t have to do this alone.
            </h2>

            <p className={styles.copy}>
              Nova is here for the difficult moments, the quiet victories, and
              every step in between.
            </p>

            <span
              className={styles.appStoreButton}
              aria-label="Nova is coming soon to the App Store"
            >
              <span className={styles.appleIcon} aria-hidden="true">
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