import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./NovaClub.module.css";

export default function NovaClub() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/experience/experience-beach-chair-nova-club.png"
          alt="A peaceful beach at golden hour with the Nova sobriety community displayed on a phone and people gathering softly in the background."
          fill
          sizes="100vw"
          className={styles.image}
        />

        <div className={styles.imageFade} aria-hidden="true" />
      </div>

      <Container className={styles.container}>
        <FadeIn>
          <div className={styles.content}>
            <p className={styles.eyebrow}>NOVA CLUB</p>

            <h2 className={styles.title}>
              The journey changes when you have people beside you.
            </h2>

            <p className={styles.intro}>
  Recovery feels different when you're part of a supportive sobriety
  community that understands the difficult days, celebrates the quiet
  victories, and reminds you that you're not alone.
</p>

            <div className={styles.divider} aria-hidden="true" />

            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ♡
                </div>

                <div>
                  <h3>People who get it</h3>
                  <p>
                    Share victories and lean on people who understand the road you're walking.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ✦
                </div>

                <div>
                  <h3>Celebrate together</h3>
                  <p>
                    Let every milestone feel bigger when there are people ready
                    to cheer you on.
                  </p>
                </div>
              </div>

              <div className={styles.feature}>
                <div className={styles.icon} aria-hidden="true">
                  ◇
                </div>

                <div>
                  <h3>You belong here</h3>
                  <p>
                    Find a place where progress is celebrated, 
                    difficult days are understood, and you never 
                    have to pretend you're doing it alone.
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