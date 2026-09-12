import type { Metadata } from "next";
import {  DM_Sans } from "next/font/google";
import { Barlow, Barlow_Condensed, DM_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";

const dmSansHeading = DM_Sans({subsets:['latin'],variable:'--font-heading'});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Daniel Marketing",
  description: "Daniel Marketing is a digital marketing agency that helps businesses grow online. We specialize in SEO, PPC, social media marketing, and web design.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", barlow.variable, barlowCondensed.variable, dmMono.variable, "font-sans", dmSansHeading.variable)}
    >
      <body className="min-h-full flex flex-col">
              <Header />
              <main className="flex-grow">
                {children}
              </main>
              <Footer />
            </body>
    </html>
  );
}
