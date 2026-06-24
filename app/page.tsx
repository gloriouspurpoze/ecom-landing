import type { Metadata } from "next";
import { PlaygroundProvider } from "@/app/context/PlaygroundContext";
import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import HowItWorks from "@/app/components/HowItWorks";
import Playground from "@/app/components/Playground";
import DashboardShowcase from "@/app/components/DashboardShowcase";
import CommissionCalculator from "@/app/components/CommissionCalculator";
import Comparison from "@/app/components/Comparison";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Testimonials from "@/app/components/Testimonials";
import Pricing from "@/app/components/Pricing";
import LeadCapture from "@/app/components/LeadCapture";
import FAQ from "@/app/components/FAQ";
import FooterCTA from "@/app/components/FooterCTA";
import { FAQS, SITE } from "@/data/landing";

export const metadata: Metadata = {
  title: "Torq Orbit — Zero-Commission Online Store for Restaurants, Retail & Services",
  description:
    "Launch your branded online store in 2 minutes. Zero commission, WhatsApp ordering, and your own customer data. For restaurants, retail shops, and home service providers across India.",
  alternates: {
    canonical: "https://torqorbit.in",
  },
  openGraph: {
    title: "Torq Orbit — Zero-Commission Online Store for Local Businesses",
    description:
      "Stop paying 20–30% to marketplaces. Build your own branded store, take orders on WhatsApp, and keep 100% of your profits.",
    url: "https://torqorbit.in",
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
          price: "549",
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
      mainEntity: FAQS.map((faq) => ({
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
      <main className="min-h-screen bg-[#fafaf8] text-[#0a0a0a] selection:bg-[#1d9e75] selection:text-white overflow-x-hidden">
        <PlaygroundProvider>
          <Navbar />
          <Hero />
          <Features />
          <HowItWorks />
          <Playground />
          <DashboardShowcase />
          <section
            id="calculator"
            aria-labelledby="calculator-heading"
            className="border-t border-[#e5e5e0] py-16 sm:py-20 px-4 sm:px-6 scroll-mt-16"
          >
            <div className="mx-auto max-w-4xl">
              <div className="mb-8 sm:mb-10">
                <p className="mb-3 sm:mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#757570]">
                  Free tool
                </p>
                <h2
                  id="calculator-heading"
                  className="font-display text-3xl sm:text-4xl tracking-tight text-[#0a0a0a]"
                >
                  How much are delivery apps costing you?
                </h2>
                <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-[#6b6b6b]">
                  Drag the sliders to match your business and see what you lose to commission every
                  year — and what you&apos;d keep with Torq Orbit.
                </p>
              </div>
              <CommissionCalculator />
              <p className="mt-5 text-sm text-[#6b6b6b]">
                <Link
                  href="/commission-calculator"
                  className="inline-flex items-center gap-1.5 font-medium text-[#0f6e56] hover:underline"
                >
                  Open the full calculator
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </p>
            </div>
          </section>
          <Comparison />
          <Testimonials />
          <Pricing />
          <LeadCapture />
          <FAQ />
          <FooterCTA />
        </PlaygroundProvider>
      </main>
    </>
  );
}
