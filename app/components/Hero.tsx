"use client";
import { useEffect, useState } from "react";
import { usePlayground, BusinessType } from "@/app/context/PlaygroundContext";
import { ArrowRight, Check, BadgePercent, Monitor, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MockupFrame, { type ViewportVariant } from "./MockupFrame";
import FloatPhone from "./FloatPhone";

const types: { id: BusinessType; label: string; emoji: string }[] = [
  { id: "restaurant", label: "Restaurant", emoji: "🍽️" },
  { id: "retail", label: "Retail", emoji: "🛍️" },
  { id: "homeservice", label: "Home Services", emoji: "🏠" },
];

const colorPresets = ["#1d9e75", "#FF5A1F", "#6366F1", "#F59E0B", "#EC4899", "#0EA5E9"];

const steps = ["Build", "Share", "Get orders"];

const viewportOptions: { id: ViewportVariant; label: string; icon: typeof Monitor }[] = [
  { id: "desktop", label: "Desktop", icon: Monitor },
  { id: "mobile", label: "Mobile", icon: Smartphone },
];

export default function Hero() {
  const { businessType, setBusinessType, brandName, setBrandName, primaryColor, setPrimaryColor } =
    usePlayground();
  const [viewport, setViewport] = useState<ViewportVariant>("mobile");

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const syncViewport = () => setViewport(mq.matches ? "desktop" : "mobile");
    syncViewport();
    mq.addEventListener("change", syncViewport);
    return () => mq.removeEventListener("change", syncViewport);
  }, []);

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-36 pb-14 sm:pb-16 lg:pb-20"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_75%_-5%,rgba(29,158,117,0.12),transparent),radial-gradient(45%_40%_at_5%_20%,rgba(29,158,117,0.07),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,10,10,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,10,10,0.025)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000,transparent)]" />
      </div>

      <div className="mx-auto grid max-w-6xl xl:max-w-7xl grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:grid-rows-[auto_auto] gap-8 lg:gap-12 xl:gap-14 items-center">
        {/* Copy */}
        <div className="order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-[#e5e5e0] shadow-sm text-[#0f6e56] px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-medium"
          >
            <BadgePercent size={13} aria-hidden="true" className="text-[#1d9e75]" />
            Zero commission · Keep 100%
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="font-display text-[2.4rem] leading-[1.08] sm:text-5xl md:text-[3.25rem] tracking-tight text-[#0a0a0a] mt-5 sm:mt-6"
          >
            Your store.
            <br />
            <span className="text-[#1d9e75]">Zero commission.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto lg:mx-0 max-w-md text-base sm:text-lg text-[#5a5a55] mt-4 sm:mt-5"
          >
            Branded web store + WhatsApp orders. Live in 2 minutes.
          </motion.p>

          {/* Inline steps */}
          <motion.ol
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-5 flex items-center justify-center lg:justify-start gap-1 text-xs sm:text-sm text-[#6b6b6b]"
            aria-label="How it works"
          >
            {steps.map((step, i) => (
              <li key={step} className="flex items-center gap-1">
                {i > 0 && <span aria-hidden="true" className="text-[#bfbfb8] mx-0.5">→</span>}
                <span className="font-medium text-[#0a0a0a]">{step}</span>
              </li>
            ))}
          </motion.ol>
        </div>

        {/* Live preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="order-2 relative flex justify-center lg:justify-end lg:col-start-2 lg:row-start-1 lg:row-span-2 w-full min-w-0"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 m-auto h-[85%] w-[90%] rounded-full bg-[#1d9e75]/20 blur-[100px]"
          />

          <div className="relative flex w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none flex-col items-center lg:items-end">
            <FloatPhone>
              <AnimatePresence mode="wait">
                <motion.div
                  key={viewport}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                  className="w-full"
                >
                  <MockupFrame variant={viewport} />
                </motion.div>
              </AnimatePresence>
            </FloatPhone>

            <div
              role="group"
              aria-label="Preview viewport"
              className="mt-4 inline-flex gap-1 p-1 rounded-full bg-white/90 backdrop-blur border border-[#e5e5e0] shadow-sm"
            >
              {viewportOptions.map((option) => {
                const isSelected = viewport === option.id;
                const Icon = option.icon;
                return (
                  <button
                    key={option.id}
                    onClick={() => setViewport(option.id)}
                    aria-pressed={isSelected}
                    className="relative px-3 py-1.5 rounded-full text-xs font-medium transition-colors"
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="hero-viewport"
                        className="absolute inset-0 rounded-full bg-[#0a0a0a]"
                        transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                      />
                    )}
                    <span
                      className={`relative z-10 flex items-center gap-1.5 ${
                        isSelected ? "text-white" : "text-[#6b6b6b]"
                      }`}
                    >
                      <Icon size={13} aria-hidden="true" />
                      {option.label}
                    </span>
                  </button>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, x: -16, y: -8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className={`hidden sm:flex absolute items-center gap-2.5 rounded-xl bg-white/90 backdrop-blur border border-[#e5e5e0] shadow-lg px-3.5 py-2.5 ${
                viewport === "desktop" ? "lg:-left-8 lg:top-8 -left-4 top-6" : "-left-6 top-10"
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e1f5ee] text-[#1d9e75]">
                <BadgePercent size={16} />
              </span>
              <div className="text-left">
                <p className="text-[11px] text-[#757570] leading-none">Commission</p>
                <p className="text-sm font-bold text-[#0a0a0a] mt-1">₹0 · always</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.78 }}
              className={`hidden sm:flex absolute items-center gap-2.5 rounded-xl bg-white/90 backdrop-blur border border-[#e5e5e0] shadow-lg px-3.5 py-2.5 ${
                viewport === "desktop" ? "lg:-right-8 lg:bottom-28 -right-4 bottom-24" : "-right-5 bottom-16"
              }`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#1d9e75] opacity-60 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#1d9e75]" />
              </span>
              <div className="text-left">
                <p className="text-[11px] text-[#757570] leading-none">New order on WhatsApp</p>
                <p className="text-sm font-bold text-[#0a0a0a] mt-1">+ ₹420</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Interactive controls + CTAs */}
        <div className="order-3 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            className="space-y-4"
          >
            {/* Business type */}
            <div
              role="group"
              aria-label="Business type selector"
              className="inline-flex flex-wrap justify-center lg:justify-start gap-2 p-1.5 rounded-2xl bg-white border border-[#e5e5e0] shadow-sm"
            >
              {types.map((type) => {
                const isSelected = businessType === type.id;
                return (
                  <button
                    key={type.id}
                    onClick={() => setBusinessType(type.id)}
                    aria-pressed={isSelected}
                    className="relative px-3.5 sm:px-4 py-2 rounded-xl text-sm font-medium transition-colors"
                  >
                    {isSelected && (
                      <motion.span
                        layoutId="hero-seg"
                        className="absolute inset-0 rounded-xl bg-[#0a0a0a]"
                        transition={{ type: "spring", bounce: 0.18, duration: 0.5 }}
                      />
                    )}
                    <span
                      className={`relative z-10 flex items-center gap-1.5 ${
                        isSelected ? "text-white" : "text-[#6b6b6b]"
                      }`}
                    >
                      <span aria-hidden="true">{type.emoji}</span>
                      {type.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Brand name + color — inline customize */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md mx-auto lg:mx-0">
              <input
                type="text"
                maxLength={22}
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Your brand name"
                aria-label="Brand name"
                className="flex-1 bg-white border border-[#e5e5e0] focus:border-[#1d9e75] rounded-xl px-4 py-2.5 text-sm text-[#0a0a0a] placeholder-[#9a9a92] outline-none transition-all focus:ring-2 focus:ring-[#1d9e75]/15"
              />
              <div role="group" aria-label="Brand color" className="flex items-center justify-center gap-2">
                {colorPresets.map((hex) => (
                  <button
                    key={hex}
                    onClick={() => setPrimaryColor(hex)}
                    aria-label={`Color ${hex}`}
                    aria-pressed={primaryColor === hex}
                    className={`h-7 w-7 rounded-full transition-transform hover:scale-110 ${
                      primaryColor === hex ? "ring-2 ring-offset-2 ring-[#0a0a0a]" : ""
                    }`}
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-6 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3"
          >
            <a
              href="/signup"
              className="group w-full sm:w-auto rounded-lg bg-[#0a0a0a] px-7 py-3.5 text-sm font-medium text-white transition hover:opacity-90 flex items-center justify-center gap-2"
            >
              Start free — 2 min setup
              <ArrowRight size={15} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#proof"
              className="w-full sm:w-auto rounded-lg border border-[#e5e5e0] bg-white px-7 py-3.5 text-sm font-medium text-[#0a0a0a] text-center transition hover:border-[#bfbfb8]"
            >
              See the math
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-5 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs sm:text-sm text-[#5a5a55]"
          >
            {["28-day free trial", "No credit card", "Cancel anytime"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check size={14} aria-hidden="true" className="text-[#1d9e75]" />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
