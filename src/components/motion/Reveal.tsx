"use client";

import { motion, useReducedMotion } from "motion/react";
import { easeEnter, venice } from "@/lib/motion";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={
        reduce
          ? { duration: 0 }
          : {
              opacity: { duration: venice.dissolveMs / 1000, delay, ease: easeEnter },
              y: { duration: venice.hoverMs / 1000, delay, ease: easeEnter },
            }
      }
    >
      {children}
    </motion.div>
  );
}
