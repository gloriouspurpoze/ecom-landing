"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { HOMEPAGE_FAQS } from "@/data/landing";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-[#e5e5e0] bg-white py-14 sm:py-16 px-4 sm:px-6 scroll-mt-16"
    >
      <div className="max-w-2xl mx-auto">
        <h2
          id="faq-heading"
          className="font-display text-2xl sm:text-3xl tracking-tight text-center text-[#0a0a0a]"
        >
          Quick answers.
        </h2>

        <div className="mt-6 divide-y divide-[#e5e5e0] rounded-2xl border border-[#e5e5e0] bg-white">
          {HOMEPAGE_FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-medium text-[#0a0a0a]">{faq.question}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      aria-hidden="true"
                      className="shrink-0 text-[#6b6b6b]"
                    >
                      <Plus size={18} />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm text-[#6b6b6b] leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
