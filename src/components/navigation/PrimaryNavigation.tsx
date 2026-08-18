"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "../layout/Container";
import styles from "./PrimaryNavigation.module.css";

export default function PrimaryNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <Container className={styles.inner}>
        <a
          href="/"
          className={styles.logoLink}
          aria-label="Nova home"
          onClick={closeMenu}
        >
          <Image
  src="/logos/nova-logo-dark.svg"
  alt="Nova"
  width={140}
  height={90}
  priority
  className={styles.logo}
  style={{ height: "auto" }}
/>
        </a>

        <nav
          className={styles.desktopMenu}
          aria-label="Primary navigation"
        >
          <a href="/experience">Experience</a>
          <a href="/blog">Blog</a>
          <a href="/support">Support</a>

          <a
  href="https://apps.apple.com/app/nova-sobriety-companion/id6784290254"
  className={styles.download}
  aria-label="Download Nova on the App Store"
  target="_blank"
  rel="noopener noreferrer"
>
  <span className={styles.downloadApple} aria-hidden="true">
    
  </span>

  <span className={styles.downloadText}>
    <small>Download on the</small>
    <strong>App Store</strong>
  </span>
</a>
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={
            isOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          onClick={() =>
            setIsOpen((current) => !current)
          }
        >
          <span
            className={
              isOpen
                ? styles.lineTopOpen
                : styles.lineTop
            }
            aria-hidden="true"
          />

          <span
            className={
              isOpen
                ? styles.lineBottomOpen
                : styles.lineBottom
            }
            aria-hidden="true"
          />
        </button>
      </Container>

      <div
        className={`${styles.mobilePanel} ${
          isOpen ? styles.mobilePanelOpen : ""
        }`}
        id="mobile-navigation"
      >
        <nav
          className={styles.mobileMenu}
          aria-label="Mobile navigation"
        >
          <a
            href="/experience"
            onClick={closeMenu}
          >
            Experience
          </a>

          <a
            href="/blog"
            onClick={closeMenu}
          >
            Blog
          </a>

          <a
            href="/support"
            onClick={closeMenu}
          >
            Support
          </a>

         <a
  href="https://apps.apple.com/app/nova-sobriety-companion/id6784290254"
  className={styles.mobileDownload}
  aria-label="Download Nova on the App Store"
  target="_blank"
  rel="noopener noreferrer"
  onClick={closeMenu}
>
  <span className={styles.downloadApple} aria-hidden="true">
    
  </span>

  <span className={styles.downloadText}>
    <small>Download on the</small>
    <strong>App Store</strong>
  </span>
</a>
        </nav>
      </div>

      {isOpen && (
        <button
          type="button"
          className={styles.backdrop}
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}