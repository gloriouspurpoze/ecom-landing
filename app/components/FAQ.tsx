"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/data/landing";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-[#e5e5e0] bg-white py-16 sm:py-20 px-4 sm:px-6 scroll-mt-16"
    >
      <div className="max-w-3xl mx-auto">
        <div className="mb-10 sm:mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-3 sm:mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#757570]">
              FAQ
            </p>
            <h2
              id="faq-heading"
              className="font-display text-3xl sm:text-4xl tracking-tight text-[#0a0a0a]"
            >
              Questions, answered.
            </h2>
          </motion.div>
        </div>

        <div className="divide-y divide-[#e5e5e0] rounded-2xl border border-[#e5e5e0] bg-white">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left"
                  >
                    <span className="text-sm sm:text-base font-medium text-[#0a0a0a]">
                      {faq.question}
                    </span>
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
                      <p className="px-5 sm:px-6 pb-5 text-sm text-[#6b6b6b] leading-relaxed">
                        {faq.answer}
                      </p>
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
