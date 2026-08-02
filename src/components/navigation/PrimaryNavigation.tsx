import Container from "../layout/Container";
import styles from "./PrimaryNavigation.module.css";
import Image from "next/image";

export default function PrimaryNavigation() {
  return (
    <header className={styles.navigation}>
      <Container className={styles.inner}>
        <a href="/" className={styles.logo} aria-label="Nova home">
        <Image
  src="/logos/nova-logo-dark.svg"
  alt="Nova"
  width={170}
  height={40}
  priority
/>
        </a>

        <nav className={styles.menu} aria-label="Primary navigation">
          <a href="#features">Features</a>
          <a href="#blog">Blog</a>
          <a href="#support">Support</a>
          <a href="#download" className={styles.download}>
            Download
          </a>
        </nav>
      </Container>
    </header>
  );
}