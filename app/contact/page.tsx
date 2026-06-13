import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT, SITE } from "@/data/landing";
import { Mail, MapPin, MessageCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with the ${SITE.name} team for support, sales, or partnerships.`,
  alternates: { canonical: `${SITE.url}/contact` },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#0a0a0a]">
      <header className="border-b border-[#e5e5e0] bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 sm:px-6 py-5">
          <Link href="/" className="font-display text-xl tracking-tight text-[#0a0a0a]">
            menu<span className="text-[#1d9e75]">fast</span>
          </Link>
          <Link href="/" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#757570] mb-3">
          Contact
        </p>
        <h1 className="font-display text-3xl sm:text-4xl tracking-tight">We&apos;re here to help.</h1>
        <p className="mt-3 text-sm sm:text-base text-[#6b6b6b] max-w-xl">
          Questions about setup, pricing, payments, or partnerships? Reach out — we typically reply
          within one business day.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent("Hi MenuFast team, I have a question about...")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-4 rounded-xl border border-[#e5e5e0] bg-white p-5 hover:border-[#1d9e75] transition-colors"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e1f5ee] text-[#1d9e75]">
              <MessageCircle size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0a0a0a]">WhatsApp</p>
              <p className="text-sm text-[#6b6b6b] mt-1">{CONTACT.whatsappDisplay}</p>
              <p className="text-xs text-[#757570] mt-1">Fastest for setup help</p>
            </div>
          </a>

          <a
            href={`mailto:${CONTACT.email}`}
            className="flex gap-4 rounded-xl border border-[#e5e5e0] bg-white p-5 hover:border-[#1d9e75] transition-colors"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e1f5ee] text-[#1d9e75]">
              <Mail size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0a0a0a]">Email</p>
              <p className="text-sm text-[#6b6b6b] mt-1">{CONTACT.email}</p>
              <p className="text-xs text-[#757570] mt-1">Billing &amp; legal enquiries</p>
            </div>
          </a>

          <div className="flex gap-4 rounded-xl border border-[#e5e5e0] bg-white p-5 sm:col-span-2">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e1f5ee] text-[#1d9e75]">
              <MapPin size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#0a0a0a]">Office</p>
              <p className="text-sm text-[#6b6b6b] mt-1">{CONTACT.address}</p>
              <p className="flex items-center gap-1.5 text-xs text-[#757570] mt-2">
                <Clock size={12} aria-hidden="true" />
                {CONTACT.supportHours}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-[#e5e5e0] bg-white p-6 sm:p-8 text-center">
          <h2 className="font-display text-xl text-[#0a0a0a]">Ready to launch your store?</h2>
          <p className="mt-2 text-sm text-[#6b6b6b]">
            Start free in under 2 minutes — no credit card required.
          </p>
          <Link
            href="/signup"
            className="mt-5 inline-flex rounded-md bg-[#0a0a0a] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Create free account →
          </Link>
        </div>
      </div>

      <footer className="border-t border-[#e5e5e0] px-4 sm:px-6 py-8">
        <div className="mx-auto max-w-3xl flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#757570]">
          <Link href="/privacy" className="hover:text-[#0a0a0a] transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-[#0a0a0a] transition-colors">Terms</Link>
          <Link href="/refund" className="hover:text-[#0a0a0a] transition-colors">Refund policy</Link>
        </div>
      </footer>
    </main>
  );
}
