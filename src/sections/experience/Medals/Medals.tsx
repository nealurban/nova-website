import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./Medals.module.css";

export default function Medals() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/experience/experience-beach-walk-medals.png"
          alt="Nova sobriety milestones and recovery medals displayed beside a peaceful coastal boardwalk."
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
              CELEBRATE PROGRESS
            </p>

            <h2 className={styles.title}>
              Every step forward deserves to be celebrated.
            </h2>

            <p className={styles.intro}>
  Recovery is built one day at a time. Nova celebrates every sobriety
  milestone along the way because every day you choose yourself is
  worth recognizing.
</p>

            <div className={styles.divider} aria-hidden="true" />

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ✦
                </div>

                <div>
                  <h3>Celebrate every milestone</h3>
                  <p>
                    From your very first day to years of recovery, every
                    achievement matters.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 3L12 8L15 3"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle
                      cx="12"
                      cy="15"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    />
                    <path
                      d="M12 12.8L12.7 14.2L14.2 14.4L13.1 15.5L13.4 17L12 16.2L10.6 17L10.9 15.5L9.8 14.4L11.3 14.2L12 12.8Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div>
                  <h3>Build your collection</h3>
                  <p>
                    Watch your collection grow as your commitment grows with
                    it.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ♡
                </div>

                <div>
                  <h3>Be proud of your journey</h3>
                  <p>
                    Every milestone reminds you how far you've come, even on
                    the days when progress feels quiet.
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