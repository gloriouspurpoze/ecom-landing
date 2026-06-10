"use client";
import { usePlayground } from "@/app/context/PlaygroundContext";
import MockupFrame from "./MockupFrame";
import { motion } from "framer-motion";
import { Palette, Type, Rocket, Check } from "lucide-react";
import Link from "next/link";

const colorPresets = [
  { hex: "#FF5A1F", label: "Crimson", gradient: "from-orange-500 to-red-500" },
  { hex: "#10B981", label: "Emerald", gradient: "from-emerald-400 to-teal-500" },
  { hex: "#6366F1", label: "Violet", gradient: "from-violet-400 to-indigo-500" },
  { hex: "#F59E0B", label: "Amber", gradient: "from-amber-400 to-yellow-500" },
  { hex: "#EC4899", label: "Rose", gradient: "from-pink-400 to-rose-500" },
  { hex: "#0EA5E9", label: "Sky", gradient: "from-sky-400 to-blue-500" },
];

export default function Playground() {
  const { brandName, setBrandName, primaryColor, setPrimaryColor, businessType } = usePlayground();

  return (
    <section
      id="playground"
      aria-labelledby="playground-heading"
      className="border-t border-[#e5e5e0] py-16 sm:py-20 px-4 sm:px-6 scroll-mt-16"
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
              See it live
            </p>
            <h2
              id="playground-heading"
              className="font-display text-3xl sm:text-4xl tracking-tight text-[#0a0a0a]"
            >
              Build it. See it. Launch it.
            </h2>
            <p className="mt-3 sm:mt-4 max-w-lg text-sm sm:text-base text-[#6b6b6b]">
              Customize your storefront below and watch it update in real time.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Config panel — stacks on top on mobile, left col on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-5 space-y-4 sm:space-y-5 lg:sticky lg:top-24 order-2 lg:order-1"
          >
            {/* Brand name input */}
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#e5e5e0]">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div aria-hidden="true" className="w-8 h-8 rounded-lg bg-[#e1f5ee] flex items-center justify-center shrink-0">
                  <Type size={14} className="text-[#1d9e75]" />
                </div>
                <label htmlFor="brand-name" className="text-sm font-medium text-[#0a0a0a]">
                  Brand Name
                </label>
              </div>
              <input
                id="brand-name"
                type="text"
                maxLength={22}
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="e.g., Spice Craft Bistro"
                autoComplete="organization"
                className="w-full bg-[#fafaf8] border border-[#e5e5e0] focus:border-[#1d9e75] rounded-lg px-4 py-3 text-[#0a0a0a] placeholder-[#9a9a92] outline-none transition-all text-sm focus:ring-2 focus:ring-[#1d9e75]/15"
              />
              <p className="text-[10px] sm:text-xs text-[#9a9a92] mt-2" aria-live="polite">
                {brandName.length}/22 characters
              </p>
            </div>

            {/* Color picker */}
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-[#e5e5e0]">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div aria-hidden="true" className="w-8 h-8 rounded-lg bg-[#e1f5ee] flex items-center justify-center shrink-0">
                  <Palette size={14} className="text-[#1d9e75]" />
                </div>
                <span className="text-sm font-medium text-[#0a0a0a]">Brand Color</span>
              </div>
              <div
                role="group"
                aria-label="Brand color options"
                className="grid grid-cols-3 gap-2 sm:gap-2.5"
              >
                {colorPresets.map((color) => {
                  const isSelected = primaryColor === color.hex;
                  return (
                    <motion.button
                      key={color.hex}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setPrimaryColor(color.hex)}
                      aria-pressed={isSelected}
                      aria-label={`${color.label} color`}
                      className={`relative flex items-center gap-2 p-2.5 rounded-lg border transition-all ${
                        isSelected
                          ? "border-[#0a0a0a]/30 bg-[#f4f4ee]"
                          : "border-[#e5e5e0] bg-white hover:border-[#bfbfb8]"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`w-4 h-4 rounded-full shrink-0 bg-gradient-to-br ${color.gradient}`}
                      />
                      <span className="text-[10px] sm:text-[11px] font-medium text-[#6b6b6b] truncate">
                        {color.label}
                      </span>
                      {isSelected && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          aria-hidden="true"
                          className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#0a0a0a] flex items-center justify-center"
                        >
                          <Check size={8} className="text-white" />
                        </motion.div>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <div className="p-5 sm:p-6 rounded-xl border border-[#0a0a0a] bg-white">
              <div className="flex items-center gap-2 mb-2 sm:mb-3">
                <Rocket size={14} aria-hidden="true" className="text-[#0a0a0a] shrink-0" />
                <span className="text-sm font-medium text-[#0a0a0a]">Ready to go live?</span>
              </div>
              <p className="text-xs text-[#6b6b6b] mb-3 sm:mb-4 leading-relaxed">
                Try for Free for 45 days. No credit card required during trial.
              </p>
              <Link
                href={`/signup?plan=free&businessType=${businessType}`}
                className="inline-flex w-full justify-center rounded-md bg-[#0a0a0a] px-4 py-3 text-sm font-medium text-white transition hover:opacity-90"
              >
                Start your free trial →
              </Link>
              <p className="text-center text-[10px] text-[#9a9a92] mt-3">
                45-day free trial · No credit card
              </p>
            </div>
          </motion.div>

          {/* Phone mockup — shows first on mobile (order-1), right col on desktop (order-2) */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 flex flex-col items-center gap-3 order-1 lg:order-2"
          >
            {/* Mobile hint label */}
            <p className="text-xs text-[#9a9a92] lg:hidden">
              ↓ Customize below to see changes live
            </p>
            <div className="animate-float">
              <MockupFrame />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
