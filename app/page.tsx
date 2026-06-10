import type { Metadata } from "next";
import { PlaygroundProvider } from "@/app/context/PlaygroundContext";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import Playground from "@/app/components/Playground";
import Pricing from "@/app/components/Pricing";
import FooterCTA from "@/app/components/FooterCTA";

export const metadata: Metadata = {
  title: "MenuFast — Commission-Free Digital Storefront for Indian Businesses",
  description:
    "Launch your branded online store in 2 minutes. Zero commission. WhatsApp ordering. Own your customer data. Perfect for Indian restaurants, home kitchens, home service providers, retail & grocery businesses.",
  alternates: {
    canonical: "https://menufast.in",
  },
  openGraph: {
    title: "MenuFast — Zero Commission Online Ordering for Local Businesses",
    description:
      "Stop paying 20–30% to Food Delivery apps. Build your own branded store, receive orders on WhatsApp, and keep 100% of your profits.",
    url: "https://menufast.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://menufast.in/#organization",
      name: "MenuFast",
      url: "https://menufast.in",
      description:
        "Commission-free digital storefront SaaS for Indian local businesses — restaurants, home kitchens, retail, and home services.",
      foundingLocation: {
        "@type": "Place",
        name: "Mumbai, India",
      },
      areaServed: "IN",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://menufast.in/#software",
      name: "MenuFast",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://menufast.in",
      description:
        "Build a commission-free branded online store with WhatsApp ordering, real-time menu management, and customer data ownership. No Food Delivery app commission.",
      offers: [
        {
          "@type": "Offer",
          name: "Free Plan",
          price: "0",
          priceCurrency: "INR",
          description:
            "Unlimited menu items, WhatsApp order notifications, QR code, full menu management",
        },
        {
          "@type": "Offer",
          name: "Growth Plan",
          price: "549",
          priceCurrency: "INR",
          description:
            "Everything in Free, plus payment gateway, order dashboard, WhatsApp updates to customers",
        },
        {
          "@type": "Offer",
          name: "Premium Plan",
          price: "999",
          priceCurrency: "INR",
          description:
            "Everything in Growth, plus full branding control, custom domain, analytics, loyalty program",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": "https://menufast.in/",
      url: "https://menufast.in",
      name: "MenuFast — Commission-Free Digital Storefront for Indian Businesses",
      isPartOf: { "@id": "https://menufast.in/#organization" },
      about: { "@id": "https://menufast.in/#software" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://menufast.in",
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Does MenuFast charge any commission on orders?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. MenuFast charges zero commission on orders. You keep 100% of every rupee your customers pay. There is a 2% payment gateway fee only if you use the built-in payment processing.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to set up my store on MenuFast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your store goes live in under 2 minutes. You can add your menu items, set your brand name and colors, and start receiving orders on WhatsApp immediately.",
          },
        },
        {
          "@type": "Question",
          name: "What types of businesses can use MenuFast?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MenuFast is built for Indian restaurants, cafes, home kitchens, tiffin services, cloud kitchens, home service providers, retail boutiques, and grocery stores.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-[#fafaf8] text-[#0a0a0a] selection:bg-[#1d9e75] selection:text-white overflow-x-hidden">
        <PlaygroundProvider>
          <Navbar />
          <Hero />
          <Features />
          <Playground />
          <Pricing />
          <FooterCTA />
        </PlaygroundProvider>
      </main>
    </>
  );
}
