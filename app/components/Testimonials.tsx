"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { USE_CASES } from "@/data/landing";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Testimonials() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="border-t border-[#e5e5e0] bg-white py-16 sm:py-20 px-4 sm:px-6 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-3 sm:mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#757570]">
              Built for businesses like yours
            </p>
            <h2
              id="reviews-heading"
              className="font-display text-3xl sm:text-4xl tracking-tight text-[#0a0a0a]"
            >
              See how local businesses use MenuFast.
            </h2>
            <p className="mt-3 max-w-xl text-sm sm:text-base text-[#6b6b6b]">
              Real example menus plus common use cases — no fabricated reviews.
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          {USE_CASES.map((useCase) => (
            <motion.article
              key={useCase.title}
              variants={item}
              className="flex flex-col rounded-xl border border-[#e5e5e0] bg-[#fafaf8] p-5 sm:p-6"
            >
              <p className="text-[11px] font-medium uppercase tracking-wider text-[#1d9e75]">
                {useCase.vertical}
              </p>
              <h3 className="mt-2 text-sm sm:text-base font-semibold text-[#0a0a0a]">
                {useCase.title}
              </h3>
              <p className="mt-3 text-sm text-[#6b6b6b] leading-relaxed flex-1">
                {useCase.quote}
              </p>
              {useCase.href && (
                <Link
                  href={useCase.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0f6e56] hover:underline"
                >
                  {useCase.cta}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
