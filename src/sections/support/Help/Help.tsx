import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/motion/FadeIn";
import styles from "./Help.module.css";

const supportTools = [
  {
  title: "Relapse Shield",
  description:
    "Your one-tap safety net for difficult moments, offering encouragement, grounding, and support before a setback happens.",
},
  {
    title: "Nova Coach",
    description:
      "Talk through what you’re feeling with calm encouragement and practical guidance.",
  },
  {
    title: "Situational Help",
    description:
      "Prepare for cravings, triggers, weddings, vacations, celebrations, and other real-life moments.",
  },
  {
    title: "Crisis Support",
    description:
      "Find immediate resources when you need more support than Nova can provide.",
  },
  {
    title: "Nova Club",
    description:
      "Connect with a community that understands the difficult days and celebrates every step forward.",
  },
];

export default function Help() {
  return (
    <section className={styles.section}>
      <div className={styles.imageWrapper}>
        <Image
          src="/images/support/support-founder-maverick-walk.png"
          alt="Nova founder Neal walking with his Golden Retriever, Maverick, along a coastal path toward the ocean at sunset."
          fill
          sizes="(max-width: 48rem) 100vw, 50vw"
          className={styles.image}
        />
      </div>

      <Container className={styles.container}>
        <FadeIn>
          <div className={styles.content}>
            <p className={styles.eyebrow}>HELP WHEN YOU NEED IT MOST</p>

            <h2 className={styles.title}>
              Support designed to walk beside you.
            </h2>

            <p className={styles.intro}>
              Nova was created from experience and built around the moments
              when having the right support can make all the difference.
            </p>

            <div className={styles.tools}>
              {supportTools.map((tool) => (
                <div className={styles.tool} key={tool.title}>
                  <div className={styles.marker} aria-hidden="true">
                    ✦
                  </div>

                  <div>
                    <h3>{tool.title}</h3>
                    <p>{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}