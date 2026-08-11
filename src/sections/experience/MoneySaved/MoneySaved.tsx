import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./MoneySaved.module.css";

export default function MoneySaved() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/experience/experience-patio-money-saved.png"
          alt="A peaceful coastal garden sitting area with Nova's money saved from quitting alcohol tracker displayed on a phone."
          fill
          sizes="100vw"
          className={styles.image}
        />

        <div className={styles.imageFade} aria-hidden="true" />
      </div>

      <Container className={styles.container}>
        <FadeIn>
          <div className={styles.content}>
            <p className={styles.eyebrow}>MONEY SAVED</p>

            <h2 className={styles.title}>
              Your choices are giving something back.
            </h2>

            <p className={styles.intro}>
  Every alcohol-free day creates more than savings. It creates
  opportunities, better health, and more peace of mind. Nova's money
  saved tracker helps you see what your progress is making possible.
</p>

            <div className={styles.divider} aria-hidden="true" />

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ◇
                </div>

                <div>
                  <h3>More than dollars</h3>
                  <p>
                    See how small daily choices grow into meaningful
                    opportunities over time.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ✦
                </div>

                <div>
                  <h3>Celebrate what is possible</h3>
                  <p>
                    Picture a morning coffee, time with family, a personal goal,
                    or the vacation you have been dreaming about.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ♡
                </div>

                <div>
                  <h3>Progress you can feel</h3>
                  <p>
                    Let every day remind you that you are building a healthier,
                    more peaceful life.
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