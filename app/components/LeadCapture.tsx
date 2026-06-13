"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { CONTACT } from "@/data/landing";

export default function LeadCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    const text = encodeURIComponent(
      `Hi MenuFast! I'd like to learn more about the platform.\n\nMy email: ${email.trim()}`
    );
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section
      id="get-updates"
      aria-labelledby="lead-heading"
      className="border-t border-[#e5e5e0] bg-[#e1f5ee]/50 py-16 sm:py-20 px-4 sm:px-6"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-[#0f6e56]">
            Not ready yet?
          </p>
          <h2
            id="lead-heading"
            className="font-display text-3xl sm:text-4xl tracking-tight text-[#0a0a0a]"
          >
            Get a free walkthrough on WhatsApp.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6b6b6b]">
            Drop your email and we&apos;ll open WhatsApp so you can ask anything — setup, pricing, or
            whether MenuFast fits your business.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-[#1d9e75]/30 bg-white p-6">
              <p className="text-sm font-medium text-[#0a0a0a]">WhatsApp opened!</p>
              <p className="mt-2 text-sm text-[#6b6b6b]">
                Send the pre-filled message and our team will reply within one business day.
              </p>
              <Link
                href="/signup"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#0f6e56] hover:underline"
              >
                Or start free now <ArrowRight size={14} />
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3">
              <label htmlFor="lead-email" className="sr-only">
                Email address
              </label>
              <input
                id="lead-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@yourbusiness.com"
                autoComplete="email"
                className="flex-1 rounded-md border border-[#e5e5e0] bg-white px-4 py-3 text-sm text-[#0a0a0a] placeholder-[#757570] outline-none focus:border-[#1d9e75] focus:ring-2 focus:ring-[#1d9e75]/15"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#0a0a0a] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition shrink-0"
              >
                <MessageCircle size={15} aria-hidden="true" />
                Chat on WhatsApp
              </button>
            </form>
          )}

          <p className="mt-4 text-xs text-[#757570]">
            Or email us at{" "}
            <a href={`mailto:${CONTACT.email}`} className="text-[#0f6e56] hover:underline">
              {CONTACT.email}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
