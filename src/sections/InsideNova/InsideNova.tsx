import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./InsideNova.module.css";

const pillars = [
  "Support for today.",
  "Clarity for tomorrow.",
  "Progress you can feel.",
  "Community that gets it.",
];

export default function InsideNova() {
  return (
    <section className={styles.insideNova} id="how-nova-helps">
      <Container className={styles.container}>
        <FadeIn>
          <div className={styles.content}>
            <p className={styles.eyebrow}>Inside Nova</p>

            <h2 className={styles.headline}>
              Everything you need
              <br />
              for the moments
              <br />
              that matter most.
            </h2>

            <div className={styles.pillars}>
              {pillars.map((pillar) => (
                <p key={pillar} className={styles.pillar}>
                  {pillar}
                </p>
              ))}
            </div>

            <div className={styles.scrollCue} aria-hidden="true">
              <span />
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}