"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t border-[#e5e5e0] bg-white/95 backdrop-blur-md px-4 py-3 safe-bottom"
        >
          <Link
            href="/signup"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0a0a0a] py-3.5 text-sm font-medium text-white"
          >
            Start free — 2 min setup
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
