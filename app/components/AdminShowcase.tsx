"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Check,
  ClipboardList,
  IndianRupee,
  LayoutDashboard,
  MessageCircle,
  Package,
  QrCode,
  ShoppingCart,
  Sparkles,
  Star,
  Users,
  UtensilsCrossed,
} from "lucide-react";

import { useVerticalContent } from "@/hooks/useVerticalContent";
import type { VerticalConfig } from "@/data/verticals";

type AdminTab = "dashboard" | "orders" | "menu" | "storefront" | "customers" | "analytics";

const baseTabs: {
  id: AdminTab;
  label: string;
  icon: typeof LayoutDashboard;
  badge?: string;
}[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "orders", label: "Orders", icon: ShoppingCart, badge: "3" },
  { id: "menu", label: "Menu", icon: UtensilsCrossed },
  { id: "storefront", label: "Store & QR", icon: QrCode },
  { id: "customers", label: "Customers", icon: Users },
  { id: "analytics", label: "Analytics", icon: BarChart3, badge: "Growth" },
];

const tabPitch: Record<
  AdminTab,
  { headline: string; bullets: string[] }
> = {
  dashboard: {
    headline: "See your whole business at a glance",
    bullets: [
      "Today's revenue, orders & store views in real time",
      "Track growth vs yesterday — no spreadsheets",
      "Same dashboard restaurants, retail & services use",
    ],
  },
  orders: {
    headline: "Every order in one place — including WhatsApp",
    bullets: [
      "Structured orders land from your store link",
      "Update status · customer gets WhatsApp alerts (Growth)",
      "No more lost orders in chat threads",
    ],
  },
  menu: {
    headline: "Update your catalogue in seconds",
    bullets: [
      "Add items, photos, prices from any phone",
      "Mark sold-out instantly — no developer needed",
      "Categories for food, retail SKUs or service listings",
    ],
  },
  storefront: {
    headline: "Your link & QR — ready to share",
    bullets: [
      "Branded store at torqorbit.in/yourstore",
      "Print QR for tables, counter or packaging",
      "Copy link to Instagram, WhatsApp status & DMs",
    ],
  },
  customers: {
    headline: "Own your customer list — not the apps",
    bullets: [
      "Order history & contact details in one CRM-lite view",
      "Build repeat business without marketplace lock-in",
      "Export-ready data your business actually owns",
    ],
  },
  analytics: {
    headline: "Know what's working — Growth plan",
    bullets: [
      "Best sellers, revenue trends & order sources",
      "See how much comes from WhatsApp vs QR vs link",
      "Decisions backed by data, not guesswork",
    ],
  },
};

const customers = [
  { name: "Riya Sharma", orders: 12, last: "Today" },
  { name: "Amit Kohli", orders: 8, last: "Yesterday" },
  { name: "Priya Nair", orders: 5, last: "3 days ago" },
];

