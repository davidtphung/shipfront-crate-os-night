"use client";

import { motion, useReducedMotion } from "motion/react";
import { customerSuccess } from "@/data/site-copy";
import { easeEnter, venice } from "@/lib/motion";

export function CustomerSuccess() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-black" aria-labelledby="success-heading">
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={
            reduce
              ? { duration: 0 }
              : {
                  opacity: { duration: venice.dissolveMs / 1000, ease: easeEnter },
                  y: { duration: venice.hoverMs / 1000, ease: easeEnter },
                }
          }
        >
          <p className="text-[12px] font-medium tracking-[0.16em] text-[#FF6A00] uppercase">
            Customer success
          </p>
          <h2 id="success-heading" className="sr-only">
            Customer success
          </h2>
          <p className="mt-4 max-w-[18ch] text-[34px] leading-[1.12] font-semibold tracking-[-0.04em] text-white sm:text-[48px] lg:text-[56px]">
            {customerSuccess.copy}
          </p>
        </motion.div>
        <motion.div
          className="rounded-[20px] border border-white/8 bg-[#050505] p-6"
          aria-hidden
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
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
          <svg viewBox="0 0 360 260" className="w-full">
            <path
              d="M70 70 C 140 70, 140 130, 180 130 C 230 130, 240 80, 300 80"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.6"
            />
            <path
              d="M180 130 C 180 180, 240 200, 300 200"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.6"
              opacity="0.5"
            />
            <circle cx="70" cy="70" r="28" fill="#111111" stroke="rgba(255,255,255,0.16)" />
            <circle cx="180" cy="130" r="34" fill="#111111" stroke="#FFFFFF" />
            <circle cx="300" cy="80" r="28" fill="#111111" stroke="rgba(255,255,255,0.16)" />
            <circle cx="300" cy="200" r="16" fill="#FFFFFF" />
            <text x="70" y="74" textAnchor="middle" fontSize="9" fill="#FFFFFF">
              Merchant
            </text>
            <text x="180" y="128" textAnchor="middle" fontSize="8" fill="#FFFFFF">
              Account
            </text>
            <text x="180" y="140" textAnchor="middle" fontSize="8" fill="#FFFFFF">
              manager
            </text>
            <text x="300" y="84" textAnchor="middle" fontSize="8" fill="#FFFFFF">
              Operations
            </text>
            <text x="300" y="204" textAnchor="middle" fontSize="8" fill="#000000">
              Done
            </text>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
