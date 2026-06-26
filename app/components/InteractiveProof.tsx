"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, X, ExternalLink } from "lucide-react";
import CommissionCalculator from "./CommissionCalculator";

const tabs = [
  { id: "calculator", label: "Your loss", emoji: "💸" },
  { id: "compare", label: "vs Apps", emoji: "⚔️" },
  { id: "live", label: "Live stores", emoji: "🔗" },
] as const;

type TabId = (typeof tabs)[number]["id"];

const compareRows = [
  { label: "Commission", torq: "₹0", apps: "20–30%" },
  { label: "Customer data", torq: "Yours", apps: "Hidden" },
  { label: "Setup", torq: "30 min", apps: "Weeks" },
  { label: "WhatsApp", torq: "Built-in", apps: "No" },
];

const liveStores = [
  { name: "Cakes & Bakes", vertical: "Home bakery", href: "/cakes-and-bakes", emoji: "🎂" },
  { name: "Priya's Tiffin", vertical: "Tiffin service", href: "/priyas-tiffin", emoji: "🥗" },
];

export default function InteractiveProof() {
  const [active, setActive] = useState<TabId>("calculator");

  return (
    <section
      id="proof"
      aria-labelledby="proof-heading"
      className="border-t border-[#e5e5e0] py-14 sm:py-18 px-4 sm:px-6 scroll-mt-16"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="proof-heading" className="font-display text-2xl sm:text-3xl tracking-tight text-center">
          See why businesses switch.
        </h2>

        {/* Tab pills */}
        <div
          role="tablist"
          aria-label="Proof sections"
          className="mt-6 flex justify-center gap-2 p-1.5 rounded-2xl bg-white border border-[#e5e5e0] shadow-sm w-fit mx-auto"
        >
          {tabs.map((tab) => {
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(tab.id)}
                className="relative px-4 py-2 rounded-xl text-sm font-medium transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="proof-tab"
                    className="absolute inset-0 rounded-xl bg-[#0a0a0a]"
                    transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                  />
                )}
                <span className={`relative z-10 flex items-center gap-1.5 ${isActive ? "text-white" : "text-[#6b6b6b]"}`}>
                  <span aria-hidden="true">{tab.emoji}</span>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab panels */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            {active === "calculator" && (
              <motion.div
                key="calculator"
                role="tabpanel"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
              >
                <CommissionCalculator />
              </motion.div>
            )}

            {active === "compare" && (
              <motion.div
                key="compare"
                role="tabpanel"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {/* Torq Orbit card */}
                <div className="rounded-2xl bg-[#0a0a0a] p-6 text-white">
                  <p className="text-xs font-medium text-[#7fe6c1] mb-4">Torq Orbit</p>
                  <ul className="space-y-4">
                    {compareRows.map((row) => (
                      <li key={row.label} className="flex items-center justify-between gap-3">
                        <span className="text-sm text-[#b5b5ad]">{row.label}</span>
                        <span className="flex items-center gap-1.5 text-sm font-semibold text-[#1d9e75]">
                          <Check size={14} aria-hidden="true" />
                          {row.torq}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Apps card */}
                <div className="rounded-2xl border border-[#e5e5e0] bg-white p-6">
                  <p className="text-xs font-medium text-[#9a9a92] mb-4">Delivery apps</p>
                  <ul className="space-y-4">
                    {compareRows.map((row) => (
                      <li key={row.label} className="flex items-center justify-between gap-3">
                        <span className="text-sm text-[#6b6b6b]">{row.label}</span>
                        <span className="flex items-center gap-1.5 text-sm font-medium text-red-400">
                          <X size={14} aria-hidden="true" />
                          {row.apps}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {active === "live" && (
              <motion.div
                key="live"
                role="tabpanel"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {liveStores.map((store) => (
                  <Link
                    key={store.href}
                    href={store.href}
                    className="group flex items-center gap-4 rounded-2xl border border-[#e5e5e0] bg-white p-5 sm:p-6 hover:border-[#1d9e75] hover:shadow-sm transition-all"
                  >
                    <span className="text-3xl" aria-hidden="true">{store.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-[#1d9e75]">
                        {store.vertical}
                      </p>
                      <p className="font-semibold text-[#0a0a0a]">{store.name}</p>
                    </div>
                    <ExternalLink
                      size={16}
                      aria-hidden="true"
                      className="text-[#9a9a92] group-hover:text-[#1d9e75] transition-colors shrink-0"
                    />
                  </Link>
                ))}
                <div className="sm:col-span-2 text-center pt-2">
                  <Link
                    href="/signup"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0f6e56] hover:underline"
                  >
                    Build yours in 2 minutes
                    <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
