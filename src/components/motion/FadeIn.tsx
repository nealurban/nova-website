"use client";

import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function FadeIn({
  children,
  className,
  delay = 0,
}: FadeInProps) {
  const [hasMounted, setHasMounted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  /*
    The server and the browser initially render the exact same plain div.
    Motion is enabled only after the page has mounted.
  */
  if (!hasMounted) {
    return <div className={className}>{children}</div>;
  }

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{
  opacity: 0,
  y: 32,
}}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
     viewport={{
  once: true,
  amount: 0.12,
  margin: "0px 0px -5% 0px",
}}
      transition={{
        duration: 1.5,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}