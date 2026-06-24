"use client";
import { motion } from "framer-motion";
import {
  BarChart3,
  ClipboardList,
  IndianRupee,
  Package,
  TrendingUp,
  UtensilsCrossed,
} from "lucide-react";
import Link from "next/link";

const stats = [
  { label: "Today's orders", value: "24", change: "+18%", icon: ClipboardList },
  { label: "Revenue today", value: "₹8,420", change: "+12%", icon: IndianRupee },
  { label: "Menu views", value: "312", change: "+31%", icon: TrendingUp },
];

const orders = [
  { id: "#1042", customer: "Riya S.", items: "2× Tres Leches", total: "₹1,700", status: "New" },
  { id: "#1041", customer: "Amit K.", items: "Full Tiffin", total: "₹120", status: "Preparing" },
  { id: "#1040", customer: "Walk-in QR", items: "3× Chai", total: "₹90", status: "Done" },
];

export default function DashboardShowcase() {
  return (
    <section
      id="dashboard"
      aria-labelledby="dashboard-heading"
      className="border-t border-[#0a0a0a] bg-[#0a0a0a] py-16 sm:py-20 px-4 sm:px-6 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 sm:mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-3 sm:mb-4 text-xs font-medium uppercase tracking-[0.15em] text-[#9a9a92]">
              Business dashboard
            </p>
            <h2
              id="dashboard-heading"
              className="font-display text-3xl sm:text-4xl tracking-tight text-white"
            >
              Run your business, not just your menu.
            </h2>
            <p className="mt-3 sm:mt-4 max-w-xl text-sm sm:text-base text-[#9a9a92]">
              Track orders, revenue, and best-sellers from one clean dashboard — on Growth and
              Premium plans.
            </p>
          </motion.div>
          <Link
            href="/signup?plan=growth"
            className="inline-flex w-full sm:w-auto justify-center rounded-md bg-[#1d9e75] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition shrink-0"
          >
            Try dashboard free →
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-[#262626] bg-[#141414] overflow-hidden shadow-2xl"
          role="img"
          aria-label="Example Torq Orbit business dashboard showing orders, revenue, and menu management"
        >
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-[#262626] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden="true" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden="true" />
            <span className="ml-3 text-xs text-[#6b6b6b]">torqorbit.in/dashboard</span>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <div>
                <p className="text-xs text-[#6b6b6b]">Good afternoon</p>
                <p className="text-lg font-semibold text-white">Cakes and Bakes</p>
              </div>
              <div className="flex gap-2">
                <span className="rounded-md bg-[#1d9e75]/20 px-3 py-1.5 text-xs font-medium text-[#1d9e75]">
                  Growth plan
                </span>
                <span className="rounded-md border border-[#262626] px-3 py-1.5 text-xs text-[#9a9a92]">
                  Today
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
              {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="rounded-xl border border-[#262626] bg-[#0a0a0a] p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs text-[#6b6b6b]">{stat.label}</p>
                      <Icon size={14} className="text-[#1d9e75]" aria-hidden="true" />
                    </div>
                    <p className="text-xl font-semibold text-white">{stat.value}</p>
                    <p className="text-xs text-[#1d9e75] mt-1">{stat.change} vs yesterday</p>
                  </div>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {/* Orders table */}
              <div className="lg:col-span-3 rounded-xl border border-[#262626] bg-[#0a0a0a] p-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-medium text-white">Recent orders</p>
                  <ClipboardList size={14} className="text-[#6b6b6b]" aria-hidden="true" />
                </div>
                <div className="space-y-2">
                  {orders.map((order) => (
                    <div
                      key={order.id}
                      className="flex items-center justify-between gap-3 rounded-lg border border-[#262626] px-3 py-2.5"
                    >
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-white truncate">
                          {order.id} · {order.customer}
                        </p>
                        <p className="text-[11px] text-[#6b6b6b] truncate">{order.items}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-xs font-medium text-white">{order.total}</p>
                        <p
                          className={`text-[10px] mt-0.5 ${
                            order.status === "New"
                              ? "text-[#1d9e75]"
                              : order.status === "Preparing"
                                ? "text-amber-400"
                                : "text-[#6b6b6b]"
                          }`}
                        >
                          {order.status}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick actions + chart */}
              <div className="lg:col-span-2 space-y-4">
                <div className="rounded-xl border border-[#262626] bg-[#0a0a0a] p-4">
                  <p className="text-sm font-medium text-white mb-3">Quick actions</p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { label: "Manage menu", icon: UtensilsCrossed },
                      { label: "View orders", icon: Package },
                      { label: "Analytics", icon: BarChart3 },
                      { label: "Share link", icon: TrendingUp },
                    ].map(({ label, icon: Icon }) => (
                      <div
                        key={label}
                        className="flex items-center gap-2 rounded-lg border border-[#262626] px-3 py-2.5 text-[11px] text-[#9a9a92]"
                      >
                        <Icon size={12} aria-hidden="true" className="text-[#1d9e75]" />
                        {label}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-[#262626] bg-[#0a0a0a] p-4">
                  <p className="text-sm font-medium text-white mb-3">Top seller today</p>
                  <p className="text-xs text-[#6b6b6b]">Tres Leches (1 kg)</p>
                  <p className="text-lg font-semibold text-white mt-1">12 orders · ₹10,200</p>
                  <div className="mt-3 h-2 rounded-full bg-[#262626] overflow-hidden">
                    <div className="h-full w-3/4 rounded-full bg-[#1d9e75]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="mt-4 text-center text-xs text-[#6b6b6b]">
          Illustrative dashboard preview · Available on Growth &amp; Premium plans
        </p>
      </div>
    </section>
  );
}
