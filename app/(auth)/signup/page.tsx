"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgePercent,
  Check,
  MessageCircle,
  Store,
} from "lucide-react";
import { CONTACT } from "@/data/landing";
import { enquiryErrorMessage, submitEnquiry } from "@/lib/enquiry";

const PLANS = [
  {
    id: "free",
    name: "Free",
    price: "₹0",
    note: "Forever free",
  },
  {
    id: "growth",
    name: "Growth",
    price: "₹499",
    note: "28-day trial",
    badge: "Popular",
  },
  {
    id: "premium",
    name: "Premium",
    price: "₹999",
    note: "28-day trial",
  },
] as const;

const PLAN_LABELS: Record<string, string> = {
  free: "Free — ₹0 / forever",
  growth: "Growth — ₹499 / month",
  premium: "Premium — ₹999 / month",
};

const BUSINESS_TYPES = [
  { value: "Restaurant, Cafe or Cloud Kitchen", label: "Restaurant", emoji: "🍽️" },
  { value: "E-Commerce", label: "Retail", emoji: "🛍️" },
  { value: "Home Services", label: "Home Services", emoji: "🏠" },
  { value: "Other", label: "Other", emoji: "✨" },
] as const;

const BUSINESS_TYPE_URL_MAP: Record<string, string> = {
  restaurant: "Restaurant, Cafe or Cloud Kitchen",
  retail: "E-Commerce",
  homeservice: "Home Services",
};

const perks = [
  { icon: BadgePercent, text: "Zero commission on every order" },
  { icon: MessageCircle, text: "Orders land on your WhatsApp" },
  { icon: Store, text: "Live store link in under 30 minutes" },
];

const inputClass =
  "w-full bg-[#fafaf8] border border-[#e5e5e0] focus:border-[#1d9e75] rounded-xl px-4 py-3 text-sm text-[#0a0a0a] placeholder-[#9a9a92] outline-none transition-all focus:ring-2 focus:ring-[#1d9e75]/15";

