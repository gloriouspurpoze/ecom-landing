import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { SITE } from "@/data/landing";
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
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Torq Orbit — Zero-Commission Online Store for Restaurants, Retail & Services",
    template: "%s | Torq Orbit",
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
  authors: [{ name: "Torq Orbit", url: SITE.url }],
  creator: "Torq Orbit",
  publisher: "Torq Orbit",
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
    url: SITE.url,
    siteName: "Torq Orbit",
    title: "Torq Orbit — Zero-Commission Online Ordering for Food Businesses",
    description:
      "Stop paying 20–30% to delivery apps. Build your own branded food store, receive orders on WhatsApp, and keep 100% of your profits.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Torq Orbit — Zero-Commission Online Ordering",
    description:
      "Stop paying 20–30% to delivery apps. Build your own branded food store in 2 minutes. Keep 100% of profits.",
  },
  alternates: {
    canonical: SITE.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const clarityId = process.env.CLARITY_ID;

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${dmSans.variable} ${dmSerif.variable}`}>
        {children}
        {clarityId ? (
          <Script id="clarity-init" strategy="afterInteractive">
            {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window,document,"clarity","script","${clarityId}");`}
          </Script>
        ) : null}
      </body>
    </html>
  );
}
