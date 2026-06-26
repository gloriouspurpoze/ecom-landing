"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BadgePercent, Check, Sparkles, Zap } from "lucide-react";

const plans = [
  {
    id: "free",
    name: "Free",
    tagline: "Launch your store",
    price: "₹0",
    period: "forever",
    trialNote: "No credit card",
    icon: Sparkles,
    accent: "from-[#f0f0ec] to-white",
    features: [
      "Unlimited menu / product items",
      "WhatsApp order notifications",
      "QR code + shareable store link",
      "Two free templates",
      "Full catalogue management",
    ],
    cta: "Get Started Free",
    href: "/signup?plan=free",
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Accept payments & track sales",
    price: "₹499",
    period: "/ month",
    trialNote: "28-day free trial",
    badge: "Most Popular",
    highlighted: true,
    icon: Zap,
    accent: "from-[#0a0a0a] to-[#141414]",
    features: [
      "Everything in Free",
      "Online payments (2% gateway fee*)",
      "Orders & sales dashboard",
      "WhatsApp status updates to customers",
      "Order tracking on web app",
    ],
    cta: "Start Free Trial",
    href: "/signup?plan=growth",
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Full brand control",
    price: "₹999",
    period: "/ month",
    trialNote: "28-day free trial",
    icon: BadgePercent,
    accent: "from-[#e1f5ee]/40 to-white",
    features: [
      "Everything in Growth",
      "Brand logo upload",
      "Full branding (colors & logo)",
      "Custom domain",
      "Loyalty program + analytics",
    ],
    cta: "Start Free Trial",
    href: "/signup?plan=premium",
  },
] as const;

type PlanId = (typeof plans)[number]["id"];

