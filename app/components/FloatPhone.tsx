"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

/** Pauses the float animation when the phone mockup is off-screen. */
export default function FloatPhone({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [floating, setFloating] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFloating(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={floating ? "animate-float" : undefined}>
      {children}
    </div>
  );
}
