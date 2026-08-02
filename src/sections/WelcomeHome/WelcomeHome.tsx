import Image from "next/image";
import Container from "@/components/layout/Container";
import styles from "./WelcomeHome.module.css";

export default function WelcomeHome() {
  return (
    <section className={styles.welcomeHome}>
      <Image
        src="/images/hero/nova-hero.jpg"
        alt="A peaceful, sunlit coastal living room with a Golden Retriever resting on the rug."
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
            <a href="#download" className={styles.primaryAction}>
              Download Nova
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