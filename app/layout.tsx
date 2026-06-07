import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#fafaf8",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://menufast.in"),
  title: {
    default: "MenuFast — Commission-Free Digital Storefront for Indian Businesses",
    template: "%s | MenuFast",
  },
  description:
    "Launch your branded online store in 2 minutes. Zero commission. WhatsApp ordering. Own your customer data. Built for Indian restaurants, home kitchens, retail & grocery businesses.",
  keywords: [
    "digital menu India",
    "online ordering system India",
    "commission-free restaurant ordering",
    "WhatsApp food ordering",
    "home kitchen online store",
    "cloud kitchen app India",
    "restaurant app without Swiggy Zomato commission",
    "food ordering app India",
    "menu builder India",
    "zero commission food delivery",
    "restaurant SaaS India",
    "independent online store India",
  ],
  authors: [{ name: "MenuFast", url: "https://menufast.in" }],
  creator: "MenuFast",
  publisher: "MenuFast",
  category: "technology",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://menufast.in",
    siteName: "MenuFast",
    title: "MenuFast — Zero Commission Online Ordering for Local Businesses",
    description:
      "Stop paying 20–30% to Swiggy & Zomato. Build your own branded store, receive orders on WhatsApp, and keep 100% of your profits.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MenuFast — Commission-Free Digital Storefront for Indian Businesses",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MenuFast — Zero Commission Online Ordering",
    description:
      "Stop paying 20–30% to Swiggy & Zomato. Build your own branded store in 2 minutes. Keep 100% of profits.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://menufast.in",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${dmSerif.variable}`}>{children}</body>
    </html>
  );
}
