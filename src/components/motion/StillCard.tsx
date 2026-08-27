"use client";

import { motion, useReducedMotion } from "motion/react";
import { easeEnter, venice } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Ken = "in" | "left" | "right" | "up";

export function StillCard({
  src,
  alt,
  delay = 0,
  ken = "in",
  className,
  stillClassName,
  children,
  stillFirst = true,
}: {
  src: string;
  alt: string;
  delay?: number;
  ken?: Ken;
  className?: string;
  stillClassName?: string;
  children?: React.ReactNode;
  stillFirst?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className={cn(
        "still-card group overflow-hidden rounded-[20px] border border-white/8 bg-[#050505]",
        className,
      )}
      initial={reduce ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.24 }}
      transition={
        reduce
          ? { duration: 0 }
          : {
              opacity: { duration: venice.dissolveMs / 1000, delay, ease: easeEnter },
              y: { duration: venice.hoverMs / 1000, delay, ease: easeEnter },
            }
      }
      whileHover={
        reduce
          ? undefined
          : { y: -4, transition: { duration: venice.hoverMs / 1000, ease: easeEnter } }
      }
      whileTap={
        reduce
          ? undefined
          : { scale: venice.press, transition: { duration: venice.hoverMs / 1000, ease: easeEnter } }
      }
    >
      {stillFirst ? (
        <>
          <StillFrame src={src} alt={alt} ken={ken} reduce={Boolean(reduce)} className={stillClassName} />
          {children}
        </>
      ) : (
        <>
          {children}
          <StillFrame src={src} alt={alt} ken={ken} reduce={Boolean(reduce)} className={stillClassName} />
        </>
      )}
    </motion.article>
  );
}

function StillFrame({
  src,
  alt,
  ken,
  reduce,
  className,
}: {
  src: string;
  alt: string;
  ken: Ken;
  reduce: boolean;
  className?: string;
}) {
  return (
    <div className={cn("still-frame relative overflow-hidden", className)}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className={cn("still-media", !reduce && `still-ken still-ken--${ken}`)}
        loading="lazy"
        width={1600}
        height={1067}
      />
    </div>
  );
}

export function MotionChip({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.li
      className={cn(
        "rounded-[14px] border border-white/8 bg-black px-3 py-4 text-center text-[13px] font-medium text-white",
        className,
      )}
      initial={reduce ? false : { opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={
        reduce
          ? { duration: 0 }
          : {
              opacity: { duration: venice.dissolveMs / 1000, delay, ease: easeEnter },
              y: { duration: venice.hoverMs / 1000, delay, ease: easeEnter },
            }
      }
      whileHover={
        reduce
          ? undefined
          : { scale: 1.04, transition: { duration: venice.hoverMs / 1000, ease: easeEnter } }
      }
      whileTap={
        reduce
          ? undefined
          : { scale: venice.press, transition: { duration: venice.hoverMs / 1000, ease: easeEnter } }
      }
    >
      {children}
    </motion.li>
  );
}
