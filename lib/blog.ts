import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "blog");

export type Funnel = "TOFU" | "MOFU" | "BOFU";

export type PostMeta = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  funnel: Funnel;
  keywords: string[];
  readingTime: number;
};

export type Post = PostMeta & {
  content: string;
};

function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function ensureDir(): boolean {
  return fs.existsSync(POSTS_DIR);
}

export function getAllPostSlugs(): string[] {
  if (!ensureDir()) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const fullPath = path.join(POSTS_DIR, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    date: data.date ?? new Date().toISOString().slice(0, 10),
    author: data.author ?? "MenuFast Team",
    category: data.category ?? "Guides",
    funnel: (data.funnel as Funnel) ?? "TOFU",
    keywords: Array.isArray(data.keywords) ? data.keywords : [],
    readingTime: readingTime(content),
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .map(({ content: _content, ...meta }) => meta);
}
