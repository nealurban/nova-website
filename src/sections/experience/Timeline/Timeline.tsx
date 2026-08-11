import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./Timeline.module.css";

export default function Timeline() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/experience/experience-sunroom-timeline.png"
          alt="A peaceful coastal sunroom with the Nova sobriety recovery timeline displayed on a phone."
          fill
          sizes="100vw"
          className={styles.image}
        />

        <div className={styles.imageFade} aria-hidden="true" />
      </div>

      <Container className={styles.container}>
        <FadeIn>
          <div className={styles.content}>
            <p className={styles.eyebrow}>RECOVERY TIMELINE</p>

            <h2 className={styles.title}>
              See how your body and mind are healing.
            </h2>

            <p className={styles.intro}>
  Recovery is changing more than the number on your counter. Nova's
  recovery timeline helps you understand the progress unfolding beneath
  the surface and what each stage may bring.
</p>

            <div className={styles.divider} aria-hidden="true" />

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ◷
                </div>

                <div>
                  <h3>Follow each stage</h3>
                  <p>
                    Learn how your sleep, energy, focus, mood, and body may
                    change over time.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ◎
                </div>

                <div>
                  <h3>Understand what you feel</h3>
                  <p>
                    Put difficult days and unexpected changes into a clearer
                    recovery context.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ✦
                </div>

                <div>
                  <h3>Notice the progress</h3>
                  <p>
                    Recognize meaningful changes that can be easy to overlook
                    while you are living through them.
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