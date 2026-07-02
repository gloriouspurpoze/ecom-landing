"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import { useVerticalContent } from "@/hooks/useVerticalContent";
import { VERTICAL_LIST } from "@/data/verticals";
import type { BusinessType } from "@/app/context/PlaygroundContext";

export default function VerticalSelectModal() {
  const {
    businessType,
    hydrated,
    verticalModalOpen,
    selectVertical,
    closeVerticalModal,
    config,
  } = useVerticalContent();

  const [pending, setPending] = useState<BusinessType>(businessType);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (verticalModalOpen) setPending(businessType);
  }, [verticalModalOpen, businessType]);

  useEffect(() => {
    if (!verticalModalOpen) return;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeVerticalModal(pending);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [verticalModalOpen, closeVerticalModal, pending]);

  if (!hydrated) return null;

  return (
    <AnimatePresence>
      {verticalModalOpen && (
        <motion.div
          role="presentation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => closeVerticalModal(pending)}
            className="absolute inset-0 bg-[#0a0a0a]/55 backdrop-blur-sm"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="vertical-modal-title"
            aria-describedby="vertical-modal-desc"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ type: "spring", bounce: 0.12, duration: 0.45 }}
            className="relative w-full sm:max-w-lg rounded-t-3xl sm:rounded-3xl bg-white shadow-2xl border border-[#e5e5e0] overflow-hidden"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(29,158,117,0.18),transparent)]"
            />

            <button
              type="button"
              onClick={() => closeVerticalModal(pending)}
              aria-label="Close dialog"
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#e5e5e0] bg-white text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
            >
              <X size={16} />
            </button>

            <div className="relative px-5 sm:px-7 pt-7 sm:pt-8 pb-5 sm:pb-6">
              <p className="text-[11px] font-medium uppercase tracking-widest text-[#1d9e75]">
                Personalize your experience
              </p>
              <h2
                id="vertical-modal-title"
                className="font-display text-2xl sm:text-[1.65rem] tracking-tight text-[#0a0a0a] mt-2 pr-8"
              >
                What type of business do you run?
              </h2>
              <p id="vertical-modal-desc" className="text-sm text-[#6b6b6b] mt-2">
                We&apos;ll tailor the page — copy, demos & pricing — for your industry.
              </p>

              <div
                role="radiogroup"
                aria-label="Business type"
                className="mt-5 sm:mt-6 space-y-2.5"
              >
                {VERTICAL_LIST.map((vertical) => {
                  const selected = pending === vertical.id;
                  return (
                    <button
                      key={vertical.id}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => setPending(vertical.id)}
                      className={`group w-full flex items-center gap-3.5 rounded-2xl border px-4 py-3.5 text-left transition-all ${
                        selected
                          ? "border-[#1d9e75] bg-[#e1f5ee]/50 shadow-sm ring-1 ring-[#1d9e75]/30"
                          : "border-[#e5e5e0] bg-[#fafaf8] hover:border-[#bfbfb8] hover:bg-white"
                      }`}
                    >
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl ${
                          selected ? "bg-white border border-[#1d9e75]/25" : "bg-white border border-[#e5e5e0]"
                        }`}
                        aria-hidden="true"
                      >
                        {vertical.emoji}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="block text-sm font-semibold text-[#0a0a0a]">
                          {vertical.label}
                        </span>
                        <span className="block text-xs text-[#6b6b6b] mt-0.5 line-clamp-2">
                          {vertical.hero.painLine}
                        </span>
                      </span>
                      <span
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          selected
                            ? "border-[#1d9e75] bg-[#1d9e75] text-white"
                            : "border-[#d1d1ca] bg-white text-transparent"
                        }`}
                        aria-hidden="true"
                      >
                        <Check size={12} strokeWidth={3} />
                      </span>
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                onClick={() => selectVertical(pending)}
                className="mt-5 sm:mt-6 w-full flex items-center justify-center gap-2 rounded-xl bg-[#0a0a0a] px-5 py-3.5 text-sm font-medium text-white hover:opacity-90 transition"
              >
                Show me the {VERTICAL_LIST.find((v) => v.id === pending)?.label.toLowerCase() ?? config.label.toLowerCase()} experience
                <ArrowRight size={15} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => closeVerticalModal(pending)}
                className="mt-3 w-full text-center text-xs text-[#9a9a92] hover:text-[#6b6b6b] transition-colors py-1"
              >
                Skip for now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
