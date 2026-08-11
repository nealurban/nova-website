import Image from "next/image";
import styles from "./PhoneMockup.module.css";

type PhoneMockupProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function PhoneMockup({
  src,
  alt,
  className = "",
}: PhoneMockupProps) {
  return (
    <div className={`${styles.device} ${className}`.trim()}>
      <div className={styles.sideButton} aria-hidden="true" />

      <div className={styles.screen}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 78vw, 32vw"
          className={styles.screenshot}
        />

        <div className={styles.dynamicIsland} aria-hidden="true" />
      </div>
    </div>
  );
}