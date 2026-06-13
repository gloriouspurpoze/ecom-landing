import Link from "next/link";
import type { ReactNode } from "react";

export default function LegalLayout({
  title,
  description,
  children,
  updated,
}: {
  title: string;
  description: string;
  children: ReactNode;
  updated: string;
}) {
  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#0a0a0a]">
      <header className="border-b border-[#e5e5e0] bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 sm:px-6 py-5">
          <Link href="/" className="font-display text-xl tracking-tight text-[#0a0a0a]">
            menu<span className="text-[#1d9e75]">fast</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#757570] mb-3">
          Legal
        </p>
        <h1 className="font-display text-3xl sm:text-4xl tracking-tight text-[#0a0a0a]">
          {title}
        </h1>
        <p className="mt-3 text-sm text-[#6b6b6b]">{description}</p>
        <p className="mt-2 text-xs text-[#757570]">Last updated: {updated}</p>

        <div className="mt-10 space-y-6 text-sm sm:text-base text-[#3d3d3d] leading-relaxed [&_h2]:font-semibold [&_h2]:text-[#0a0a0a] [&_h2]:text-lg [&_h2]:mt-8 [&_h2]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_a]:text-[#0f6e56] [&_a]:underline">
          {children}
        </div>
      </article>

      <footer className="border-t border-[#e5e5e0] px-4 sm:px-6 py-8">
        <div className="mx-auto max-w-3xl flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#757570]">
          <Link href="/privacy" className="hover:text-[#0a0a0a] transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-[#0a0a0a] transition-colors">
            Terms
          </Link>
          <Link href="/refund" className="hover:text-[#0a0a0a] transition-colors">
            Refund policy
          </Link>
          <Link href="/contact" className="hover:text-[#0a0a0a] transition-colors">
            Contact
          </Link>
        </div>
      </footer>
    </main>
  );
}
