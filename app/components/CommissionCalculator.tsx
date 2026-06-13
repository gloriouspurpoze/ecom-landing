"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

function formatINR(n: number): string {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

export default function CommissionCalculator() {
  const [monthlyOrders, setMonthlyOrders] = useState(400);
  const [avgOrderValue, setAvgOrderValue] = useState(450);
  const [commission, setCommission] = useState(25);

  const monthlyRevenue = monthlyOrders * avgOrderValue;
  const monthlyLoss = (monthlyRevenue * commission) / 100;
  const yearlyLoss = monthlyLoss * 12;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      {/* Inputs */}
      <div className="rounded-2xl border border-[#e5e5e0] bg-white p-6 sm:p-8 space-y-7">
        <Field
          label="Orders per month"
          value={monthlyOrders}
          display={monthlyOrders.toLocaleString("en-IN")}
          min={10}
          max={3000}
          step={10}
          onChange={setMonthlyOrders}
        />
        <Field
          label="Average order value"
          value={avgOrderValue}
          display={formatINR(avgOrderValue)}
          min={50}
          max={3000}
          step={10}
          onChange={setAvgOrderValue}
        />
        <Field
          label="Delivery-app commission"
          value={commission}
          display={`${commission}%`}
          min={5}
          max={40}
          step={1}
          onChange={setCommission}
        />

        <div className="flex items-center justify-between border-t border-[#e5e5e0] pt-5 text-sm">
          <span className="text-[#6b6b6b]">Monthly order value</span>
          <span className="font-semibold text-[#0a0a0a]">{formatINR(monthlyRevenue)}</span>
        </div>
      </div>

      {/* Result */}
      <div className="relative overflow-hidden rounded-2xl bg-[#0a0a0a] p-6 sm:p-8 text-white flex flex-col justify-between">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-red-500/20 blur-3xl"
        />
        <div className="relative">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-[#9a9a92]">
            You hand over to delivery apps
          </p>
          <motion.p
            key={yearlyLoss}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="font-display text-4xl sm:text-5xl text-red-400 mt-3"
            aria-live="polite"
          >
            {formatINR(yearlyLoss)}
          </motion.p>
          <p className="mt-1 text-sm text-[#9a9a92]">every year in commission</p>

          <div className="mt-5 inline-flex items-baseline gap-2 rounded-lg bg-white/5 px-3 py-2">
            <span className="text-sm text-[#9a9a92]">That&apos;s</span>
            <span className="font-semibold text-white">{formatINR(monthlyLoss)}</span>
            <span className="text-sm text-[#9a9a92]">/ month</span>
          </div>
        </div>

        <div className="relative mt-8 rounded-xl bg-[#1d9e75]/15 border border-[#1d9e75]/30 p-4">
          <p className="text-sm text-[#7fe6c1]">
            With MenuFast, your commission is{" "}
            <span className="font-bold text-white">₹0</span>. Move even half your regulars direct
            and keep{" "}
            <span className="font-bold text-white">{formatINR(yearlyLoss / 2)}</span>/year.
          </p>
          <Link
            href="/signup"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#1d9e75] px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Start free — keep 100%
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm font-medium text-[#0a0a0a]">{label}</label>
        <span className="text-sm font-semibold text-[#0f6e56]">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label}
        className="w-full accent-[#1d9e75] cursor-pointer"
      />
    </div>
  );
}
