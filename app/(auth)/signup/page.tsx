"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import axios from "axios";

const PLAN_LABELS: Record<string, string> = {
  free: "Free — ₹0 / forever",
  growth: "Growth — ₹549 / month",
  premium: "Premium — ₹999 / month",
};

const BUSINESS_TYPE_OPTIONS = [
  { value: "", label: "Select your business type" },
  { value: "Restaurant, Cafe or Cloud Kitchen", label: "🍽️  Restaurant, Cafe or Cloud Kitchen" },
  { value: "E-Commerce", label: "🛍️  E-Commerce (Home Items, Fashion & Lifestyle)" },
  { value: "Home Services", label: "🏠  Home Services (Plumber, Electrician, etc.)" },
  { value: "Other", label: "✏️  Other" },
];

const BUSINESS_TYPE_URL_MAP: Record<string, string> = {
  restaurant: "Restaurant, Cafe or Cloud Kitchen",
  retail: "E-Commerce",
  homeservice: "Home Services",
};

function SignupContent() {
  const searchParams = useSearchParams();
  const planParam = searchParams.get("plan") ?? "";
  const businessTypeParam = BUSINESS_TYPE_URL_MAP[searchParams.get("businessType") ?? ""] ?? "";

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
    plan: planParam,
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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

      await axios.post(`${process.env.NEXT_PUBLIC_ENQUIRY_BASE}/api/public/storefront/enquiry`, {
        name: form.owner_name,
        email: form.email,
        phone: form.whatsapp_number,
        service: "MenuFast — Digital Menu",
        message: messageParts,
      });
      setSubmitted(true);
    } catch {
      setError("Couldn't send your enquiry. Please try WhatsApp or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  const textFields: {
    name: keyof typeof form;
    label: string;
    type?: string;
    placeholder: string;
    required?: boolean;
  }[] = [
    { name: "business_name", label: "Kitchen / Business Name", placeholder: "Ria Bakes" },
    { name: "owner_name", label: "Your Name", placeholder: "Ria Arora" },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    {
      name: "whatsapp_number",
      label: "WhatsApp Number",
      type: "tel",
      placeholder: "919876543210",
    },
    { name: "city", label: "City", placeholder: "Mumbai", required: false },
  ];

  if (submitted) {
    const planLabel = PLAN_LABELS[form.plan] ?? form.plan;
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-10 w-full max-w-md shadow-sm text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">We got your enquiry!</h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-6">
            Thanks, <strong className="text-slate-800">{form.owner_name}</strong>! Our team will
            reach out to <strong className="text-slate-800">{form.email}</strong> within 24 hours to
            schedule a quick walkthrough call and get your menu live.
          </p>
          <div className="bg-slate-50 rounded-xl p-4 text-left text-sm space-y-1.5 mb-6 border border-slate-100">
            <div className="flex justify-between">
              <span className="text-slate-400">Business</span>
              <span className="font-medium text-slate-800">{form.business_name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">WhatsApp</span>
              <span className="font-medium text-slate-800">+{form.whatsapp_number}</span>
            </div>
            {form.business_type && (
              <div className="flex justify-between">
                <span className="text-slate-400">Business Type</span>
                <span className="font-medium text-slate-800">{form.business_type}</span>
              </div>
            )}
            {planLabel && (
              <div className="flex justify-between">
                <span className="text-slate-400">Plan</span>
                <span className="font-medium text-slate-800">{planLabel}</span>
              </div>
            )}
          </div>
          <p className="text-xs text-slate-400">
            Need to reach us sooner?{" "}
            <a
              href={`https://wa.me/917977148243?text=Hi, I just submitted an enquiry for ${encodeURIComponent(form.business_name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-medium hover:underline"
            >
              Message us on WhatsApp
            </a>
          </p>
          <Link
            href="/"
            className="mt-6 inline-block w-full text-center bg-slate-100 text-slate-700 py-2.5 rounded-lg font-semibold text-sm hover:bg-slate-200 transition"
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4">
      <div className="bg-white rounded-2xl border border-slate-200 p-8 w-full max-w-lg shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Create your menu</h1>
        <p className="text-slate-500 mb-6 text-sm">
          Fill in your details and we&apos;ll book a free walkthrough call with you.
        </p>

        {/* Plan badge */}
        {form.plan && PLAN_LABELS[form.plan] && (
          <div className="flex items-center justify-between bg-[#e1f5ee] border border-[#1d9e75]/30 rounded-xl px-4 py-3 mb-6">
            <div>
              <p className="text-[11px] font-medium uppercase tracking-wider text-[#0f6e56] mb-0.5">
                Selected Plan
              </p>
              <p className="text-sm font-semibold text-[#0a0a0a]">{PLAN_LABELS[form.plan]}</p>
            </div>
            <Link
              href="/#pricing"
              className="text-xs text-[#0f6e56] hover:underline font-medium shrink-0 ml-4"
            >
              Change
            </Link>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Text / email / tel inputs */}
          {textFields.map(({ name, label, type = "text", placeholder, required = true }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                required={required}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder={placeholder}
              />
            </div>
          ))}

          {/* Business type select */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Business Type</label>
            <select
              name="business_type"
              value={form.business_type}
              onChange={handleChange}
              required
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
            >
              {BUSINESS_TYPE_OPTIONS.map(({ value, label }) => (
                <option key={value} value={value} disabled={value === ""}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Plan selector (shown only when plan not pre-selected via URL) */}
          {!PLAN_LABELS[form.plan] && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Plan</label>
              <select
                name="plan"
                value={form.plan}
                onChange={handleChange}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
              >
                <option value="">Not sure yet</option>
                {Object.entries(PLAN_LABELS).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Additional details */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Additional Details{" "}
              <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              name="details"
              value={form.details}
              onChange={handleChange}
              className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
              placeholder="Anything else you'd like us to know"
            />
          </div>

          {error && <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-slate-700 transition disabled:opacity-50 mt-2"
          >
            {loading ? "Sending your enquiry…" : "Book My Walkthrough Call"}
          </button>
        </form>

        <p className="text-center text-sm text-slate-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-slate-900 font-semibold hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </main>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-50" />}>
      <SignupContent />
    </Suspense>
  );
}
