"use client";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows: { label: string; menufast: string; apps: string }[] = [
  { label: "Commission per order", menufast: "₹0 — always", apps: "20–30% of every order" },
  { label: "Who owns your customers", menufast: "You do", apps: "The platform hides them" },
  { label: "Your branding", menufast: "Your logo, colours & name", apps: "Listed beside competitors" },
  { label: "Setup time", menufast: "Under 2 minutes", apps: "Paperwork & onboarding delays" },
  { label: "WhatsApp ordering", menufast: "Built-in", apps: "Not available" },
  { label: "Menu & price control", menufast: "Real-time, any device", apps: "Restricted & slow" },
  { label: "Payouts", menufast: "Direct to your account", apps: "Delayed settlement cycles" },
  { label: "Monthly cost", menufast: "From ₹0", apps: "“Free” — but takes a cut of all sales" },
];

export default function Comparison() {
  return (
    <section
      id="comparison"
      aria-labelledby="comparison-heading"
      className="border-t border-[#e5e5e0] bg-white py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-3 sm:mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#757570]">
              MenuFast vs delivery apps
            </p>
            <h2
              id="comparison-heading"
              className="font-display text-3xl sm:text-4xl tracking-tight text-[#0a0a0a]"
            >
              Keep the margin. Keep the customer.
            </h2>
            <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-[#6b6b6b]">
              The same orders, without handing 20–30% and your customer list to someone else.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="overflow-hidden rounded-2xl border border-[#e5e5e0] bg-white"
        >
          {/* Header row */}
          <div className="grid grid-cols-[1.4fr_1fr_1fr] sm:grid-cols-3">
            <div className="p-3 sm:p-5 text-[11px] sm:text-sm font-medium text-[#9a9a92]">
              What matters
            </div>
            <div className="p-3 sm:p-5 text-center text-[11px] sm:text-sm font-semibold text-[#0a0a0a] bg-[#e1f5ee]">
              menu<span className="text-[#1d9e75]">fast</span>
            </div>
            <div className="p-3 sm:p-5 text-center text-[11px] sm:text-sm font-medium text-[#9a9a92]">
              Delivery apps
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-[1.4fr_1fr_1fr] sm:grid-cols-3 border-t border-[#e5e5e0] ${
                i % 2 === 1 ? "bg-[#fafaf8]" : "bg-white"
              }`}
            >
              <div className="p-3 sm:p-5 text-xs sm:text-sm text-[#0a0a0a] font-medium flex items-center">
                {row.label}
              </div>
              <div className="p-3 sm:p-5 bg-[#e1f5ee]/40 flex items-start sm:items-center gap-1.5">
                <Check size={14} aria-hidden="true" className="mt-0.5 sm:mt-0 text-[#1d9e75] shrink-0" />
                <span className="text-xs sm:text-sm text-[#0a0a0a]">{row.menufast}</span>
              </div>
              <div className="p-3 sm:p-5 flex items-start sm:items-center gap-1.5">
                <X size={14} aria-hidden="true" className="mt-0.5 sm:mt-0 text-red-400 shrink-0" />
                <span className="text-xs sm:text-sm text-[#9a9a92]">{row.apps}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
