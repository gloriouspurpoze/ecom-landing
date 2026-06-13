"use client";
import { motion } from "framer-motion";
import { STEPS } from "@/data/landing";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
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
            <p className="mb-3 sm:mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#757570]">
              How it works
            </p>
            <h2
              id="how-it-works-heading"
              className="font-display text-3xl sm:text-4xl tracking-tight text-[#0a0a0a]"
            >
              From kitchen to first order in 4 steps.
            </h2>
            <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-[#6b6b6b]">
              No website, no developer, no commission. Just your food and your customers.
            </p>
          </motion.div>
        </div>

        <motion.ol
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
          role="list"
        >
          {STEPS.map((s) => (
            <motion.li
              key={s.step}
              variants={item}
              className="relative flex flex-col rounded-xl border border-[#e5e5e0] bg-white p-5 sm:p-6"
            >
              <span
                aria-hidden="true"
                className="font-display text-3xl sm:text-4xl text-[#e5e5e0] leading-none mb-4"
              >
                {s.step}
              </span>
              <h3 className="text-sm sm:text-base font-semibold text-[#0a0a0a] mb-2">
                {s.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#6b6b6b] leading-relaxed flex-1">
                {s.description}
              </p>
              <span className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#e1f5ee] px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-[#0f6e56]">
                <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#1d9e75]" />
                {s.tag}
              </span>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
