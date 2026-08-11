"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./TableOfContents.module.css";

type TableOfContentsProps = {
  headings: string[];
};

function createHeadingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export default function TableOfContents({
  headings,
}: TableOfContentsProps) {
  const headingItems = useMemo(
    () =>
      headings.map((heading) => ({
        text: heading,
        id: createHeadingId(heading),
      })),
    [headings]
  );

  const [activeId, setActiveId] = useState(
    headingItems[0]?.id ?? ""
  );

  useEffect(() => {
    const elements = headingItems
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top -
              b.boundingClientRect.top
          );

        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, [headingItems]);

  if (headingItems.length === 0) {
    return null;
  }

  return (
    <aside className={styles.container}>
      <p className={styles.eyebrow}>On this page</p>

      <nav aria-label="On this page">
        <ol className={styles.list}>
          {headingItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={
                  activeId === item.id
                    ? styles.active
                    : undefined
                }
              >
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </aside>
  );
}