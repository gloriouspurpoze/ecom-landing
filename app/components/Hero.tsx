"use client";
import { usePlayground, BusinessType } from "@/app/context/PlaygroundContext";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const types: { id: BusinessType; label: string; emoji: string; desc: string }[] = [
  { id: "restaurant", label: "Restaurant & Cafe", emoji: "🍽️", desc: "Dine-in & delivery menus" },
  { id: "retail", label: "Retail Boutique", emoji: "🛍️", desc: "Fashion & lifestyle stores" },
  { id: "grocery", label: "Grocery & Essentials", emoji: "🥬", desc: "Fresh produce & delivery" },
];

export default function Hero() {
  const { businessType, setBusinessType } = usePlayground();

  const handleSelect = (id: BusinessType) => {
    setBusinessType(id);
    setTimeout(() => {
      document.getElementById("playground")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <section
      aria-label="Hero"
      className="relative flex flex-col items-center justify-center px-4 sm:px-6 pt-24 sm:pt-28 pb-14 sm:pb-20 overflow-hidden min-h-[calc(100svh-0px)]"
    >
      {/* Subtle radial background grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(29,158,117,0.07),transparent)]"
      />

      <div className="relative z-10 max-w-3xl mx-auto w-full text-center">
        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="inline-flex items-center gap-2 bg-[#e1f5ee] border border-[#1d9e75]/30 text-[#0f6e56] px-3 sm:px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-medium uppercase tracking-wider mb-6 sm:mb-8"
        >
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#1d9e75]" />
          For home kitchens &amp; cloud kitchens
        </motion.div>

        {/* H1 — graduated size for all viewports */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-display text-[2.5rem] leading-[1.15] sm:text-5xl md:text-6xl tracking-tight text-[#0a0a0a] mb-5 sm:mb-6"
        >
          Your menu.
          <br />
          <em className="text-[#1d9e75] not-italic">Your customers.</em>
          <br />
          Zero commission.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mx-auto max-w-xl text-base sm:text-lg font-light leading-7 sm:leading-8 text-[#6b6b6b] mb-8 sm:mb-10"
        >
          Stop losing 28% to Swiggy. Get a beautiful digital menu, WhatsApp ordering,
          and your own customer list — all in one place.
        </motion.p>

        {/* Business type selector */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.3 }}
          className="max-w-2xl mx-auto mb-7 sm:mb-8"
        >
          <p className="text-[10px] sm:text-xs font-medium text-[#8d8d84] uppercase tracking-widest mb-3 sm:mb-4">
            Choose your business type
          </p>
          <div
            role="group"
            aria-label="Business type selector"
            className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-3 gap-2.5 sm:gap-3"
          >
            {types.map((type) => {
              const isSelected = businessType === type.id;
              return (
                <motion.button
                  key={type.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => handleSelect(type.id)}
                  aria-pressed={isSelected}
                  aria-label={`Select ${type.label}`}
                  className={`relative flex items-center xs:flex-col xs:items-start gap-3 xs:gap-0 p-3.5 sm:p-4 rounded-xl border text-left transition-all duration-300 ${
                    isSelected
                      ? "bg-white border-[#1d9e75] shadow-md"
                      : "bg-white border-[#e5e5e0] hover:border-[#bfbfb8] hover:bg-[#fafaf8]"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="selector-glow"
                      className="absolute inset-0 rounded-xl bg-[#e1f5ee]/40"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.55 }}
                    />
                  )}
                  <div className="relative z-10 flex items-center xs:flex-col xs:items-start gap-3 xs:gap-0 w-full">
                    <span aria-hidden="true" className="text-xl xs:text-2xl xs:mb-2 block shrink-0">{type.emoji}</span>
                    <div>
                      <span className={`font-semibold text-sm block ${isSelected ? "text-[#0a0a0a]" : "text-[#6b6b6b]"}`}>
                        {type.label}
                      </span>
                      <span className="text-[11px] text-[#9a9a92] mt-0.5 block hidden xs:block">{type.desc}</span>
                    </div>
                  </div>
                  {isSelected && (
                    <div
                      aria-hidden="true"
                      className="absolute top-3 right-3 w-4 h-4 xs:w-5 xs:h-5 rounded-full bg-[#1d9e75] flex items-center justify-center"
                    >
                      <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 rounded-full bg-white" />
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.42 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#playground"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("playground")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group w-full sm:w-auto rounded-md bg-[#0a0a0a] px-7 py-3.5 sm:py-3 text-sm font-medium text-white transition hover:opacity-90 flex items-center justify-center gap-2"
          >
            Get your menu in 10 minutes
            <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/zainabs-bakes"
            className="w-full sm:w-auto rounded-md border border-[#e5e5e0] px-7 py-3.5 sm:py-3 text-sm text-[#0a0a0a] text-center transition hover:border-[#bfbfb8]"
          >
            See a live example
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.52 }}
          className="mt-4 sm:mt-5 text-xs sm:text-sm text-[#9a9a92]"
        >
          14-day free trial · No credit card · Cancel anytime
        </motion.p>

        {/* Social proof strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.65, delay: 0.62 }}
          aria-label="Trusted by"
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs sm:text-sm text-[#6b6b6b]"
        >
          {["Home bakeries", "Tiffin services", "Cloud kitchens", "Health food startups"].map(
            (entry, index, arr) => (
              <div key={entry} className="flex items-center gap-4">
                <span>{entry}</span>
                {index < arr.length - 1 && (
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#d6d6cf]" />
                )}
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
