"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#playground", label: "Live Demo" },
  { href: "#pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (mobileOpen) setMobileOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  /* Close on outside click */
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  /* Prevent body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (!href.startsWith("#")) {
      window.location.href = href;
      return;
    }
    const id = href.replace("#", "");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <nav
      ref={mobileMenuRef}
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#fafaf8]/95 backdrop-blur-md border-b border-[#e5e5e0] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6 py-4 sm:py-5">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Torq Orbit home"
          className="font-display text-xl tracking-tight text-[#0a0a0a] shrink-0"
        >
          Torq<span className="text-[#1d9e75]"> Orbit</span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-6 text-sm" role="menubar">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              role="menuitem"
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors py-1 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          {/* <Link
            href="/login"
            className="text-sm text-[#6b6b6b] hover:text-[#0a0a0a] transition-colors px-3 py-2"
          >
            Sign in
          </Link> */}
          <Link
            href="/signup"
            className="rounded-md bg-[#0a0a0a] px-4 py-2 text-xs font-medium text-white transition hover:opacity-90"
          >
            Start free →
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-[#6b6b6b] hover:text-[#0a0a0a] hover:bg-[#f0f0ec] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu — animated */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#fafaf8]/98 backdrop-blur-md border-b border-[#e5e5e0]"
          >
            <div className="px-4 pt-2 pb-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  role="menuitem"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="flex items-center w-full text-[#6b6b6b] hover:text-[#0a0a0a] hover:bg-[#f0f0ec] rounded-lg px-3 py-3 text-sm transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#e5e5e0] flex flex-col gap-2">
                {/* <Link
                  href="/login"
                  role="menuitem"
                  className="flex items-center justify-center text-sm text-[#6b6b6b] hover:text-[#0a0a0a] hover:bg-[#f0f0ec] rounded-lg px-3 py-3 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  Sign in
                </Link> */}
                <Link
                  href="/signup"
                  role="menuitem"
                  className="flex items-center justify-center rounded-md bg-[#0a0a0a] text-white text-sm font-medium px-4 py-3 hover:opacity-90 transition"
                  onClick={() => setMobileOpen(false)}
                >
                  Start free →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
