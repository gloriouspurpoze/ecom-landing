"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const footerLinks = [
  { label: "Features", href: "#features", isAnchor: true },
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
  return (
    <>
      <section
        aria-labelledby="cta-heading"
        className="border-y border-[#e5e5e0] bg-white px-4 sm:px-6 py-16 sm:py-20 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            id="cta-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight text-[#0a0a0a]"
          >
            Ready to own your orders?
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-[#6b6b6b]">
            Set up your store in 10 minutes. Share the link. Start receiving orders on WhatsApp.
          </p>
          <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/signup"
              className="group w-full sm:w-auto rounded-md bg-[#0a0a0a] px-8 py-3.5 sm:py-3 text-sm font-medium text-white transition hover:opacity-90 flex items-center justify-center gap-2"
            >
              Start your free trial
              <ArrowRight size={14} aria-hidden="true" className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/login"
              className="w-full sm:w-auto rounded-md border border-[#e5e5e0] px-7 py-3.5 sm:py-3 text-sm text-[#0a0a0a] text-center transition hover:border-[#bfbfb8]"
            >
              I already have an account
            </Link>
          </div>
          <p className="mt-4 text-xs sm:text-sm text-[#757570]">
            Free forever plan available · 28-day trial on paid plans · No credit card to start.
          </p>
        </motion.div>
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