function SignupContent() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan") ?? "";
  const businessTypeParam = BUSINESS_TYPE_URL_MAP[searchParams.get("businessType") ?? ""] ?? "";

  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    business_name: "",
    owner_name: "",
    whatsapp_number: "",
    email: "",
    city: "",
    business_type: businessTypeParam,
    details: "",
    plan: planParam || "growth",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function canAdvanceStep1() {
    return form.business_name.trim() && form.business_type && form.city.trim();
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const planLabel = PLAN_LABELS[form.plan] ?? form.plan ?? "Not selected";
      const messageParts = [
        `Business: ${form.business_name}`,
        `City: ${form.city || "—"}`,
        `Business Type: ${form.business_type || "—"}`,
        `Plan: ${planLabel}`,
        form.details ? `Notes: ${form.details}` : null,
      ]
        .filter(Boolean)
        .join("\n");

      await submitEnquiry({
        name: form.owner_name,
        email: form.email,
        phone: form.whatsapp_number,
        service: "Torq Orbit — Digital Menu",
        message: messageParts,
      });
      setSubmitted(true);
    } catch (err) {
      if (process.env.NODE_ENV === "development") {
        console.error("[signup enquiry]", err);
      }
      setError(enquiryErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    const planLabel = PLAN_LABELS[form.plan] ?? form.plan;
    return (
      <main className="min-h-screen bg-[#fafaf8] flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md rounded-2xl border border-[#e5e5e0] bg-white p-8 sm:p-10 text-center shadow-sm"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#e1f5ee]">
            <Check size={28} aria-hidden="true" className="text-[#1d9e75]" />
          </div>
          <h1 className="font-display text-2xl tracking-tight text-[#0a0a0a]">You&apos;re in!</h1>
          <p className="mt-2 text-sm text-[#6b6b6b] leading-relaxed">
            Thanks, <strong className="text-[#0a0a0a]">{form.owner_name}</strong>. We&apos;ll reach
            out to <strong className="text-[#0a0a0a]">{form.email}</strong> within 24 hours to get{" "}
            <strong className="text-[#0a0a0a]">{form.business_name}</strong> live.
          </p>

          <dl className="mt-6 rounded-xl border border-[#e5e5e0] bg-[#fafaf8] p-4 text-left text-sm space-y-2">
            <div className="flex justify-between gap-4">
              <dt className="text-[#757570]">WhatsApp</dt>
              <dd className="font-medium text-[#0a0a0a]">+{form.whatsapp_number}</dd>
            </div>
            {planLabel && (
              <div className="flex justify-between gap-4">
                <dt className="text-[#757570]">Plan</dt>
                <dd className="font-medium text-[#0a0a0a]">{planLabel}</dd>
              </div>
            )}
          </dl>

          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Hi, I just signed up for Torq Orbit — ${form.business_name}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block text-sm font-medium text-[#0f6e56] hover:underline"
          >
            Message us on WhatsApp instead →
          </a>

          <Link
            href="/"
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-[#e5e5e0] py-3 text-sm font-medium text-[#0a0a0a] hover:border-[#bfbfb8] transition-colors"
          >
            <ArrowLeft size={15} aria-hidden="true" />
            Back to home
          </Link>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fafaf8]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left — value panel */}
        <div className="relative hidden lg:flex flex-col justify-between bg-[#0a0a0a] px-10 xl:px-14 py-10 text-white overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_0%,rgba(29,158,117,0.25),transparent)]"
          />

          <div className="relative">
            <Link href="/" className="font-display text-xl tracking-tight">
              Torq<span className="text-[#1d9e75]"> Orbit</span>
            </Link>
          </div>

          <div className="relative space-y-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-[#7fe6c1] mb-3">
                Start free today
              </p>
              <h1 className="font-display text-4xl xl:text-[2.75rem] leading-[1.1] tracking-tight">
                Your store.
                <br />
                <span className="text-[#1d9e75]">Zero commission.</span>
              </h1>
              <p className="mt-4 text-[#b5b5ad] text-base max-w-sm">
                Join local businesses across India who stopped paying 20–30% to delivery apps.
              </p>
            </div>

            <ul className="space-y-4">
              {perks.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-[#d4d4cc]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Icon size={16} aria-hidden="true" className="text-[#1d9e75]" />
                  </span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <p className="relative text-xs text-[#757570]">
            28-day trial on paid plans · No credit card · Cancel anytime
          </p>
        </div>

        {/* Right — form */}
        <div className="flex flex-col justify-center px-4 sm:px-8 lg:px-10 xl:px-16 py-10 lg:py-12">
          <div className="w-full max-w-md mx-auto">
            {/* Mobile header */}
            <div className="lg:hidden mb-8">
              <Link href="/" className="font-display text-lg tracking-tight text-[#0a0a0a]">
                Torq<span className="text-[#1d9e75]"> Orbit</span>
              </Link>
              <h1 className="font-display text-2xl tracking-tight mt-4">Start your free store</h1>
              <p className="text-sm text-[#6b6b6b] mt-1">Takes 2 minutes. No credit card.</p>
            </div>

            {/* Step indicator */}
            <div className="flex items-center gap-3 mb-8">
              {[1, 2].map((s) => (
                <div key={s} className="flex items-center gap-3 flex-1">
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                      step >= s ? "bg-[#0a0a0a] text-white" : "bg-[#e5e5e0] text-[#757570]"
                    }`}
                  >
                    {step > s ? <Check size={14} aria-hidden="true" /> : s}
                  </div>
                  <span
                    className={`text-xs font-medium hidden sm:block ${
                      step === s ? "text-[#0a0a0a]" : "text-[#9a9a92]"
                    }`}
                  >
                    {s === 1 ? "Your store" : "Your details"}
                  </span>
                  {s === 1 && (
                    <div
                      aria-hidden="true"
                      className={`flex-1 h-px ${step > 1 ? "bg-[#0a0a0a]" : "bg-[#e5e5e0]"}`}
                    />
                  )}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    {/* Plan pills */}
                    <fieldset>
                      <legend className="text-sm font-medium text-[#0a0a0a] mb-3">Pick a plan</legend>
                      <div className="grid grid-cols-3 gap-2">
                        {PLANS.map((plan) => {
                          const isSelected = form.plan === plan.id;
                          return (
                            <button
                              key={plan.id}
                              type="button"
                              onClick={() => setForm((prev) => ({ ...prev, plan: plan.id }))}
                              aria-pressed={isSelected}
                              className={`relative rounded-xl border p-3 text-left transition-all ${
                                isSelected
                                  ? "border-[#0a0a0a] bg-white ring-1 ring-[#0a0a0a]"
                                  : "border-[#e5e5e0] bg-white hover:border-[#bfbfb8]"
                              }`}
                            >
                              {"badge" in plan && (
                                <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-[#0a0a0a] text-white text-[9px] font-medium px-2 py-0.5 rounded-full whitespace-nowrap">
                                  {plan.badge}
                                </span>
                              )}
                              <p className="text-xs font-medium text-[#0a0a0a]">{plan.name}</p>
                              <p className="font-display text-lg tracking-tight mt-0.5">{plan.price}</p>
                              <p className="text-[10px] text-[#757570] mt-0.5">{plan.note}</p>
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>

                    {/* Business type */}
                    <fieldset>
                      <legend className="text-sm font-medium text-[#0a0a0a] mb-3">
                        Business type
                      </legend>
                      <div className="grid grid-cols-2 gap-2">
                        {BUSINESS_TYPES.map((type) => {
                          const isSelected = form.business_type === type.value;
                          return (
                            <button
                              key={type.value}
                              type="button"
                              onClick={() =>
                                setForm((prev) => ({ ...prev, business_type: type.value }))
                              }
                              aria-pressed={isSelected}
                              className={`flex items-center gap-2 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all ${
                                isSelected
                                  ? "border-[#0a0a0a] bg-[#0a0a0a] text-white"
                                  : "border-[#e5e5e0] bg-white text-[#6b6b6b] hover:border-[#bfbfb8]"
                              }`}
                            >
                              <span aria-hidden="true">{type.emoji}</span>
                              {type.label}
                            </button>
                          );
                        })}
                      </div>
                    </fieldset>

                    <div>
                      <label htmlFor="business_name" className="block text-sm font-medium text-[#0a0a0a] mb-2">
                        Business name
                      </label>
                      <input
                        id="business_name"
                        type="text"
                        name="business_name"
                        value={form.business_name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="e.g. Spice Craft Bistro"
                      />
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-[#0a0a0a] mb-2">
                        City
                      </label>
                      <input
                        id="city"
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="e.g. Mumbai"
                      />
                    </div>

                    <button
                      type="button"
                      disabled={!canAdvanceStep1()}
                      onClick={() => setStep(2)}
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#0a0a0a] py-3.5 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-40"
                    >
                      Continue
                      <ArrowRight
                        size={15}
                        aria-hidden="true"
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </button>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    {/* Summary chip */}
                    <div className="flex items-center justify-between rounded-xl border border-[#e5e5e0] bg-[#fafaf8] px-4 py-3">
                      <div className="min-w-0">
                        <p className="text-[11px] text-[#757570] uppercase tracking-wider">Setting up</p>
                        <p className="text-sm font-medium text-[#0a0a0a] truncate">
                          {form.business_name}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs font-medium text-[#0f6e56] hover:underline shrink-0 ml-3"
                      >
                        Edit
                      </button>
                    </div>

                    <div>
                      <label htmlFor="owner_name" className="block text-sm font-medium text-[#0a0a0a] mb-2">
                        Your name
                      </label>
                      <input
                        id="owner_name"
                        type="text"
                        name="owner_name"
                        value={form.owner_name}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="whatsapp_number"
                        className="block text-sm font-medium text-[#0a0a0a] mb-2"
                      >
                        WhatsApp number
                      </label>
                      <input
                        id="whatsapp_number"
                        type="tel"
                        name="whatsapp_number"
                        value={form.whatsapp_number}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="10-digit mobile number"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#0a0a0a] mb-2">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className={inputClass}
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="details" className="block text-sm font-medium text-[#0a0a0a] mb-2">
                        Anything else?{" "}
                        <span className="font-normal text-[#9a9a92]">(optional)</span>
                      </label>
                      <textarea
                        id="details"
                        name="details"
                        value={form.details}
                        onChange={handleChange}
                        rows={2}
                        className={`${inputClass} resize-none`}
                        placeholder="Menu size, current platform, etc."
                      />
                    </div>

                    {error && (
                      <p className="text-sm text-red-600 bg-red-50 border border-red-100 p-3 rounded-xl">
                        {error}
                      </p>
                    )}

                    <div className="flex gap-3 pt-1">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="flex items-center justify-center gap-1.5 rounded-xl border border-[#e5e5e0] px-4 py-3.5 text-sm font-medium text-[#0a0a0a] hover:border-[#bfbfb8] transition-colors"
                      >
                        <ArrowLeft size={15} aria-hidden="true" />
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={loading}
                        className="flex-1 rounded-xl bg-[#0a0a0a] py-3.5 text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-50"
                      >
                        {loading ? "Submitting…" : "Start free →"}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            <p className="mt-6 text-center text-xs text-[#757570]">
              By signing up you agree to our{" "}
              <Link href="/terms" className="text-[#0f6e56] hover:underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[#0f6e56] hover:underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function SignupFallback() {
  return (
    <main className="min-h-screen bg-[#fafaf8] flex items-center justify-center">
      <div className="h-8 w-8 rounded-full border-2 border-[#e5e5e0] border-t-[#1d9e75] animate-spin" />
    </main>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<SignupFallback />}>
      <SignupContent />
    </Suspense>
  );
}
