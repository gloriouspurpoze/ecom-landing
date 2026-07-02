"use client";
import { BadgePercent, MessageCircle, Link2, QrCode, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useVerticalContent } from "@/hooks/useVerticalContent";

const icons = [BadgePercent, MessageCircle, Link2, QrCode, Smartphone];

export default function TrustStrip() {
  const { businessType, config } = useVerticalContent();

  return (
    <section aria-label="Key benefits" className="border-y border-[#e5e5e0] bg-white py-4 sm:py-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.ul
            key={businessType}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10"
          >
            {config.trustStrip.map((label, i) => {
              const Icon = icons[i % icons.length];
              return (
                <li key={label} className="flex items-center gap-2 text-xs sm:text-sm text-[#5a5a55]">
                  <Icon size={15} aria-hidden="true" className="text-[#1d9e75] shrink-0" />
                  {label}
                </li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
      </div>
    </section>
  );
}
