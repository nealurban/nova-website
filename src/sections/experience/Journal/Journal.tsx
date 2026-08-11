import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./Journal.module.css";

export default function Journal() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/experience/experience-breakfast-nook-journal.png"
          alt="A peaceful breakfast nook in warm morning light with the Nova sobriety journal displayed on a phone."
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
              JOURNAL
            </p>

            <h2 className={styles.title}>
              Write it out.
              <br />
              Let it go.
            </h2>

            <p className={styles.intro}>
  Some thoughts become easier to understand once they are written
  down. Nova's private sobriety journal gives you a quiet place to
  reflect, release what you are carrying, and make sense of what
  comes next.
</p>

            <div className={styles.divider} aria-hidden="true" />

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ✎
                </div>

                <div>
                  <h3>Daily reflection</h3>
                  <p>
                    Give your thoughts room to breathe and notice what each day
                    is teaching you.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ◇
                </div>

                <div>
                  <h3>Private and personal</h3>
                  <p>
                    Keep your reflections in one calm place that belongs only
                    to you.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ✦
                </div>

                <div>
                  <h3>See your growth</h3>
                  <p>
                    Look back over time and recognize the progress that can be
                    easy to miss.
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