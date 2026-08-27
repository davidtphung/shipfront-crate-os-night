"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { howItWorks } from "@/data/site-copy";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { easeEnter, venice } from "@/lib/motion";

export function ProcessJourney() {
  const [active, setActive] = useState(0);
  const step = howItWorks.steps[active];
  const reduce = useReducedMotion();

  return (
    <section className="border-y border-white/8 bg-[#050505]" aria-labelledby="process-heading">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:py-28">
        <div>
          <h2
            id="process-heading"
            className="max-w-[18ch] text-[34px] leading-[1.08] font-semibold tracking-[-0.04em] text-white sm:text-[48px]"
          >
            {howItWorks.headline}
          </h2>
          <ol className="mt-8 space-y-2">
            {howItWorks.steps.map((item, i) => (
              <motion.li
                key={item.title}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={
                  reduce
                    ? { duration: 0 }
                    : {
                        opacity: { duration: venice.dissolveMs / 1000, delay: i * 0.08, ease: easeEnter },
                        y: { duration: venice.hoverMs / 1000, delay: i * 0.08, ease: easeEnter },
                      }
                }
              >
                <motion.button
                  type="button"
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex min-h-11 w-full items-center gap-4 rounded-[14px] px-3 py-3 text-left",
                    active === i ? "bg-black text-white" : "text-white/65",
                  )}
                  aria-current={active === i ? "step" : undefined}
                  whileHover={
                    reduce
                      ? undefined
                      : { y: -2, transition: { duration: venice.hoverMs / 1000, ease: easeEnter } }
                  }
                  whileTap={
                    reduce
                      ? undefined
                      : { scale: venice.press, transition: { duration: venice.hoverMs / 1000, ease: easeEnter } }
                  }
                >
                  <span className={cn("font-mono text-[12px]", active === i ? "text-[#FF6A00]" : "text-white/40")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[16px] font-medium sm:text-[18px]">{item.title}</span>
                </motion.button>
              </motion.li>
            ))}
          </ol>
          <div className="mt-8">
            <Button
              asChild
              className="min-h-11 bg-[#FF6A00] px-5 text-[15px] font-medium text-black hover:bg-[#FF6A00]/90"
            >
              <Link href="/get-a-quote/">Get a Quote</Link>
            </Button>
          </div>
        </div>
        <motion.div
          className="rounded-[20px] border border-white/8 bg-black p-6 sm:p-8"
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={
            reduce
              ? { duration: 0 }
              : {
                  opacity: { duration: venice.dissolveMs / 1000, delay: 0.08, ease: easeEnter },
                  y: { duration: venice.hoverMs / 1000, delay: 0.08, ease: easeEnter },
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
          <p className="font-mono text-[11px] tracking-[0.16em] text-[#FF6A00] uppercase">
            Connect, Store, Fulfill, Deliver, Grow
          </p>
          <AnimatePresence initial={false}>
            <motion.p
              key={step.title}
              className="mt-6 text-[28px] leading-tight font-semibold tracking-[-0.03em] text-white sm:text-[36px]"
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -8 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : { duration: venice.dissolveMs / 1000, ease: easeEnter }
              }
            >
              {step.title}
            </motion.p>
          </AnimatePresence>
          <svg viewBox="0 0 420 180" className="mt-8 w-full" aria-hidden>
            {howItWorks.steps.map((_, i) => (
              <g key={i}>
                <motion.circle
                  cx={30 + i * 58}
                  cy="90"
                  r={i === active ? 14 : 8}
                  fill={i === active ? "#FFFFFF" : "#1A1A1A"}
                  stroke={i === active ? "#FF6A00" : "rgba(255,255,255,0.2)"}
                  strokeWidth="1.25"
                  animate={{ r: i === active ? 14 : 8 }}
                  transition={
                    reduce
                      ? { duration: 0 }
                      : { duration: venice.hoverMs / 1000, ease: easeEnter }
                  }
                />
                {i < howItWorks.steps.length - 1 ? (
                  <line
                    x1={44 + i * 58}
                    y1="90"
                    x2={72 + i * 58}
                    y2="90"
                    stroke="rgba(255,255,255,0.2)"
                    strokeWidth="2"
                  />
                ) : null}
              </g>
            ))}
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
