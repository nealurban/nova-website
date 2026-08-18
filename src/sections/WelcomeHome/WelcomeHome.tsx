import Image from "next/image";
import Container from "@/components/layout/Container";
import styles from "./WelcomeHome.module.css";

const APP_STORE_URL =
  "https://apps.apple.com/app/nova-sobriety-companion/id6784290254";

export default function WelcomeHome() {
  return (
    <section className={styles.welcomeHome}>
      <Image
        src="/images/hero/nova-hero.jpg"
        alt="A peaceful coastal living room in warm morning light, with a Golden Retriever resting on the rug."
        fill
        priority
        sizes="100vw"
        className={styles.heroImage}
      />

      <div className={styles.imageTreatment} aria-hidden="true" />

      <Container className={styles.contentContainer}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            A peaceful life is still waiting for you.
          </h1>

          <p className={styles.copy}>
            Nova is a sobriety companion designed to help you quit drinking or
            cut back, understand your patterns, and find support whenever you
            need it.
          </p>

          <div className={styles.actions}>
            <a
              href={APP_STORE_URL}
              className={styles.primaryAction}
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

            <a href="#how-nova-helps" className={styles.secondaryAction}>
              See How Nova Helps
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}