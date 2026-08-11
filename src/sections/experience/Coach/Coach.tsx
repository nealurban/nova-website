import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./Coach.module.css";

export default function Coach() {
  return (
    <section id="coach" className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/experience/experience-kitchen-coach.png"
          alt="A warm coastal kitchen in morning light with Nova Coach displayed on a phone."
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
             NOVA COACH
            </p>

            <h2 className={styles.title}>
              Guidance whenever you need it.
            </h2>

            <p className={styles.intro}>
              Nova Coach is your private sobriety coach, offering encouragement, practical guidance, and support that meets you where you are.
            </p>

            <div className={styles.divider} aria-hidden="true" />

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ✦
                </div>

                <div>
                  <h3>Private conversations</h3>
                  <p>
                    Talk through difficult moments without judgment or
                    pressure.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ♡
                </div>

                <div>
                  <h3>Encouragement that sticks</h3>
                  <p>
                    Find calm, honest support when your confidence feels
                    uncertain.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ◇
                </div>

                <div>
                  <h3>Support you can count on</h3>
                  <p>
                    Return whenever you need help taking the next step
                    forward.
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