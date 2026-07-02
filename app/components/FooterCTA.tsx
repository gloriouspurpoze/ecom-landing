"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useVerticalContent } from "@/hooks/useVerticalContent";

const footerLinks = [
  { label: "Why switch", href: "#proof", isAnchor: true },
  { label: "Admin panel", href: "#dashboard", isAnchor: true },
  { label: "Pricing", href: "#pricing", isAnchor: true },
  { label: "Blog", href: "/blog", isAnchor: false },
  { label: "Commission calculator", href: "/commission-calculator", isAnchor: false },
  { label: "Contact", href: "/contact", isAnchor: false },
  { label: "Privacy", href: "/privacy", isAnchor: false },
  { label: "Terms", href: "/terms", isAnchor: false },
  { label: "Refunds", href: "/refund", isAnchor: false },
  { label: "Login", href: "/login", isAnchor: false },
  { label: "Sign up", href: "/signup", isAnchor: false },
];

export default function FooterCTA() {
  const { businessType, config, signupHref } = useVerticalContent();

  return (
    <>
      <section
        aria-labelledby="cta-heading"
        className="border-y border-[#e5e5e0] bg-white px-4 sm:px-6 py-16 sm:py-20 text-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={businessType}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35 }}
          >
            <h2
              id="cta-heading"
              className="font-display text-3xl sm:text-4xl tracking-tight text-[#0a0a0a]"
            >
              {config.footer.headline}
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-[#6b6b6b]">
              {config.footer.subcopy}
            </p>
            <div className="mt-6">
              <Link
                href={signupHref}
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-[#0a0a0a] px-8 py-3.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Start free now
                <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      <footer aria-label="Site footer" className="px-4 sm:px-6 py-8 sm:py-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <Link href="/" aria-label="Torq Orbit home" className="font-display text-lg text-[#0a0a0a]">
              Torq<span className="text-[#1d9e75]"> Orbit</span>
            </Link>

            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#757570]" role="list">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    {link.isAnchor ? (
                      <a
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(link.href.replace("#", ""))?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }}
                        className="hover:text-[#0a0a0a] transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="hover:text-[#0a0a0a] transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t border-[#e5e5e0] pt-6">
            <p className="text-xs sm:text-sm text-[#757570]">
              Made for local businesses. Built in Mumbai.
            </p>
            <p className="text-xs text-[#757570]">
              © {new Date().getFullYear()} Torq Orbit. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
