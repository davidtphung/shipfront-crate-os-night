/* Raw <img> keeps sibling JPEG bytes un-reencoded. */
/* eslint-disable @next/next/no-img-element */
import { capabilityList, services } from "@/data/site-copy";
import { withBase } from "@/lib/paths";
import { Reveal } from "@/components/motion/Reveal";

export function ServiceModules() {
  return (
    <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:py-28" aria-labelledby="services-heading">
      <h2 id="services-heading" className="sr-only">
        Warehousing, fulfillment, ecommerce integrations, and location
      </h2>

      <Reveal className="grid items-center gap-8 overflow-hidden rounded-[20px] border border-white/8 bg-[#050505] lg:grid-cols-2">
        <div className="relative min-h-[280px] lg:min-h-[420px]">
          <img
            src={withBase(services.warehousing.still)}
            alt={services.warehousing.alt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={1200}
            height={800}
          />
        </div>
        <div className="px-6 py-8 lg:px-10">
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
      </Reveal>

      <Reveal delay={0.08} className="mt-8 rounded-[20px] border border-white/8 bg-[#050505] px-6 py-10 sm:px-10">
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
          {capabilityList.map((item) => (
            <li
              key={item}
              className="rounded-[14px] border border-white/8 bg-black px-3 py-4 text-center text-[13px] font-medium text-white"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 overflow-hidden rounded-[16px]">
          <img
            src={withBase(services.fulfillment.still)}
            alt={services.fulfillment.alt}
            className="h-56 w-full object-cover sm:h-72"
            loading="lazy"
            width={1200}
            height={800}
          />
        </div>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="overflow-hidden rounded-[20px] border border-white/8 bg-[#050505]">
          <img
            src={withBase(services.integrations.still)}
            alt={services.integrations.alt}
            className="h-56 w-full object-cover sm:h-64"
            loading="lazy"
            width={1200}
            height={800}
          />
          <div className="p-6 sm:p-10">
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
        </Reveal>
        <Reveal delay={0.08} className="relative min-h-[360px] overflow-hidden rounded-[20px] border border-white/8">
          <img
            src={withBase(services.location.still)}
            alt={services.location.alt}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={1600}
            height={1067}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10" />
          <div className="relative flex min-h-[360px] items-end p-6 sm:p-10">
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
        </Reveal>
      </div>
    </section>
  );
}
