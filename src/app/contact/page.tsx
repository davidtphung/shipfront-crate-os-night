import type { Metadata } from "next";
import Link from "next/link";
import { contactPage, site } from "@/data/site-copy";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <article className="mx-auto max-w-[800px] px-5 pt-28 pb-20 sm:px-8">
      <p className="text-[12px] font-medium tracking-[0.16em] text-[#FF6A00] uppercase">
        Visit
      </p>
      <h1 className="mt-4 text-[40px] leading-[1.08] font-semibold tracking-[-0.04em] text-white sm:text-[56px]">
        {contactPage.title}
      </h1>
      <address className="mt-10 not-italic text-[18px] leading-relaxed text-white">
        {site.address.name}
        <br />
        {site.address.street}
        <br />
        {site.address.cityLine}
      </address>
      <p className="mt-6 text-[16px] text-[#E8E8E8]">
        {site.hours.weekdays}
        <br />
        {site.hours.weekend}
      </p>
      <p className="mt-6">
        <a className="text-[18px] text-white underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
          {site.email}
        </a>
      </p>
      <div className="mt-10">
        <Button
          asChild
          className="min-h-11 bg-[#FF6A00] px-5 text-[15px] font-medium text-black hover:bg-[#FF6A00]/90"
        >
          <Link href="/get-a-quote/">Get a Quote</Link>
        </Button>
      </div>
    </article>
  );
}
