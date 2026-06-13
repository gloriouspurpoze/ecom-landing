import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { SITE } from "@/data/landing";
import { ArrowRight, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Guides for Indian Food & Local Businesses",
  description:
    "Practical guides on WhatsApp ordering, reducing delivery-app commission, and growing your restaurant, home kitchen or local business in India.",
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    title: "MenuFast Blog — Guides for Indian Local Businesses",
    description:
      "WhatsApp ordering, commission-free selling, and growth guides for Indian food and local businesses.",
    url: `${SITE.url}/blog`,
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE.url}/blog#blog`,
    name: "MenuFast Blog",
    url: `${SITE.url}/blog`,
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.url },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      datePublished: p.date,
      url: `${SITE.url}/blog/${p.slug}`,
      author: { "@type": "Organization", name: p.author },
    })),
  };

  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-[#e5e5e0] bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-5">
          <Link href="/" className="font-display text-xl tracking-tight text-[#0a0a0a]">
            menu<span className="text-[#1d9e75]">fast</span>
          </Link>
          <Link href="/" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#757570] mb-3">
          Blog
        </p>
        <h1 className="font-display text-3xl sm:text-4xl tracking-tight">
          Guides for growing your business.
        </h1>
        <p className="mt-3 max-w-xl text-sm sm:text-base text-[#6b6b6b]">
          Practical, no-fluff advice on taking orders, cutting commission, and getting more
          customers — for Indian food and local businesses.
        </p>

        {posts.length === 0 ? (
          <p className="mt-12 text-sm text-[#6b6b6b]">New articles coming soon.</p>
        ) : (
          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-[#e5e5e0] bg-white p-5 sm:p-6 hover:shadow-sm hover:border-[#bfbfb8] transition-all"
              >
                <div className="flex items-center gap-3 text-[11px] text-[#757570]">
                  <span className="rounded-full bg-[#e1f5ee] px-2.5 py-0.5 font-medium text-[#0f6e56]">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} aria-hidden="true" />
                    {post.readingTime} min read
                  </span>
                </div>
                <h2 className="mt-3 font-display text-lg sm:text-xl tracking-tight text-[#0a0a0a] leading-snug">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-[#6b6b6b] leading-relaxed flex-1">
                  {post.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[#0f6e56]">
                  Read guide
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>

      <footer className="border-t border-[#e5e5e0] px-4 sm:px-6 py-8">
        <div className="mx-auto max-w-5xl flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#757570]">
          <Link href="/" className="hover:text-[#0a0a0a] transition-colors">Home</Link>
          <Link href="/commission-calculator" className="hover:text-[#0a0a0a] transition-colors">
            Commission calculator
          </Link>
          <Link href="/contact" className="hover:text-[#0a0a0a] transition-colors">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
