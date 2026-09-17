import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import { Barlow, Barlow_Condensed, DM_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SpeedInsights } from "@vercel/speed-insights/next";

const dmSansHeading = DM_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

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
const siteUrl = "https://daniel-marketing-lp.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Daniel Marketing | Fotografia, Vídeo e Marketing Digital",
    template: "%s | Daniel Marketing",
  },
  description:
    "Fotografia, vídeo e estratégia de marketing digital para marcas que querem se destacar. Cobertura de eventos, produção audiovisual, social media e branding com o Daniel Marketing.",
  keywords: [
    "fotógrafo Daniel Marketing",
    "produção de vídeo para redes sociais",
    "social media Instagram TikTok",
    "marketing digital para pequenas empresas",
    "cobertura fotográfica de eventos",
  ],
  authors: [{ name: "Daniel Marketing" }],
  creator: "Daniel Marketing",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  verification: {
    google: "vb8Jbip_Fp7_A4L84Jx3Evjo6XAG4IQqRLORy4mJoqU",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Daniel Marketing",
    title: "Daniel Marketing | Fotografia, Vídeo e Marketing Digital",
    description:
      "Fotografia, vídeo e estratégia de marketing digital para marcas que querem se destacar.",
    images: [
      {
        url: "/assets/callToActionImage.jpg", // 1200x630, criar esse arquivo em /public
        width: 1200,
        height: 630,
        alt: "Daniel Marketing - Fotografia e Marketing Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Marketing",
    description: "Fotografia, vídeo e marketing digital que geram resultado.",
    images: ["/assets/callToActionImage.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Daniel Marketing",
    image:
      "https://daniel-marketing-lp.vercel.app/assets/callToActionImage.jpg",
    url: "https://daniel-marketing-lp.vercel.app",
    telephone: "+557398277809",
    email: "francadaniel8257@gmail.com",
    sameAs: ["https://www.instagram.com/daniielmarketing/"],
    areaServed: "BR",
    serviceType: [
      "Fotografia",
      "Produção de Vídeo",
      "Social Media",
      "Marketing Digital",
    ],
  };

  return (
    <html
      lang="pt-BR"
      className={cn(
        "h-full",
        "antialiased",
        barlow.variable,
        barlowCondensed.variable,
        dmMono.variable,
        "font-sans",
        dmSansHeading.variable,
      )}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="flex-grow">
          {children}
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
