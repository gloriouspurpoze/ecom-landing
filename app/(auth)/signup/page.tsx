"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    business_name: "",
    slug: "",
    owner_name: "",
    phone: "",
    whatsapp_number: "",
    email: "",
    password: "",
    city: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "business_name" && !prev.slug) {
        updated.slug = value.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      }
      return updated;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/tenants/register/`,
        form
      );
      localStorage.setItem("access_token", res.data.access);
      localStorage.setItem("refresh_token", res.data.refresh);
      router.push("/dashboard");
    } catch (err: unknown) {
      if (axios.isAxiosError(err) && err.response?.data) {
        const data = err.response.data;
        const first = Object.values(data)[0];
        setError(Array.isArray(first) ? (first as string[])[0] : String(first));
      } else {
        setError("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  }

  const fields: { name: keyof typeof form; label: string; type?: string; placeholder: string }[] = [
    { name: "business_name", label: "Kitchen / Business Name", placeholder: "Zainab's Bakes" },
    { name: "slug", label: "Menu URL Slug", placeholder: "zainabs-bakes" },
    { name: "owner_name", label: "Your Name", placeholder: "Zainab Khan" },
    { name: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    { name: "phone", label: "Phone", type: "tel", placeholder: "+91 98765 43210" },
    { name: "whatsapp_number", label: "WhatsApp Number (orders go here)", type: "tel", placeholder: "919876543210" },
    { name: "city", label: "City", placeholder: "Mumbai" },
    { name: "password", label: "Password", type: "password", placeholder: "Min 8 characters" },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 py-12">
      <div className="bg-white rounded-2xl border border-slate-200 p-8 w-full max-w-lg shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Create your menu</h1>
        <p className="text-slate-500 mb-8 text-sm">Free 14-day trial. No credit card needed.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {fields.map(({ name, label, type = "text", placeholder }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-slate-700 mb-1">{label}</label>
              {name === "slug" && (
                <p className="text-xs text-slate-400 mb-1">
                  menu.menufast.in/<strong>{form.slug || "your-slug"}</strong>
                </p>
              )}
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                required={name !== "city"}
                className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                placeholder={placeholder}
              />
            </div>
          ))}

          {error && <p className="text-sm text-red-600 bg-red-50 p-3 rounded-lg">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-slate-900 text-white py-2.5 rounded-lg font-semibold text-sm hover:bg-slate-700 transition disabled:opacity-50 mt-2"
          >
            {loading ? "Creating your menu…" : "Create My Menu"}
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
