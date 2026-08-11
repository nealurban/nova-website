import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./SupportInTheMoment.module.css";

export default function SupportInTheMoment() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/sections/support-in-the-moment.png"
          alt="Nova app screens showing AI coaching and situational support for difficult moments."
          fill
          sizes="100vw"
          className={styles.image}
        />

       <div
  className={styles.imageFade}
  aria-hidden="true"
/>
      </div>

      <Container>
        <FadeIn>
          <div className={styles.content}>
            <p className={styles.eyebrow}>
              <span>01</span>
              Support in the Moment
            </p>

            <h2 className={styles.title}>
              When the moment feels difficult, you don&apos;t have to figure it
              out alone.
            </h2>

            <div className={styles.divider} aria-hidden="true" />

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ✦
                </div>

                <div>
                  <h3>Nova Coach</h3>
                  <p>
                    Encouragement, guidance, and practical support whenever you
                    need it.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ♡
                </div>

                <div>
                  <h3>Situational Help</h3>
                  <p>
                    Real-world tools for celebrations, cravings, vacations,
                    work events, and more.
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