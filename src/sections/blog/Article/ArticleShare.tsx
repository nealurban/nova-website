"use client";

import { useState } from "react";
import styles from "./Article.module.css";

type ArticleShareProps = {
  title: string;
};

export default function ArticleShare({
  title,
}: ArticleShareProps) {
  const [copied, setCopied] = useState(false);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  }

  async function shareArticle() {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });

        return;
      } catch (error) {
        if (
          error instanceof DOMException &&
          error.name === "AbortError"
        ) {
          return;
        }
      }
    }

    await copyLink();
  }

  return (
    <div
      className={styles.articleShare}
      aria-label="Share this article"
    >
      <span className={styles.shareLabel}>
        Share
      </span>

      <div className={styles.shareActions}>
        <button
          type="button"
          className={styles.shareButton}
          onClick={shareArticle}
        >
          Share article
        </button>

        <button
          type="button"
          className={styles.copyButton}
          onClick={copyLink}
        >
          {copied ? "Copied" : "Copy link"}
        </button>
      </div>
    </div>
  );
}