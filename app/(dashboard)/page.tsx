"use client";

import { useEffect, useState } from "react";
import api from "@/lib/api";

interface Business {
  name: string;
  slug: string;
  plan: string;
  trial_ends_at: string | null;
}

export default function DashboardPage() {
  const [business, setBusiness] = useState<Business | null>(null);

  useEffect(() => {
    api.get("/api/tenants/business/").then((res) => setBusiness(res.data));
  }, []);

  const menuUrl = business ? `https://menu.menufast.in/${business.slug}` : "";

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-900 mb-6">
        {business ? `Welcome, ${business.name}` : "Dashboard"}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <p className="text-sm text-slate-500 mb-1">Plan</p>
          <p className="text-2xl font-bold text-slate-900 capitalize">
            {business?.plan?.replace("_", " ") ?? "—"}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <p className="text-sm text-slate-500 mb-1">Your Menu URL</p>
          {business ? (
            <a
              href={menuUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-blue-600 hover:underline break-all"
            >
              menu.menufast.in/{business.slug}
            </a>
          ) : (
            <p className="text-slate-400">—</p>
          )}
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <p className="text-sm text-slate-500 mb-1">Trial Ends</p>
          <p className="text-lg font-semibold text-slate-900">
            {business?.trial_ends_at
              ? new Date(business.trial_ends_at).toLocaleDateString("en-IN")
              : "—"}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="font-semibold text-slate-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a
            href="/dashboard/menu"
            className="block bg-slate-900 text-white text-center px-4 py-3 rounded-lg text-sm font-medium hover:bg-slate-700 transition"
          >
            Manage Menu
          </a>
          <a
            href="/dashboard/orders"
            className="block bg-slate-100 text-slate-900 text-center px-4 py-3 rounded-lg text-sm font-medium hover:bg-slate-200 transition"
          >
            View Orders
          </a>
          {business && (
            <a
              href={menuUrl}
              target="_blank"
              rel="noreferrer"
              className="block border border-slate-300 text-slate-700 text-center px-4 py-3 rounded-lg text-sm font-medium hover:border-slate-500 transition"
            >
              View Public Menu ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
