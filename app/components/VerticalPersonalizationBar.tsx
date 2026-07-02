"use client";

import { motion } from "framer-motion";
import { useVerticalContent } from "@/hooks/useVerticalContent";

export default function VerticalPersonalizationBar() {
  const { businessType, config, hydrated, openVerticalModal } = useVerticalContent();

  if (!hydrated) return null;

  return (
    <section
      aria-label="Personalization"
      className="sticky top-[57px] sm:top-[65px] z-30 border-b border-[#1d9e75]/20 bg-[#e1f5ee]/90 backdrop-blur-md"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5">
        <motion.p
          key={businessType}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xs sm:text-sm text-[#0f6e56]"
        >
          <span className="font-medium text-[#0a0a0a]">
            {config.emoji} Personalized for {config.label}
          </span>
          <span className="hidden sm:inline text-[#5a5a55]">
            {" "}
            — copy, demos & FAQs tailored for {config.ownerLabel}
          </span>
        </motion.p>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={openVerticalModal}
            className="text-[11px] sm:text-xs font-medium text-[#0f6e56] hover:text-[#0a0a0a] underline underline-offset-2 transition-colors shrink-0"
          >
            Change
          </button>

          <div
            role="status"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-white/80 border border-[#1d9e75]/25 text-[11px] sm:text-xs font-medium text-[#0a0a0a]"
          >
            <span aria-hidden="true">{config.emoji}</span>
            <span>{config.label}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
