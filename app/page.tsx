import type { Metadata } from "next";
import { PlaygroundProvider } from "@/app/context/PlaygroundContext";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import TrustStrip from "@/app/components/TrustStrip";
import InteractiveProof from "@/app/components/InteractiveProof";
import DashboardShowcase from "@/app/components/DashboardShowcase";
import Pricing from "@/app/components/Pricing";
import Testimonials from "@/app/components/Testimonials";
import FAQ from "@/app/components/FAQ";
import FooterCTA from "@/app/components/FooterCTA";
import StickyCTA from "@/app/components/StickyCTA";
import { HOMEPAGE_FAQS, SITE } from "@/data/landing";

export const metadata: Metadata = {
  title: "Torq Orbit — Zero-Commission Online Store for Restaurants, Retail & Services",
  description:
    "Launch your branded online store in 2 minutes. Zero commission, WhatsApp ordering, and your own customer data. For restaurants, retail shops, and home service providers across India.",
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    title: "Torq Orbit — Zero-Commission Online Store for Local Businesses",
    description:
      "Stop paying 20–30% to marketplaces. Build your own branded store, take orders on WhatsApp, and keep 100% of your profits.",
    url: SITE.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      description:
        "Commission-free online ordering and digital storefront software for Indian local businesses — restaurants, retail shops, and home service providers.",
      foundingLocation: {
        "@type": "Place",
        name: "Mumbai, India",
      },
      areaServed: "IN",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE.url}/#software`,
      name: SITE.name,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: SITE.url,
      description:
        "Build a commission-free branded online store with WhatsApp ordering, real-time catalogue management, optional online payments, and customer data ownership.",
      offers: [
        {
          "@type": "Offer",
          name: "Free Plan",
          price: "0",
          priceCurrency: "INR",
          description:
            "Unlimited items, WhatsApp order notifications, QR code, two templates and full catalogue management.",
        },
        {
          "@type": "Offer",
          name: "Growth Plan",
          price: "499",
          priceCurrency: "INR",
          description:
            "Everything in Free, plus online payments, orders & sales dashboard, and WhatsApp status updates to customers. 28-day free trial.",
        },
        {
          "@type": "Offer",
          name: "Premium Plan",
          price: "999",
          priceCurrency: "INR",
          description:
            "Everything in Growth, plus full branding control, logo upload, custom domain, loyalty program and analytics. 28-day free trial.",
        },
      ],
    },
    {
      "@type": "WebPage",
      "@id": `${SITE.url}/`,
      url: SITE.url,
      name: "Torq Orbit — Zero-Commission Online Store for Restaurants, Retail & Services",
      isPartOf: { "@id": `${SITE.url}/#organization` },
      about: { "@id": `${SITE.url}/#software` },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE.url,
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: HOMEPAGE_FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
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
      <main className="min-h-screen bg-[#fafaf8] text-[#0a0a0a] selection:bg-[#1d9e75] selection:text-white overflow-x-hidden pb-20 md:pb-0">
        <PlaygroundProvider>
          <Navbar />
          <Hero />
          <TrustStrip />
          <InteractiveProof />
          <DashboardShowcase />
          <Pricing />
          <Testimonials />
          <FAQ />
          <FooterCTA />
          <StickyCTA />
        </PlaygroundProvider>
      </main>
    </>
  );
}
