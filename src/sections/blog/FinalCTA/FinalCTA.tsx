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