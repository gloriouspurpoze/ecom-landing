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
    default:
      "MenuFast — Zero-Commission Online Store for Restaurants, Retail & Services",
    template: "%s | MenuFast",
  },
  description:
    "Launch your branded online store in 2 minutes. Zero commission, WhatsApp ordering, and your own customer data. For restaurants, retail shops, and home service providers across India.",
  keywords: [
    "digital menu India",
    "online food ordering system India",
    "commission-free restaurant ordering",
    "WhatsApp food ordering",
    "home kitchen online store",
    "cloud kitchen app India",
    "restaurant app without delivery commission",
    "food ordering app India",
    "QR code menu India",
    "menu builder India",
    "zero commission food delivery",
    "restaurant SaaS India",
    "tiffin service ordering app",
    "home bakery online store India",
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
    title: "MenuFast — Zero-Commission Online Ordering for Food Businesses",
    description:
      "Stop paying 20–30% to delivery apps. Build your own branded food store, receive orders on WhatsApp, and keep 100% of your profits.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MenuFast — Zero-Commission Online Ordering",
    description:
      "Stop paying 20–30% to delivery apps. Build your own branded food store in 2 minutes. Keep 100% of profits.",
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
