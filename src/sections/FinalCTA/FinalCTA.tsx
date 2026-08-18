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

            <a
  href="https://apps.apple.com/app/nova-sobriety-companion/id6784290254"
  className={styles.appStoreButton}
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
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}