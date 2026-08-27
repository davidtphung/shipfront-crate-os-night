"use client";

import { motion, useReducedMotion } from "motion/react";
import { Hero } from "@/components/shipfront/Hero";
import { NetworkExperience } from "@/components/shipfront/NetworkExperience";
import { ServiceModules } from "@/components/shipfront/ServiceModules";
import { ProcessJourney } from "@/components/shipfront/ProcessJourney";
import { CustomerSuccess } from "@/components/shipfront/CustomerSuccess";
import { ContactCTA } from "@/components/shipfront/ContactCTA";
import { capabilityList } from "@/data/site-copy";
import { easeEnter, venice } from "@/lib/motion";

export default function HomePage() {
  const reduce = useReducedMotion();

  return (
    <>
      <Hero />
      <section aria-label="Capabilities" className="border-y border-white/8 bg-[#050505]">
        <ul className="mx-auto flex max-w-[1440px] flex-wrap gap-x-6 gap-y-2 px-5 py-5 text-[13px] font-medium tracking-[0.04em] text-white/70 sm:px-8">
          {capabilityList.map((item, i) => (
            <motion.li
              key={item}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={
                reduce
                  ? { duration: 0 }
                  : {
                      opacity: { duration: venice.dissolveMs / 1000, delay: i * 0.08, ease: easeEnter },
                      y: { duration: venice.hoverMs / 1000, delay: i * 0.08, ease: easeEnter },
                    }
              }
              whileHover={
                reduce
                  ? undefined
                  : { scale: 1.06, color: "#FFFFFF", transition: { duration: venice.hoverMs / 1000, ease: easeEnter } }
              }
              whileTap={
                reduce
                  ? undefined
                  : { scale: venice.press, transition: { duration: venice.hoverMs / 1000, ease: easeEnter } }
              }
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </section>
      <NetworkExperience />
      <ServiceModules />
      <ProcessJourney />
      <CustomerSuccess />
      <ContactCTA />
    </>
  );
}
