"use client";

import { capabilityList, services } from "@/data/site-copy";
import { withBase } from "@/lib/paths";
import { MotionChip, StillCard } from "@/components/motion/StillCard";

export function ServiceModules() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="services-heading">
      <h2 id="services-heading" className="sr-only">
        Warehousing, fulfillment, ecommerce integrations, and location
      </h2>

      <StillCard
        src={withBase(services.warehousing.still)}
        alt={services.warehousing.alt}
        ken="left"
        delay={0}
        className="grid items-stretch lg:grid-cols-2"
        stillClassName="min-h-[280px] lg:min-h-[420px]"
      >
        <div className="relative z-10 bg-[#050505] px-6 py-8 lg:px-10 lg:py-12">
          <p className="text-[12px] font-medium tracking-[0.16em] text-[#FF6A00] uppercase">
            Capability
          </p>
          <h3 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-white sm:text-[36px]">
            {services.warehousing.title}
          </h3>
          <p className="mt-4 max-w-[54ch] text-[16px] leading-relaxed text-[#E8E8E8] sm:text-[17px]">
            {services.warehousing.copy}
          </p>
        </div>
      </StillCard>

      <StillCard
        src={withBase(services.fulfillment.still)}
        alt={services.fulfillment.alt}
        ken="up"
        delay={0.08}
        stillFirst={false}
        className="mt-8"
        stillClassName="h-56 sm:h-72"
      >
        <div className="relative z-10 px-6 py-10 sm:px-10">
          <p className="text-[12px] font-medium tracking-[0.16em] text-[#FF6A00] uppercase">
            Capability
          </p>
          <h3 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-white sm:text-[36px]">
            {services.fulfillment.title}
          </h3>
          <p className="mt-4 max-w-[62ch] text-[16px] leading-relaxed text-[#E8E8E8] sm:text-[17px]">
            {services.fulfillment.copy}
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {capabilityList.map((item, i) => (
              <MotionChip key={item} delay={0.08 + i * 0.08}>
                {item}
              </MotionChip>
            ))}
          </ul>
        </div>
      </StillCard>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <StillCard
          src={withBase(services.integrations.still)}
          alt={services.integrations.alt}
          ken="right"
          delay={0.16}
          stillClassName="h-56 sm:h-64"
        >
          <div className="relative z-10 p-6 sm:p-10">
            <p className="text-[12px] font-medium tracking-[0.16em] text-[#FF6A00] uppercase">
              Capability
            </p>
            <h3 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] text-white sm:text-[36px]">
              {services.integrations.title}
            </h3>
            <p className="mt-4 max-w-[54ch] text-[16px] leading-relaxed text-[#E8E8E8] sm:text-[17px]">
              {services.integrations.copy}
            </p>
          </div>
        </StillCard>

        <StillCard
          src={withBase(services.location.still)}
          alt={services.location.alt}
          ken="in"
          delay={0.24}
          className="relative min-h-[360px]"
          stillClassName="absolute inset-0 h-full min-h-[360px]"
        >
          <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-black via-black/55 to-black/15" />
          <div className="relative z-10 flex min-h-[360px] items-end p-6 sm:p-10">
            <div className="max-w-[40rem] text-white">
              <p className="text-[12px] font-medium tracking-[0.16em] text-[#FF6A00] uppercase">
                Freight
              </p>
              <h3 className="mt-3 text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px]">
                {services.location.title}
              </h3>
              <p className="mt-4 text-[16px] leading-relaxed text-white/90 sm:text-[17px]">
                {services.location.copy}
              </p>
              <p className="mt-4 text-[14px] text-white/70">{services.location.note}</p>
            </div>
          </div>
        </StillCard>
      </div>
    </section>
  );
}
