import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./Patterns.module.css";

export default function Patterns() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/experience/experience-library-patterns.png"
          alt="A warm study with the Nova sobriety tracker displaying recovery patterns on a phone."
          fill
          sizes="100vw"
          className={styles.image}
        />

        <div className={styles.imageFade} aria-hidden="true" />
      </div>

      <Container className={styles.container}>
        <FadeIn>
          <div className={styles.content}>
            <p className={styles.eyebrow}>
              PATTERNS
            </p>

            <h2 className={styles.title}>
              Discover what you
              <br />
              never noticed before.
            </h2>

            <p className={styles.intro}>
  Patterns are often hidden until you step back and see the bigger
  picture. Nova's sobriety tracker helps you recognize the habits,
  triggers, and routines that quietly shape your recovery.
</p>

            <div className={styles.divider} aria-hidden="true" />

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ◎
                </div>

                <div>
                  <h3>Spot your patterns</h3>
                  <p>
                    Discover the moments, emotions, and routines that appear
                    more often than you realized.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ◔
                </div>

                <div>
                  <h3>Learn what influences you</h3>
                  <p>
                    Notice what helps you succeed and what makes difficult days
                    harder so you can prepare with confidence.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ✦
                </div>

                <div>
                  <h3>Make better decisions</h3>
                  <p>
                    Small insights become lasting change when you understand
                    yourself a little more each day.
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