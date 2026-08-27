import type { Metadata, Viewport } from "next";
import { Geist_Mono, Space_Grotesk } from "next/font/google";
import { Providers } from "@/components/Providers";
import { Footer } from "@/components/shipfront/Footer";
import { site, hero } from "@/data/site-copy";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Shipfront",
    template: "%s - Shipfront",
  },
  description: hero.body,
  metadataBase: new URL(site.url),
  openGraph: {
    title: "You Sell. We Ship.",
    description: hero.body,
    url: site.url,
    siteName: "Shipfront",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full bg-black pb-[env(safe-area-inset-bottom)] font-sans text-white">
        <Providers>
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
