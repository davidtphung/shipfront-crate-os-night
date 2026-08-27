"use client";

import { Navbar } from "@/components/shipfront/Navbar";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-[90] focus-visible:rounded-[10px] focus-visible:bg-[#FF6A00] focus-visible:px-3 focus-visible:py-2 focus-visible:text-black"
      >
        Skip to Content
      </a>
      <Navbar />
      {children}
    </>
  );
}
