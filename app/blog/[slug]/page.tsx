import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPostSlugs, getPostBySlug } from "@/lib/blog";
import { SITE } from "@/data/landing";
import { ArrowRight, Clock } from "lucide-react";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Article not found" };

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `${SITE.url}/blog/${post.slug}`,
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${SITE.url}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        dateModified: post.date,
        author: { "@type": "Organization", name: post.author, url: SITE.url },
        publisher: {
          "@type": "Organization",
          name: SITE.name,
          url: SITE.url,
        },
        mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
        keywords: post.keywords.join(", "),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE.url}/blog` },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `${SITE.url}/blog/${post.slug}`,
          },
        ],
      },
    ],
  };

  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#0a0a0a]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="border-b border-[#e5e5e0] bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 sm:px-6 py-5">
          <Link href="/" className="font-display text-xl tracking-tight text-[#0a0a0a]">
            menu<span className="text-[#1d9e75]">fast</span>
          </Link>
          <Link href="/blog" className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors">
            ← All articles
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-6 text-xs text-[#757570]">
          <Link href="/blog" className="hover:text-[#0a0a0a]">Blog</Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span>{post.category}</span>
        </nav>

        <div className="flex items-center gap-3 text-[11px] text-[#757570] mb-4">
          <span className="rounded-full bg-[#e1f5ee] px-2.5 py-0.5 font-medium text-[#0f6e56]">
            {post.category}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={11} aria-hidden="true" />
            {post.readingTime} min read
          </span>
          <span>{formattedDate}</span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] leading-tight tracking-tight">
          {post.title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#5a5a55] leading-relaxed">
          {post.description}
        </p>

        <div className="mt-10 prose prose-sm sm:prose-base max-w-none prose-headings:font-display prose-headings:tracking-tight prose-headings:text-[#0a0a0a] prose-p:text-[#3d3d3d] prose-li:text-[#3d3d3d] prose-a:text-[#0f6e56] prose-a:font-medium prose-strong:text-[#0a0a0a] prose-table:text-sm">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </div>

        {/* End CTA */}
        <div className="mt-12 rounded-2xl border border-[#0a0a0a] bg-[#0a0a0a] p-6 sm:p-8 text-center text-white">
          <h2 className="font-display text-xl sm:text-2xl tracking-tight">
            Launch your commission-free store
          </h2>
          <p className="mt-2 text-sm text-[#b5b5ad]">
            Build a branded store with WhatsApp ordering in under 2 minutes. Free to start.
          </p>
          <Link
            href="/signup"
            className="mt-5 inline-flex items-center gap-2 rounded-md bg-[#1d9e75] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Start free
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </article>
    </main>
  );
}
