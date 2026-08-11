import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./MeetNova.module.css";

export default function MeetNova() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/sections/meet-nova-app-v4.png"
          alt="Nova's home screen showing daily support, progress, and community features."
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
            <p className={styles.eyebrow}>MEET NOVA</p>

            <h2 className={styles.title}>
              The companion built for every step forward.
            </h2>

            <div className={styles.body}>
              <p>
                Whether you&apos;re trying to quit drinking, cutting back, or
                simply building a healthier relationship with alcohol, Nova
                walks beside you.
              </p>

              <p>
                Encouragement, practical tools, personal insights, and
                community come together in one calm, beautiful place.
              </p>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}