export default function Pricing() {
  const [selected, setSelected] = useState<PlanId>("growth");
  const active = plans.find((p) => p.id === selected) ?? plans[1];

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative border-t border-[#e5e5e0] overflow-hidden py-16 sm:py-24 px-4 sm:px-6 scroll-mt-16"
    >
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,rgba(29,158,117,0.09),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,10,10,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,10,10,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,#000,transparent)]" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="inline-flex items-center gap-1.5 rounded-full border border-[#1d9e75]/30 bg-[#e1f5ee]/60 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-[#0f6e56] mb-4">
            <BadgePercent size={12} aria-hidden="true" />
            Simple pricing
          </p>
          <h2
            id="pricing-heading"
            className="font-display text-3xl sm:text-4xl md:text-[2.75rem] tracking-tight text-[#0a0a0a]"
          >
            Pick a plan.{" "}
            <span className="text-[#1d9e75]">Start today.</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#6b6b6b]">
            Free forever on the base plan — or try Growth / Premium free for 28 days.
            <span className="hidden sm:inline"> Less than what delivery apps take on 3 orders.</span>
          </p>
        </motion.div>

        {/* Plan cards */}
        <div
          role="radiogroup"
          aria-label="Pricing plans"
          className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 items-stretch"
        >
          {plans.map((plan, i) => {
            const isSelected = selected === plan.id;
            const isDark = "highlighted" in plan && plan.highlighted;
            const Icon = plan.icon;

            return (
              <motion.button
                key={plan.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelected(plan.id)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
                whileHover={{ y: -4 }}
                className={`group relative flex flex-col text-left rounded-2xl sm:rounded-3xl border p-6 sm:p-7 transition-shadow duration-300 ${
                  isDark
                    ? "lg:-mt-2 lg:mb-2 lg:scale-[1.03] z-10 shadow-xl shadow-black/10"
                    : "shadow-sm hover:shadow-md"
                } ${
                  isSelected
                    ? isDark
                      ? "border-[#1d9e75] ring-2 ring-[#1d9e75]/40"
                      : "border-[#0a0a0a] ring-2 ring-[#0a0a0a]/10 shadow-lg"
                    : isDark
                      ? "border-[#262626] hover:border-[#1d9e75]/50"
                      : "border-[#e5e5e0] bg-white hover:border-[#bfbfb8]"
                } ${isDark ? `bg-gradient-to-b ${plan.accent} text-white` : `bg-gradient-to-b ${plan.accent}`}`}
              >
                {/* Selected glow */}
                {isSelected && (
                  <motion.span
                    layoutId="pricing-glow"
                    className={`absolute inset-0 rounded-2xl sm:rounded-3xl -z-10 ${
                      isDark ? "bg-[#1d9e75]/10" : "bg-[#1d9e75]/5"
                    }`}
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}

                {"badge" in plan && plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[#1d9e75] text-white text-[10px] font-semibold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm whitespace-nowrap">
                    <Sparkles size={10} aria-hidden="true" />
                    {plan.badge}
                  </span>
                )}

                {/* Plan header */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                          isDark ? "bg-white/10 text-[#1d9e75]" : "bg-[#e1f5ee] text-[#1d9e75]"
                        }`}
                      >
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      {isSelected && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className={`flex h-5 w-5 items-center justify-center rounded-full ${
                            isDark ? "bg-[#1d9e75]" : "bg-[#0a0a0a]"
                          }`}
                        >
                          <Check size={11} className="text-white" aria-hidden="true" />
                        </motion.span>
                      )}
                    </div>
                    <h3
                      className={`font-display text-xl tracking-tight mt-3 ${
                        isDark ? "text-white" : "text-[#0a0a0a]"
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p className={`text-xs mt-0.5 ${isDark ? "text-[#9a9a92]" : "text-[#757570]"}`}>
                      {plan.tagline}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-5">
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`font-display text-4xl sm:text-[2.75rem] leading-none tracking-tight ${
                        isDark ? "text-white" : "text-[#0a0a0a]"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className={`text-sm ${isDark ? "text-[#9a9a92]" : "text-[#6b6b6b]"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p
                    className={`text-xs font-semibold mt-2 ${
                      isDark ? "text-[#7fe6c1]" : "text-[#0f6e56]"
                    }`}
                  >
                    {plan.trialNote}
                  </p>
                </div>

                {/* Features — always visible */}
                <ul className="space-y-2.5 flex-1 mb-6">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2.5 text-xs sm:text-sm leading-snug ${
                        isDark ? "text-[#d4d4cc]" : "text-[#5a5a55]"
                      }`}
                    >
                      <Check
                        size={14}
                        aria-hidden="true"
                        className={`mt-0.5 shrink-0 ${isDark ? "text-[#1d9e75]" : "text-[#1d9e75]"}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Per-card CTA hint */}
                <div
                  className={`rounded-xl px-4 py-3 text-center text-sm font-medium transition-colors ${
                    isSelected
                      ? isDark
                        ? "bg-[#1d9e75] text-white"
                        : "bg-[#0a0a0a] text-white"
                      : isDark
                        ? "bg-white/10 text-white/80 group-hover:bg-white/15"
                        : "bg-[#fafaf8] text-[#6b6b6b] group-hover:bg-[#f0f0ec]"
                  }`}
                >
                  {isSelected ? plan.cta : `Select ${plan.name}`}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Sticky CTA bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 sm:mt-10"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-[#e5e5e0] bg-white/80 backdrop-blur-sm p-5 sm:p-6 shadow-sm"
            >
              <div className="text-center sm:text-left">
                <p className="text-xs text-[#757570] uppercase tracking-wider">You selected</p>
                <p className="font-display text-lg tracking-tight text-[#0a0a0a] mt-0.5">
                  {active.name}{" "}
                  <span className="text-[#1d9e75]">
                    · {active.price}
                    {active.period !== "forever" ? active.period : ""}
                  </span>
                </p>
                <p className="text-xs text-[#6b6b6b] mt-1">{active.trialNote} · Cancel anytime</p>
              </div>

              <Link
                href={active.href}
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#0a0a0a] px-8 py-3.5 text-sm font-medium text-white transition hover:opacity-90 shrink-0"
              >
                {active.cta}
                <ArrowRight
                  size={15}
                  aria-hidden="true"
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Trust row */}
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#757570]">
            {["No credit card to start", "28-day trial on paid plans", "₹0 commission always"].map(
              (item) => (
                <li key={item} className="flex items-center gap-1.5">
                  <Check size={12} aria-hidden="true" className="text-[#1d9e75]" />
                  {item}
                </li>
              )
            )}
          </ul>

          <p className="mt-4 text-center text-[11px] text-[#9a9a92]">
            * 2% fee applies only to payments processed through the built-in gateway on Growth+
          </p>
        </motion.div>
      </div>
    </section>
  );
}
