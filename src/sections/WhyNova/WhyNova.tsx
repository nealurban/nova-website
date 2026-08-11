import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./WhyNova.module.css";

export default function WhyNova() {
  return (
    <section className={styles.section}>
      <Container>
        <FadeIn>
          <div className={styles.content}>
            <p className={styles.eyebrow}>WHY NOVA EXISTS</p>

            <h2 className={styles.title}>
              Maybe you&apos;ve been thinking about quitting for a while.
            </h2>

            <p className={styles.text}>
              You don&apos;t need another lecture.
              <br />
              You don&apos;t need another app counting days.
              <br />
              You need someone in your corner.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}