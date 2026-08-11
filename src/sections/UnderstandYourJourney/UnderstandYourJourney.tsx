import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./UnderstandYourJourney.module.css";

export default function UnderstandYourJourney() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/sections/understand-your-journey.png"
          alt="Nova app screens showing journaling, habit patterns, and recovery progress over time."
          fill
          sizes="100vw"
          className={styles.image}
        />

        <div
  className={styles.imageFade}
  aria-hidden="true"
/>
      </div>

      <Container className={styles.container}>
        <FadeIn>
          <div className={styles.content}>
            <p className={styles.eyebrow}>
              <span>02</span>
              Understand Your Journey
            </p>

            <h2 className={styles.title}>
              The more you understand your journey, the easier it becomes to
              move forward with intention.
            </h2>

            <div className={styles.divider} aria-hidden="true" />

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ✎
                </div>

                <div>
                  <h3>Journal</h3>
                  <p>
                    A safe place to reflect, release, and grow through your
                    thoughts.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ◫
                </div>

                <div>
                  <h3>Patterns</h3>
                  <p>
                    Gentle insights that help you understand what influences
                    your choices.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ◷
                </div>

                <div>
                  <h3>Recovery Timeline</h3>
                  <p>
                    See your progress unfold and celebrate every step forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}