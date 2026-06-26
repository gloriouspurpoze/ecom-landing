"use client";
import { BadgePercent, MessageCircle, Link2, QrCode, Smartphone } from "lucide-react";

const items = [
  { icon: BadgePercent, label: "₹0 commission" },
  { icon: MessageCircle, label: "WhatsApp orders" },
  { icon: Link2, label: "Your own link" },
  { icon: QrCode, label: "QR code" },
  { icon: Smartphone, label: "No app needed" },
];

export default function TrustStrip() {
  return (
    <section aria-label="Key benefits" className="border-y border-[#e5e5e0] bg-white py-4 sm:py-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-10">
          {items.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2 text-xs sm:text-sm text-[#5a5a55]">
              <Icon size={15} aria-hidden="true" className="text-[#1d9e75] shrink-0" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
