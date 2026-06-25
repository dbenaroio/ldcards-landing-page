import type { Metadata } from "next";
import { Fraunces, Outfit, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://lifedesigncards.it";
const siteTitle = "Life Design Cards: Progetta la tua vita, una carta alla volta";
const siteDescription =
  "Le Life Design Cards sono un mazzo fisico di 80 carte basato sulla metodologia Life Design della Stanford University. Un'esperienza collaborativa per esplorare e progettare la tua vita, una carta alla volta.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Life Design Cards",
  },
  description: siteDescription,
  keywords: [
    "Life Design",
    "Life Design Cards",
    "Stanford Life Design",
    "carte progettare vita",
    "design thinking personale",
    "coaching",
    "self-discovery",
    "gioco riflessione",
  ],
  authors: [{ name: "Life Design Cards" }],
  creator: "Life Design Cards",
  publisher: "Life Design Cards",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    siteName: "Life Design Cards",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Life Design Cards: Progetta la tua vita, una carta alla volta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${fraunces.variable} ${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">{children}</body>
    </html>
  );
}
