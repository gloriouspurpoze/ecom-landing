"use client";
import { motion } from "framer-motion";
import { Database, Sliders, BarChart3, MessageCircle, Smartphone } from "lucide-react";

const smallFeatures = [
  {
    icon: MessageCircle,
    title: "WhatsApp order alerts",
    description: "Orders arrive instantly on WhatsApp. No app to install, no learning curve.",
  },
  {
    icon: Smartphone,
    title: "Your own branded store",
    description: "A beautiful mobile-first storefront with your logo, colours, and identity.",
  },
  {
    icon: Database,
    title: "Own your customer data",
    description: "Access order history and customer details — no middleman firewall.",
  },
  {
    icon: Sliders,
    title: "Instant menu control",
    description: "Update prices, toggle items, and run flash deals in real time from any device.",
  },
  {
    icon: BarChart3,
    title: "Real analytics",
    description: "Track revenue trends, best-sellers, and customer behaviour in one dashboard.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.07 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="border-t border-[#e5e5e0] bg-white py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-3 sm:mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#757570]">
              Why Torq Orbit
            </p>
            <h2
              id="features-heading"
              className="font-display text-3xl sm:text-4xl tracking-tight text-[#0a0a0a]"
            >
              Everything you need. Nothing you don&apos;t.
            </h2>
            <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-[#6b6b6b]">
              Built for local businesses tired of paying platform taxes.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-fr gap-4 sm:gap-5"
        >
          {/* Hero bento card — zero commission */}
          <motion.article
            variants={item}
            className="relative overflow-hidden flex flex-col justify-between rounded-2xl bg-[#0a0a0a] p-6 sm:p-8 text-white sm:col-span-2 lg:row-span-2 min-h-[260px]"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#1d9e75]/25 blur-3xl"
            />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-medium text-[#7fe6c1]">
                The Torq Orbit difference
              </span>
              <h3 className="font-display text-2xl sm:text-3xl mt-4 tracking-tight">
                Zero commission. Always.
              </h3>
              <p className="mt-3 max-w-md text-sm sm:text-base text-[#b5b5ad] leading-relaxed">
                Delivery apps take 20–30% of every order. With Torq Orbit, every rupee your
                customers pay goes straight to you.
              </p>
            </div>

            <div className="relative mt-6 flex items-end gap-8">
              <div>
                <div className="font-display text-3xl sm:text-4xl text-red-400">₹6L</div>
                <div className="mt-1 text-[11px] sm:text-xs text-[#9a9a92]">
                  Lost/year on aggregators*
                </div>
              </div>
              <div className="h-10 w-px bg-white/15" aria-hidden="true" />
              <div>
                <div className="font-display text-3xl sm:text-4xl text-[#1d9e75]">₹0</div>
                <div className="mt-1 text-[11px] sm:text-xs text-[#9a9a92]">
                  Commission on Torq Orbit
                </div>
              </div>
            </div>
            <p className="relative mt-4 text-[10px] text-[#6b6b6b]">
              *Based on ₹2L/month in orders at 25% commission.
            </p>
          </motion.article>

          {/* Small bento cards */}
          {smallFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={feature.title}
                variants={item}
                className="group flex flex-col rounded-2xl border border-[#e5e5e0] bg-[#fafaf8] p-5 sm:p-6 hover:bg-white hover:shadow-sm transition-all"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e1f5ee] text-[#1d9e75] group-hover:scale-105 transition-transform">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-sm sm:text-base font-semibold text-[#0a0a0a]">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm text-[#6b6b6b] leading-relaxed">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
