import type { Metadata, Viewport } from "next";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { localBusinessJsonLd, siteConfig } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: "Pedro Queiroz | Video Maker Mobile em Araguaina - TO",
  description:
    "Video maker mobile em Araguaina - TO para reels, empresas e eventos. Fale no WhatsApp e peca seu orcamento.",
  applicationName: siteConfig.brand,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Pedro Queiroz | Video Maker Mobile em Araguaina - TO",
    description:
      "Reels, videos curtos, empresas e eventos com gravacao e edicao mobile.",
    url: "/",
    siteName: siteConfig.brand,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "Pedro Queiroz Video Maker Mobile em Araguaina"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pedro Queiroz | Video Maker Mobile em Araguaina - TO",
    description:
      "Videos curtos com ritmo de rede social para marcas, eventos e profissionais.",
    images: ["/og"]
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  manifest: "/site.webmanifest"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#11100f"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        {children}
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
