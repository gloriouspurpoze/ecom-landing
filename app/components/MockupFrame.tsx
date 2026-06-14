"use client";
import Image from "next/image";
import { usePlayground, type BusinessType } from "@/app/context/PlaygroundContext";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star, Clock, Plus, Search, Lock } from "lucide-react";

export type ViewportVariant = "mobile" | "desktop";

function toSlug(name: string): string {
  const cleaned = name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return cleaned || "yourstore";
}

type VerticalContent = {
  heroImg: string;
  category: string;
  badge: string;
  searchPlaceholder: string;
  meta: { icon: "star" | "clock"; text: string }[];
  cartLabel: string;
  cartTotal: string;
  items: { name: string; desc: string; price: string; img: string }[];
};

const verticalData: Record<BusinessType, VerticalContent> = {
  restaurant: {
    heroImg:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    category: "Gourmet Kitchen",
    badge: "🔥 Trending",
    searchPlaceholder: "Search dishes...",
    meta: [
      { icon: "star", text: "4.9 (120+)" },
      { icon: "clock", text: "20–30 min" },
    ],
    cartLabel: "View Cart",
    cartTotal: "₹398",
    items: [
      {
        name: "Smash Burger",
        desc: "Brioche, double cheese, heirloom relish",
        price: "₹249",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=200&q=80",
      },
      {
        name: "Truffle Fries",
        desc: "Sea salt, white truffle oil",
        price: "₹149",
        img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=200&q=80",
      },
      {
        name: "Mango Lassi",
        desc: "Fresh alphonso, cardamom",
        price: "₹99",
        img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=200&q=80",
      },
    ],
  },
  retail: {
    heroImg:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80",
    category: "Summer Collection",
    badge: "✨ New Arrivals",
    searchPlaceholder: "Search products...",
    meta: [
      { icon: "star", text: "4.8 (80+)" },
      { icon: "clock", text: "Ships in 2–3 days" },
    ],
    cartLabel: "View Cart",
    cartTotal: "₹5,898",
    items: [
      {
        name: "Linen Overshirt",
        desc: "Organic structural weave fit",
        price: "₹1,899",
        img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=200&q=80",
      },
      {
        name: "Selvedge Denim",
        desc: "Unwashed indigo, copper rivets",
        price: "₹3,499",
        img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=200&q=80",
      },
      {
        name: "Canvas Tote",
        desc: "Heavy-duty, inner pockets",
        price: "₹599",
        img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=200&q=80",
      },
    ],
  },
  homeservice: {
    heroImg:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=600&q=80",
    category: "Home Services",
    badge: "✓ Verified pros",
    searchPlaceholder: "Search services...",
    meta: [
      { icon: "star", text: "4.9 verified" },
      { icon: "clock", text: "Same-day slots" },
    ],
    cartLabel: "Book now",
    cartTotal: "₹1,198",
    items: [
      {
        name: "Plumber visit",
        desc: "Leak repair, tap fitting & more",
        price: "₹299",
        img: "https://images.unsplash.com/photo-1676210133055-eab6ef033ce3?w=200&auto=format&fit=crop&q=60",
      },
      {
        name: "Electrician",
        desc: "Wiring, switches & installations",
        price: "₹499",
        img: "https://images.unsplash.com/photo-1660330589693-99889d60181e?w=200&auto=format&fit=crop&q=80",
      },
      {
        name: "AC service",
        desc: "Deep clean & gas refill",
        price: "₹899",
        img: "https://images.unsplash.com/photo-1631545806609-0f44ca0e4e8b?w=200&auto=format&fit=crop&q=80",
      },
    ],
  },
};

function StoreMeta({
  meta,
  size = "sm",
}: {
  meta: VerticalContent["meta"];
  size?: "sm" | "md";
}) {
  const iconSize = size === "md" ? 10 : 8;
  const textClass = size === "md" ? "text-[10px]" : "text-[8px] sm:text-[9px]";

  return (
    <div className={`flex items-center gap-3 mb-2.5 sm:mb-3 text-gray-500 ${textClass}`}>
      {meta.map((m) => (
        <span key={m.text} className="flex items-center gap-1">
          {m.icon === "star" ? (
            <Star size={iconSize} className="fill-amber-400 text-amber-400" />
          ) : (
            <Clock size={iconSize} />
          )}
          {m.text}
        </span>
      ))}
    </div>
  );
}

