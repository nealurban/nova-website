"use client";

import { useEffect, useState } from "react";
import styles from "./ReadingProgress.module.css";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;

      const scrollHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (scrollHeight <= 0) {
        setProgress(0);
        return;
      }

      const nextProgress = Math.min(
        100,
        Math.max(0, (scrollTop / scrollHeight) * 100)
      );

      setProgress(nextProgress);
    }

    updateProgress();

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div
      className={styles.track}
      aria-hidden="true"
    >
      <div
        className={styles.bar}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}