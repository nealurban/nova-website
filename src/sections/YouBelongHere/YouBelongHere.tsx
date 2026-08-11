import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./YouBelongHere.module.css";

export default function YouBelongHere() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/sections/section-ocean-chair-sunrise.png"
          alt="A peaceful Adirondack chair overlooking the ocean at sunrise."
          fill
          className={styles.image}
        />

        <div
  className={styles.overlay}
  aria-hidden="true"
/>
      </div>

      <Container>
        <FadeIn>
          <div className={styles.content}>
            <p className={styles.eyebrow}>YOU BELONG HERE</p>

            <h2 className={styles.title}>
              You don&apos;t have to
              <br />
              face this alone.
            </h2>

            <p className={styles.text}>
              Whether you&apos;re trying to quit drinking, cut back,
              <br />
              celebrating Day 1, or Day 1000,
              <br />
              you deserve <strong>support</strong> that meets you where you are.
              <br />
              <strong>You&apos;re welcome here.</strong>
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}