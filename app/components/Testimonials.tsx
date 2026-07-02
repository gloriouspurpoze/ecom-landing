"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink, Quote } from "lucide-react";
import { USE_CASES } from "@/data/landing";
import { useVerticalContent } from "@/hooks/useVerticalContent";

const emojiMap: Record<string, string> = {
  "Cakes and Bakes": "🎂",
  "Priya's Tiffin": "🥗",
  "Cloud kitchen": "🍳",
  "Boutique store": "🛍️",
  "Home services": "🔧",
  "Cafe or tapri": "☕",
};

export default function Testimonials() {
  const { businessType, config, signupHref } = useVerticalContent();
  const { testimonials } = config;

  const featured = USE_CASES.filter(
    (u) => u.href && testimonials.featuredTitles.includes(u.title)
  );
  const scenarios = USE_CASES.filter((u) =>
    testimonials.scenarioTitles.includes(u.title)
  );

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="relative border-t border-[#e5e5e0] overflow-hidden py-16 sm:py-20 px-4 sm:px-6 scroll-mt-16"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_100%_50%,rgba(29,158,117,0.06),transparent)]" />
      </div>

      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={businessType}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-12"
          >
            <p className="inline-flex items-center gap-1.5 rounded-full border border-[#e5e5e0] bg-[#fafaf8] px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-[#757570] mb-4">
              Real examples
            </p>
            <h2
              id="reviews-heading"
              className="font-display text-3xl sm:text-4xl tracking-tight text-[#0a0a0a]"
            >
              {testimonials.heading}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#6b6b6b]">
              {testimonials.subheading}
            </p>
          </motion.div>
        </AnimatePresence>

        {featured.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
            {featured.map((story, i) => (
              <motion.article
                key={story.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative flex flex-col rounded-2xl sm:rounded-3xl border border-[#e5e5e0] bg-[#fafaf8] p-6 sm:p-8 hover:border-[#1d9e75]/40 hover:shadow-md transition-all duration-300"
              >
                <Quote
                  size={28}
                  aria-hidden="true"
                  className="text-[#1d9e75]/20 absolute top-5 right-5 sm:top-6 sm:right-6"
                />

                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-[#e5e5e0] text-2xl shadow-sm"
                    aria-hidden="true"
                  >
                    {emojiMap[story.title] ?? "🏪"}
                  </span>
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-wider text-[#1d9e75]">
                      {story.vertical}
                    </p>
                    <h3 className="font-display text-lg tracking-tight text-[#0a0a0a]">
                      {story.title}
                    </h3>
                  </div>
                </div>

                <blockquote className="text-sm sm:text-base text-[#5a5a55] leading-relaxed flex-1">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>

                {story.href && (
                  <Link
                    href={story.href}
                    className="mt-6 inline-flex items-center gap-2 self-start rounded-xl bg-[#0a0a0a] px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90 group-hover:gap-2.5"
                  >
                    {story.cta}
                    <ExternalLink size={14} aria-hidden="true" />
                  </Link>
                )}
              </motion.article>
            ))}
          </div>
        )}

        {scenarios.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <p className="text-xs font-medium uppercase tracking-wider text-[#757570] mb-4 text-center">
              Also works for
            </p>
            <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {scenarios.map((story, i) => (
                <motion.div
                  key={story.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                  className="rounded-xl border border-[#e5e5e0] bg-white p-4 sm:p-5 hover:border-[#bfbfb8] transition-colors"
                >
                  <span className="text-xl" aria-hidden="true">
                    {emojiMap[story.title] ?? "🏪"}
                  </span>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-[#1d9e75] mt-3">
                    {story.vertical}
                  </p>
                  <h3 className="text-sm font-semibold text-[#0a0a0a] mt-1">{story.title}</h3>
                  <p className="text-xs text-[#6b6b6b] leading-relaxed mt-2 line-clamp-3">
                    {story.quote}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 sm:mt-10 text-center"
        >
          <Link
            href={signupHref}
            className="group inline-flex items-center gap-2 text-sm font-medium text-[#0f6e56] hover:underline"
          >
            Build your store in 2 minutes
            <ArrowRight
              size={14}
              aria-hidden="true"
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
