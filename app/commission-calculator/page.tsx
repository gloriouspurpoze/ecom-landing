import type { Metadata } from "next";
import Link from "next/link";
import CommissionCalculator from "@/app/components/CommissionCalculator";
import { FAQS, SITE } from "@/data/landing";

export const metadata: Metadata = {
  title: "Swiggy & Zomato Commission Calculator — See What You Lose Per Year",
  description:
    "Free commission calculator for Indian restaurants. Enter your monthly orders to see how much you lose to delivery-app commission every year — and how much you'd keep with zero-commission ordering.",
  alternates: { canonical: `${SITE.url}/commission-calculator` },
  keywords: [
    "swiggy commission calculator",
    "zomato commission calculator",
    "food delivery commission calculator india",
    "restaurant commission calculator",
  ],
  openGraph: {
    title: "Delivery-App Commission Calculator — Torq Orbit",
    description:
      "See exactly how much your restaurant loses to delivery-app commission each year.",
    url: `${SITE.url}/commission-calculator`,
  },
};

export default function CommissionCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Delivery-App Commission Calculator",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    url: `${SITE.url}/commission-calculator`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
  };

  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-[#e5e5e0] bg-white">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 sm:px-6 py-5">
          <Link href="/" className="font-display text-xl tracking-tight text-[#0a0a0a]">
            Torq<span className="text-[#1d9e75]"> Orbit</span>
          </Link>
          <Link href="/" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#757570] mb-3">
          Free tool
        </p>
        <h1 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-tight tracking-tight">
          How much do delivery apps really cost you?
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-[#5a5a55] leading-relaxed">
          Drag the sliders to match your business and see exactly how much you lose to Swiggy,
          Zomato and other aggregators every year.
        </p>

        <div className="mt-10">
          <CommissionCalculator />
        </div>

        {/* Supporting copy for SEO depth */}
        <section className="mt-14 prose prose-sm sm:prose-base max-w-none prose-headings:font-display prose-headings:tracking-tight prose-p:text-[#3d3d3d]">
          <h2>How is delivery-app commission calculated?</h2>
          <p>
            Most Indian food delivery platforms charge a commission of roughly 18–30% on the value
            of every order, often with additional payment-gateway fees, packaging charges, and
            co-funded discounts on top. The calculator above uses your monthly order count, average
            order value, and commission rate to estimate your annual cost.
          </p>
          <h2>Can I reduce my commission?</h2>
          <p>
            You can&apos;t usually negotiate aggregator commission to zero, but you can move your{" "}
            <strong>repeat customers</strong> to a direct, commission-free channel like a{" "}
            <Link href="/">Torq Orbit store</Link> with WhatsApp ordering. Keep delivery apps for
            discovery, and take loyal customers direct to protect your margin. Read more in our
            guide on{" "}
            <Link href="/blog/swiggy-zomato-commission-charges-explained">
              Swiggy &amp; Zomato commission charges
            </Link>
            .
          </p>
        </section>

        {/* Mini FAQ reusing the zero-commission Q for relevance */}
        <section className="mt-12 rounded-2xl border border-[#e5e5e0] bg-white p-6 sm:p-8">
          <h2 className="font-display text-xl tracking-tight">Frequently asked</h2>
          <dl className="mt-4 space-y-4">
            <div>
              <dt className="text-sm font-semibold text-[#0a0a0a]">{FAQS[0].question}</dt>
              <dd className="mt-1 text-sm text-[#6b6b6b] leading-relaxed">{FAQS[0].answer}</dd>
            </div>
          </dl>
        </section>
      </div>

      <footer className="border-t border-[#e5e5e0] px-4 sm:px-6 py-8">
        <div className="mx-auto max-w-4xl flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#757570]">
          <Link href="/" className="hover:text-[#0a0a0a] transition-colors">Home</Link>
          <Link href="/blog" className="hover:text-[#0a0a0a] transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-[#0a0a0a] transition-colors">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
