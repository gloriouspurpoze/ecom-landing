"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "/ forever",
    description: "Everything you need to get started. No credit card required.",
    features: [
      "Unlimited product / menu items",
      "WhatsApp order notifications",
      "Two free templates",
      "QR code for menu link",
      "Full menu management",
      "Login / OTP via phone number",
    ],
    cta: "Get Started Free",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Growth",
    price: "₹549",
    period: "/month",
    description: "For businesses ready to accept payments and track their sales.",
    badge: "Most Popular",
    features: [
      "Everything in Free",
      "Orders & sales dashboard with date filters",
      "Payment gateway (2% payment gateway fee*)",
      "Order status updates on WhatsApp to customer",
      "Order status updates on web app",
    ],
    cta: "Start Free Trial",
    href: "/signup",
    highlighted: true,
  },
  {
    name: "Premium",
    price: "₹999",
    period: "/month",
    description: "Full branding control and advanced tools for serious businesses.",
    features: [
      "Everything in Growth",
      "Brand logo upload",
      "Full branding control (colors & logo)",
      "Custom domain (additional charges apply)",
      "Loyalty program",
      "Analytics dashboard",
    ],
    cta: "Start Free Trial",
    href: "/signup",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="border-t border-[#e5e5e0] py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-3 sm:mb-4 text-[10px] sm:text-xs font-medium uppercase tracking-[0.15em] text-[#8d8d84]">
              Pricing
            </p>
            <h2
              id="pricing-heading"
              className="font-display text-3xl sm:text-4xl tracking-tight text-[#0a0a0a]"
            >
              Simple pricing. Start free.
            </h2>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[#6b6b6b]">
              No credit card required to get started. Upgrade only when you need to.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className={`relative flex flex-col rounded-2xl border ${
                plan.highlighted
                  ? "bg-white border-[#0a0a0a] shadow-sm"
                  : "bg-white border-[#e5e5e0]"
              } ${plan.badge ? "mt-4 sm:mt-4" : ""}`}
            >
              {/* Popular badge — sits above the card */}
              {plan.badge && (
                <div
                  aria-label={plan.badge}
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0a0a0a] text-white text-[11px] font-medium px-4 py-1 rounded-full whitespace-nowrap"
                >
                  {plan.badge}
                </div>
              )}

              <div className="p-5 sm:p-7 flex flex-col flex-1">
                <div className="mb-5 sm:mb-6">
                  <h3 className="text-sm sm:text-base font-medium text-[#0a0a0a] mb-1">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="font-display text-3xl sm:text-4xl leading-none tracking-tight text-[#0a0a0a]">
                      {plan.price}
                    </span>
                    <span className="text-[#6b6b6b] text-sm">{plan.period}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#6b6b6b] leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-2 sm:space-y-2.5 flex-1 mb-6 sm:mb-7" role="list">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-xs sm:text-sm text-[#6b6b6b]">
                      <Check
                        size={13}
                        aria-hidden="true"
                        className="mt-0.5 text-[#1d9e75] shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`inline-flex w-full justify-center rounded-md px-4 py-3 text-sm font-medium transition hover:opacity-90 ${
                    plan.highlighted
                      ? "bg-[#0a0a0a] text-white"
                      : "bg-white border border-[#e5e5e0] text-[#0a0a0a] hover:border-[#bfbfb8]"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-5 sm:mt-6 text-[10px] sm:text-xs text-[#9a9a92]">
          * 2% fee applies only to payments processed through the built-in payment gateway
        </p>
      </div>
    </section>
  );
}
