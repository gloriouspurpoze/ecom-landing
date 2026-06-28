import type { Metadata } from "next";
import { SITE } from "@/data/landing";

export const metadata: Metadata = {
  title: "Start Free — Torq Orbit",
  description:
    "Create your commission-free online store in 2 minutes. WhatsApp ordering, your own link, zero commission.",
  alternates: {
    canonical: `${SITE.url}/signup`,
  },
};

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
