import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./Situations.module.css";

export default function Situations() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/experience/experience-dining-room-situations.png"
          alt="A warm coastal dining room prepared for a gathering, with Nova's sobriety support for social situations displayed on a phone."
          fill
          sizes="100vw"
          className={styles.image}
        />

        <div className={styles.imageFade} aria-hidden="true" />
      </div>

      <Container className={styles.container}>
        <FadeIn>
          <div className={styles.content}>
            <p className={styles.eyebrow}>SITUATIONAL HELP</p>

            <h2 className={styles.title}>
              Feel prepared before the moment arrives.
            </h2>

            <p className={styles.intro}>
  Real life does not pause for recovery. Nova provides sobriety support
  for life's most challenging moments, helping you walk in with a plan
  and leave feeling proud of yourself.
</p>

            <div className={styles.divider} aria-hidden="true" />

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ◇
                </div>

                <div>
                  <h3>Prepare for real life</h3>
                  <p>
                    Get support for work events, vacations, dinners, holidays,
                    celebrations, and more.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ◎
                </div>

                <div>
                  <h3>Build a plan</h3>
                  <p>
                    Think through what could feel difficult and decide how you
                    want to handle it before you arrive.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ✦
                </div>

                <div>
                  <h3>Move with confidence</h3>
                  <p>
                    Enter the moment feeling grounded, prepared, and clear
                    about what matters to you.
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