"use client";
import { motion } from "framer-motion";
import { ShieldCheck, Database, Sliders, BarChart3, MessageCircle, Smartphone } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Zero Commission. Always.",
    description:
      "Stop giving 20–30% of every order to Zomato or Swiggy. Every rupee your customers pay goes directly to you.",
    iconColor: "text-[#1d9e75]",
    iconBg: "bg-[#e1f5ee]",
  },
  {
    icon: Database,
    title: "Own Your Customer Data",
    description:
      "Build a real relationship with your buyers. Access email lists, order history, and preferences — no middleman firewall.",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
  {
    icon: Sliders,
    title: "Instant Menu Control",
    description:
      "Update prices, toggle items, run flash deals, and adjust your catalog in real-time from any device.",
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Order Alerts",
    description:
      "Receive order notifications instantly on WhatsApp. No app to install, no learning curve.",
    iconColor: "text-[#1d9e75]",
    iconBg: "bg-[#e1f5ee]",
  },
  {
    icon: Smartphone,
    title: "Your Own Branded Store",
    description:
      "Customers get a beautiful, mobile-first storefront with your logo, colors, and brand identity.",
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50",
  },
  {
    icon: BarChart3,
    title: "Real Analytics Dashboard",
    description:
      "Track revenue trends, best-selling items, and customer behavior — all in one intuitive dashboard.",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-50",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
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
              Why MenuFast
            </p>
            <h2
              id="features-heading"
              className="font-display text-3xl sm:text-4xl tracking-tight text-[#0a0a0a]"
            >
              Everything you need. Nothing you don&apos;t.
            </h2>
            <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-[#6b6b6b]">
              Built specifically for Indian food businesses tired of paying platform taxes.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid overflow-hidden rounded-xl border border-[#e5e5e0] bg-[#e5e5e0] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.article
                key={i}
                variants={item}
                className="flex gap-4 bg-[#fafaf8] p-5 sm:p-7 hover:bg-white transition-colors duration-200 cursor-default"
              >
                <div
                  aria-hidden="true"
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${feature.iconBg} ${feature.iconColor}`}
                >
                  <Icon size={17} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#0a0a0a]">{feature.title}</h3>
                  <p className="mt-1 text-sm text-[#6b6b6b] leading-relaxed">{feature.description}</p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Comparison callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-8 sm:mt-10 p-5 sm:p-7 rounded-xl border border-[#e5e5e0] bg-white"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-6">
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base font-medium text-[#0a0a0a] mb-1">
                The numbers speak for themselves
              </h3>
              <p className="text-xs sm:text-sm text-[#6b6b6b] leading-relaxed">
                A restaurant doing ₹2L/month on Zomato loses ₹50,000+ to commission.
                That&apos;s ₹6 lakhs a year.
              </p>
            </div>
            <div className="flex gap-6 sm:gap-8 shrink-0 justify-center sm:justify-end">
              <div className="text-center">
                <div
                  aria-label="Six lakhs rupees lost per year on aggregators"
                  className="font-display text-2xl sm:text-3xl text-red-500"
                >
                  ₹6L
                </div>
                <div className="text-[10px] sm:text-xs text-[#9a9a92] mt-1">Lost/year on aggregators</div>
              </div>
              <div className="w-px bg-[#e5e5e0] self-stretch hidden sm:block" aria-hidden="true" />
              <div className="text-center">
                <div
                  aria-label="Zero commission on MenuFast"
                  className="font-display text-2xl sm:text-3xl text-[#1d9e75]"
                >
                  ₹0
                </div>
                <div className="text-[10px] sm:text-xs text-[#9a9a92] mt-1">Commission on MenuFast</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
