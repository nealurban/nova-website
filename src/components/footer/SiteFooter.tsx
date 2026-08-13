import Image from "next/image";
import Link from "next/link";
import Container from "../layout/Container";
import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.top}>
          <Link href="/" className={styles.logo} aria-label="Nova home">
            <Image
              src="/logos/nova-logo-dark.svg"
              alt=""
              width={170}
              height={40}
            />
          </Link>

          <p className={styles.message}>
            A peaceful life is still waiting for you.
          </p>

          <p className={styles.founderLine}>
            Created by Neal, someone who chose sobriety and built the companion
            he wished he&apos;d had.
          </p>
        </div>

        <nav className={styles.links} aria-label="Footer navigation">
          <div className={styles.linkGroup}>
            <p className={styles.label}>Explore</p>
            <Link href="/experience">Experience</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/support">Support</Link>
          </div>

          <div className={styles.linkGroup}>
            <p className={styles.label}>Nova</p>
            <Link href="/#download">Download</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>

          <div className={styles.linkGroup}>
            <p className={styles.label}>Follow</p>

            <a
  href="https://www.instagram.com/nova.recovery"
  target="_blank"
  rel="noopener noreferrer"
  className={styles.socialLink}
  aria-label="Follow Nova on Instagram"
>
  <svg
  viewBox="0 0 24 24"
  width="18"
  height="18"
  aria-hidden="true"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect
    x="3"
    y="3"
    width="18"
    height="18"
    rx="5"
    stroke="currentColor"
    strokeWidth="1.6"
  />
  <circle
    cx="12"
    cy="12"
    r="4"
    stroke="currentColor"
    strokeWidth="1.6"
  />
  <circle
    cx="17.5"
    cy="6.5"
    r="1"
    fill="currentColor"
  />
</svg>
  <span>Instagram</span>
</a>
          </div>
        </nav>

        <div className={styles.bottom}>
          <p>© 2026 Nova</p>
          <p>Sobriety Companion</p>
        </div>
      </Container>
    </footer>
  );
}