function CartBar({
  content,
  primaryColor,
  compact = false,
}: {
  content: VerticalContent;
  primaryColor: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`bg-white border-t border-gray-100 shrink-0 ${
        compact ? "px-2.5 sm:px-3 py-2" : "px-4 py-3"
      }`}
    >
      <motion.div
        style={{ backgroundColor: primaryColor }}
        className={`w-full rounded-xl text-center text-white font-black shadow-md ${
          compact ? "py-2 sm:py-2.5 text-[9px] sm:text-[10px]" : "py-2.5 text-[11px]"
        }`}
        animate={{ backgroundColor: primaryColor }}
        transition={{ duration: 0.3 }}
      >
        {content.cartLabel} · {content.cartTotal}
      </motion.div>
      <p
        className={`mt-1.5 text-center text-gray-400 ${
          compact ? "text-[7px] sm:text-[8px]" : "text-[9px]"
        }`}
      >
        Order sent to WhatsApp · no app to install
      </p>
    </div>
  );
}

export default function MockupFrame({ variant = "mobile" }: { variant?: ViewportVariant }) {
  const { businessType, brandName, primaryColor } = usePlayground();
  const content = verticalData[businessType];
  const displayName = brandName.trim() || "Your Storefront";
  const storeUrl = `menufast.in/${toSlug(brandName)}`;

  const glowRadius = variant === "desktop" ? "rounded-2xl" : "rounded-[50px]";

  return (
    <div className="relative flex justify-center">
      <div
        aria-hidden="true"
        className={`absolute inset-0 blur-3xl opacity-20 scale-90 pointer-events-none ${glowRadius}`}
        style={{ backgroundColor: primaryColor }}
      />

      {variant === "desktop" ? (
        <div
          className="relative w-full max-w-[500px] sm:max-w-[580px] lg:max-w-[640px] rounded-xl border border-[#d1d1ca] bg-[#e5e5e0] shadow-2xl overflow-hidden"
          style={{ aspectRatio: "16/10" }}
          role="img"
          aria-label={`Live preview of the ${displayName} web store, open in a desktop browser`}
        >
          <div className="flex h-full flex-col bg-white overflow-hidden">
            <div className="shrink-0 flex items-center gap-2 border-b border-gray-200 bg-[#f1f1ee] px-3 py-2">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" aria-hidden="true" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" aria-hidden="true" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" aria-hidden="true" />
              <div className="ml-2 flex flex-1 items-center gap-1.5 rounded-md bg-white px-2.5 py-1 shadow-sm">
                <Lock size={9} className="text-gray-400 shrink-0" aria-hidden="true" />
                <span className="text-[10px] text-gray-500 truncate">{storeUrl}</span>
              </div>
            </div>

            <div className="px-4 py-2.5 flex items-center justify-between border-b border-gray-100 shrink-0">
              <span className="font-black text-sm text-gray-900 truncate max-w-[180px]">
                {displayName}
              </span>
              <div className="relative">
                <ShoppingCart size={16} className="text-gray-700" />
                <span
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full text-white text-[8px] font-bold flex items-center justify-center"
                  style={{ backgroundColor: primaryColor }}
                >
                  2
                </span>
              </div>
            </div>

            <div className="px-4 py-2 shrink-0">
              <div className="flex items-center gap-2 bg-gray-100 rounded-xl px-3 py-2 max-w-xs">
                <Search size={12} className="text-gray-400 shrink-0" />
                <span className="text-[11px] text-gray-400">{content.searchPlaceholder}</span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={businessType}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.28 }}
                className="flex-1 overflow-y-auto px-4 pb-3 scrollbar-none"
              >
                <div className="relative h-28 sm:h-32 rounded-xl overflow-hidden mb-3 bg-gray-100">
                  <Image
                    src={content.heroImg}
                    alt={content.category}
                    fill
                    sizes="520px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between">
                    <span className="text-white text-sm font-black">{content.category}</span>
                    <span
                      className="text-white text-[10px] font-bold px-2 py-0.5 rounded-md backdrop-blur-sm"
                      style={{ backgroundColor: `${primaryColor}cc` }}
                    >
                      {content.badge}
                    </span>
                  </div>
                </div>

                <StoreMeta meta={content.meta} size="md" />

                <div className="grid grid-cols-3 gap-2">
                  {content.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex flex-col rounded-xl border border-gray-100 bg-white overflow-hidden"
                    >
                      <div className="relative h-16 sm:h-[72px] bg-gray-100">
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          sizes="160px"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-2 flex flex-col flex-1">
                        <p className="font-bold text-[10px] text-gray-900 truncate">{item.name}</p>
                        <p className="text-[8px] text-gray-400 truncate mt-0.5">{item.desc}</p>
                        <div className="mt-auto pt-1.5 flex items-center justify-between gap-1">
                          <p className="font-black text-[10px] text-gray-900">{item.price}</p>
                          <motion.button
                            whileTap={{ scale: 0.88 }}
                            style={{ backgroundColor: primaryColor }}
                            aria-label={`Add ${item.name}`}
                            className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 shadow-sm"
                          >
                            <Plus size={10} className="text-white" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <CartBar content={content} primaryColor={primaryColor} />
          </div>
        </div>
      ) : (
        <div
          className="relative w-full max-w-[260px] sm:max-w-[300px] rounded-[40px] sm:rounded-[44px] border-[7px] sm:border-[8px] border-[#d1d1ca] bg-[#e5e5e0] shadow-2xl overflow-hidden"
          style={{ aspectRatio: "9/19.5" }}
          role="img"
          aria-label={`Live preview of the ${displayName} web store, open in a mobile browser`}
        >
          <div className="flex-1 bg-white overflow-y-auto h-full scrollbar-none flex flex-col">
            <div className="shrink-0 bg-[#f1f1ee] px-2.5 pt-2 pb-1.5 border-b border-gray-200">
              <div className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 shadow-sm">
                <Lock size={8} className="text-gray-400 shrink-0" aria-hidden="true" />
                <span className="text-[8px] sm:text-[9px] text-gray-500 truncate">{storeUrl}</span>
              </div>
            </div>

            <div className="px-3 py-2 flex items-center justify-between border-b border-gray-100 shrink-0">
              <span className="font-black text-[10px] sm:text-[11px] text-gray-900 truncate max-w-[100px] sm:max-w-[120px]">
                {displayName}
              </span>
              <div className="relative">
                <ShoppingCart size={13} className="text-gray-700" />
                <span
                  className="absolute -top-1.5 -right-1.5 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full text-white text-[6px] sm:text-[7px] font-bold flex items-center justify-center"
                  style={{ backgroundColor: primaryColor }}
                >
                  2
                </span>
              </div>
            </div>

            <div className="px-3 py-1.5 shrink-0">
              <div className="flex items-center gap-1.5 bg-gray-100 rounded-xl px-2 py-1.5">
                <Search size={9} className="text-gray-400 shrink-0" />
                <span className="text-[8px] sm:text-[9px] text-gray-400">
                  {content.searchPlaceholder}
                </span>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={businessType}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.28 }}
                className="flex-1 overflow-y-auto px-2.5 sm:px-3 pb-3 scrollbar-none"
              >
                <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden mb-2.5 sm:mb-3 bg-gray-100">
                  <Image
                    src={content.heroImg}
                    alt={content.category}
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-1.5 left-2 right-2 flex items-end justify-between">
                    <span className="text-white text-[8px] sm:text-[9px] font-black">
                      {content.category}
                    </span>
                    <span
                      className="text-white text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-md backdrop-blur-sm"
                      style={{ backgroundColor: `${primaryColor}cc` }}
                    >
                      {content.badge}
                    </span>
                  </div>
                </div>

                <StoreMeta meta={content.meta} />

                <div className="space-y-1.5 sm:space-y-2">
                  {content.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-2 p-1.5 sm:p-2 rounded-xl border border-gray-100 bg-white"
                    >
                      <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                        <Image
                          src={item.img}
                          alt={item.name}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[9px] sm:text-[10px] text-gray-900 truncate">
                          {item.name}
                        </p>
                        <p className="text-[7px] sm:text-[8px] text-gray-400 truncate">{item.desc}</p>
                        <p className="font-black text-[9px] sm:text-[10px] text-gray-900 mt-0.5">
                          {item.price}
                        </p>
                      </div>
                      <motion.button
                        whileTap={{ scale: 0.88 }}
                        style={{ backgroundColor: primaryColor }}
                        aria-label={`Add ${item.name}`}
                        className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center shrink-0 shadow-sm"
                      >
                        <Plus size={9} className="text-white" />
                      </motion.button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            <CartBar content={content} primaryColor={primaryColor} compact />
          </div>
        </div>
      )}
    </div>
  );
}
