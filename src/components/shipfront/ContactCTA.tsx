"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { quote } from "@/data/site-copy";
import { primaryCta } from "@/data/navigation";

export function ContactCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/8 bg-black text-white">
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 1200 400"
        aria-hidden
      >
        <path
          d="M0 80 L280 200 L600 160 L920 220 L1200 140"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          opacity="0.28"
        />
        <path
          d="M0 320 L260 210 L600 160 L940 80 L1200 180"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="1.2"
          opacity="0.16"
        />
        <circle cx="600" cy="160" r="18" fill="#111111" stroke="#FFFFFF" strokeWidth="1.4" />
      </svg>
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:py-28">
        <p className="text-[12px] font-medium tracking-[0.16em] text-[#FF6A00] uppercase">
          Quote
        </p>
        <h2 className="mt-4 max-w-[12ch] text-[42px] leading-[1.02] font-semibold tracking-[-0.05em] sm:text-[64px]">
          {quote.title}
        </h2>
        <p className="mt-5 max-w-[42ch] text-[17px] leading-relaxed text-[#E8E8E8]">
          {quote.body}
        </p>
        <div className="mt-8">
          <Button
            asChild
            className="min-h-11 bg-[#FF6A00] px-5 text-[15px] font-medium text-black hover:bg-[#FF6A00]/90"
          >
            <Link href={primaryCta.href}>
              {primaryCta.label}
              <ArrowRight size={16} weight="bold" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