function StatusPill({ status }: { status: "New" | "Preparing" | "Done" }) {
  const styles = {
    New: "bg-[#e1f5ee] text-[#0f6e56]",
    Preparing: "bg-amber-50 text-amber-700",
    Done: "bg-stone-100 text-[#6b6b6b]",
  };
  return (
    <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${styles[status]}`}>
      {status}
    </span>
  );
}

function AdminPanelContent({
  tab,
  admin,
}: {
  tab: AdminTab;
  admin: VerticalConfig["admin"];
}) {
  if (tab === "dashboard") {
    return (
      <div className="space-y-4 p-4 sm:p-5">
        <div>
          <p className="text-xs text-[#757570]">Good afternoon</p>
          <p className="text-base font-semibold text-[#0a0a0a]">{admin.businessName}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
          {[
            { label: "Revenue today", value: "₹8,420", icon: IndianRupee },
            { label: "Orders", value: "24", icon: ClipboardList },
            { label: "Store views", value: "312", icon: BarChart3 },
            { label: "Rating", value: "4.8★", icon: Star },
          ].map(({ label, value, icon: Icon }) => (
            <div key={label} className="rounded-xl border border-[#e5e5e0] bg-[#fafaf8] p-3">
              <Icon size={13} className="text-[#1d9e75] mb-1" aria-hidden="true" />
              <p className="text-[10px] text-[#757570]">{label}</p>
              <p className="text-sm font-bold text-[#0a0a0a]">{value}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-[#e5e5e0] p-3">
          <p className="text-xs font-medium text-[#0a0a0a] mb-2">Revenue — last 7 days</p>
          <div className="flex items-end gap-1 h-16">
            {[40, 55, 45, 70, 60, 85, 75].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-[#1d9e75]/80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (tab === "orders") {
    return (
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-[#0a0a0a]">Recent orders</p>
          <span className="flex items-center gap-1 text-[10px] text-[#0f6e56]">
            <MessageCircle size={11} aria-hidden="true" />
            WhatsApp synced
          </span>
        </div>
        <div className="space-y-2">
          {admin.orders.map((o) => (
            <div
              key={o.id}
              className="flex items-center justify-between gap-2 rounded-lg border border-[#e5e5e0] px-3 py-2.5"
            >
              <div className="min-w-0">
                <p className="text-xs font-medium text-[#0a0a0a] truncate">
                  {o.id} · {o.name}
                </p>
                <p className="text-[10px] text-[#757570] truncate">{o.items}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs font-semibold">{o.total}</p>
                <StatusPill status={o.status} />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (tab === "menu") {
    return (
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm font-semibold text-[#0a0a0a]">{admin.catalogTab} items</p>
          <button
            type="button"
            className="rounded-lg bg-[#0a0a0a] px-2.5 py-1 text-[10px] font-medium text-white"
          >
            + Add item
          </button>
        </div>
        <div className="space-y-2">
          {admin.menuItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-3 rounded-lg border border-[#e5e5e0] px-3 py-2.5"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="h-9 w-9 shrink-0 rounded-lg bg-stone-100" />
                <div className="min-w-0">
                  <p className="text-xs font-medium text-[#0a0a0a] truncate">{item.name}</p>
                  <p className="text-[10px] text-[#757570]">{item.price}</p>
                </div>
              </div>
              <div
                className={`h-5 w-9 rounded-full p-0.5 transition-colors ${
                  item.on ? "bg-[#1d9e75]" : "bg-[#e5e5e0]"
                }`}
              >
                <div
                  className={`h-4 w-4 rounded-full bg-white shadow transition-transform ${
                    item.on ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (tab === "storefront") {
    return (
      <div className="p-4 sm:p-5 space-y-4">
        <div className="rounded-xl border border-[#e5e5e0] bg-[#fafaf8] p-4">
          <p className="text-[10px] font-medium uppercase tracking-wider text-[#757570] mb-1">
            Your store link
          </p>
          <p className="text-sm font-medium text-[#0f6e56]">torqorbit.in/{admin.storeSlug}</p>
          <button
            type="button"
            className="mt-2 rounded-lg border border-[#e5e5e0] bg-white px-3 py-1.5 text-[10px] font-medium"
          >
            Copy link
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <div className="h-20 w-20 shrink-0 rounded-xl border-2 border-dashed border-[#e5e5e0] bg-white flex items-center justify-center">
            <QrCode size={36} className="text-[#0a0a0a]" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-medium text-[#0a0a0a]">Table & counter QR</p>
            <p className="text-[10px] text-[#757570] mt-1 leading-relaxed">
              Download PNG · print for dine-in or packaging
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (tab === "customers") {
    return (
      <div className="p-4 sm:p-5">
        <p className="text-sm font-semibold text-[#0a0a0a] mb-3">Your customers</p>
        <div className="space-y-2">
          {customers.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-between rounded-lg border border-[#e5e5e0] px-3 py-2.5"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e1f5ee] text-xs font-semibold text-[#0f6e56]">
                  {c.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-medium text-[#0a0a0a]">{c.name}</p>
                  <p className="text-[10px] text-[#757570]">{c.orders} orders</p>
                </div>
              </div>
              <p className="text-[10px] text-[#757570]">{c.last}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-5 space-y-4">
      <p className="text-sm font-semibold text-[#0a0a0a]">Order sources — this week</p>
      {[
        { label: "WhatsApp", pct: 68, color: "bg-[#1d9e75]" },
        { label: "Direct link", pct: 22, color: "bg-[#0a0a0a]" },
        { label: "QR scan", pct: 10, color: "bg-[#bfbfb8]" },
      ].map((ch) => (
        <div key={ch.label}>
          <div className="flex justify-between text-[10px] mb-1">
            <span className="text-[#6b6b6b]">{ch.label}</span>
            <span className="font-medium text-[#0a0a0a]">{ch.pct}%</span>
          </div>
          <div className="h-2 rounded-full bg-[#e5e5e0] overflow-hidden">
            <div className={`h-full rounded-full ${ch.color}`} style={{ width: `${ch.pct}%` }} />
          </div>
        </div>
      ))}
      <div className="rounded-xl border border-[#e5e5e0] p-3 mt-2">
        <p className="text-[10px] text-[#757570]">Top seller</p>
        <p className="text-sm font-semibold text-[#0a0a0a]">{admin.topSeller}</p>
      </div>
    </div>
  );
}

export default function AdminShowcase() {
  const [active, setActive] = useState<AdminTab>("dashboard");
  const { businessType, config, signupHref } = useVerticalContent();
  const { admin } = config;
  const pitch = tabPitch[active];

  const tabs = baseTabs.map((tab) =>
    tab.id === "menu" ? { ...tab, label: admin.catalogTab } : tab
  );

  return (
    <section
      id="dashboard"
      aria-labelledby="admin-heading"
      className="relative border-t border-[#0a0a0a] bg-[#0a0a0a] overflow-hidden py-16 sm:py-24 px-4 sm:px-6 scroll-mt-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(29,158,117,0.15),transparent)]"
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          <p className="inline-flex items-center gap-1.5 rounded-full border border-[#1d9e75]/30 bg-[#1d9e75]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-[#7fe6c1] mb-4">
            <Sparkles size={12} aria-hidden="true" />
            Tenant admin panel
          </p>
          <h2
            id="admin-heading"
            className="font-display text-3xl sm:text-4xl md:text-[2.75rem] tracking-tight text-white"
          >
            Run your store from{" "}
            <span className="text-[#1d9e75]">one dashboard.</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#9a9a92]">
            {admin.sectionSubcopy}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-8 lg:gap-12 items-center">
          {/* Left — dynamic pitch */}
          <motion.div
            key={active}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="order-2 lg:order-1"
          >
            <h3 className="font-display text-xl sm:text-2xl tracking-tight text-white">
              {pitch.headline}
            </h3>
            <ul className="mt-5 space-y-3">
              {pitch.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-[#d4d4cc]">
                  <Check size={16} className="text-[#1d9e75] shrink-0 mt-0.5" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>
            <Link
              href={signupHref}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#1d9e75] px-6 py-3.5 text-sm font-medium text-white hover:opacity-90 transition"
            >
              Try the admin free
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <p className="mt-3 text-xs text-[#6b6b6b]">
              Dashboard & orders on Free · Analytics on Growth plan
            </p>
          </motion.div>

          {/* Right — interactive admin mock */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div
              className="rounded-2xl border border-[#262626] bg-[#f5f5f2] overflow-hidden shadow-2xl shadow-black/40"
              role="img"
              aria-label="Interactive preview of Torq Orbit tenant admin panel"
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-[#e5e5e0] bg-white px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
                <span className="ml-2 flex-1 rounded-md bg-[#fafaf8] border border-[#e5e5e0] px-3 py-1 text-[10px] text-[#757570] truncate">
                  admin.torqorbit.in
                </span>
              </div>

              <div className="flex min-h-[320px] sm:min-h-[360px]">
                {/* Sidebar */}
                <nav
                  aria-label="Admin navigation preview"
                  className="w-[52px] sm:w-44 shrink-0 border-r border-[#e5e5e0] bg-white py-3 flex flex-col gap-0.5"
                >
                  <p className="hidden sm:block px-3 pb-2 text-[10px] font-semibold uppercase tracking-wider text-[#9a9a92]">
                    {admin.businessName}
                  </p>
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = active === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActive(tab.id)}
                        aria-pressed={isActive}
                        className={`relative mx-1.5 sm:mx-2 flex items-center gap-2 rounded-lg px-2 sm:px-2.5 py-2 text-left transition-colors ${
                          isActive
                            ? "bg-[#e1f5ee] text-[#0f6e56]"
                            : "text-[#6b6b6b] hover:bg-[#fafaf8]"
                        }`}
                      >
                        <Icon size={16} className="shrink-0" aria-hidden="true" />
                        <span className="hidden sm:inline text-xs font-medium truncate flex-1">
                          {tab.label}
                        </span>
                        {tab.badge && (
                          <span
                            className={`hidden sm:inline text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${
                              tab.badge === "Growth"
                                ? "bg-[#0a0a0a] text-white"
                                : "bg-[#1d9e75] text-white"
                            }`}
                          >
                            {tab.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </nav>

                {/* Main panel */}
                <div className="flex-1 bg-white min-w-0 overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${businessType}-${active}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <AdminPanelContent tab={active} admin={admin} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-[11px] text-[#6b6b6b]">
              Click the sidebar to explore · Same admin tenants use daily
            </p>
          </motion.div>
        </div>

        {/* Bottom trust strip */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#262626] pt-10">
          {[
            { icon: Package, label: "Catalogue & inventory" },
            { icon: MessageCircle, label: "WhatsApp order flow" },
            { icon: QrCode, label: "QR & store link" },
            { icon: BarChart3, label: "Revenue analytics" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-[#1d9e75]">
                <Icon size={18} aria-hidden="true" />
              </span>
              <p className="text-xs text-[#9a9a92]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
