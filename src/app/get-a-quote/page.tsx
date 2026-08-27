import type { Metadata } from "next";
import { QuoteForm } from "@/components/shipfront/QuoteForm";
import { quote } from "@/data/site-copy";

export const metadata: Metadata = {
  title: "Get a Quote",
};

export default function QuotePage() {
  return (
    <article className="mx-auto max-w-[840px] px-5 pt-28 pb-20 sm:px-8">
      <p className="text-[12px] font-medium tracking-[0.16em] text-[#FF6A00] uppercase">
        Quote
      </p>
      <h1 className="mt-4 text-[40px] leading-[1.08] font-semibold tracking-[-0.04em] text-white sm:text-[56px]">
        {quote.title}
      </h1>
      <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-[#E8E8E8]">
        {quote.body}
      </p>
      <div className="mt-10">
        <QuoteForm />
      </div>
    </article>
  );
}
