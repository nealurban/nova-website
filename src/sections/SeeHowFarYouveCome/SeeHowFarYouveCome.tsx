import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./SeeHowFarYouveCome.module.css";

export default function SeeHowFarYouveCome() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/sections/see-how-far-youve-come.png"
          alt="Nova app screens showing money saved, recovery milestones, and community support."
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
              <span>03</span>
              See How Far You&apos;ve Come
            </p>

            <h2 className={styles.title}>
              Every day forward becomes something you can see, feel, and share.
            </h2>

            <div className={styles.divider} aria-hidden="true" />

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  $
                </div>

                <div>
                  <h3>Money Saved</h3>
                  <p>
                    See the life and financial freedom you&apos;re building with
                    every choice.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ◉
                </div>

                <div>
                  <h3>Medals &amp; Milestones</h3>
                  <p>
                    Celebrate your wins, big and small, and see how far
                    you&apos;ve come.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ♡
                </div>

                <div>
                  <h3>Nova Club</h3>
                  <p>
                    Connect with people who understand, encourage, and celebrate
                    every step forward.
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