"use client";
import { usePlayground } from "@/app/context/PlaygroundContext";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star, Clock, Plus, Search, Home, Heart } from "lucide-react";

const verticalData = {
  restaurant: {
    heroImg:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80",
    category: "Gourmet Kitchen",
    badge: "🔥 Trending",
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
  grocery: {
    heroImg:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80",
    category: "Fresh Farm Produce",
    badge: "🌿 Organic",
    items: [
      {
        name: "Berry Mix",
        desc: "Pesticide-free seasonal berries",
        price: "₹299",
        img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=200&q=80",
      },
      {
        name: "Olive Blend Oil",
        desc: "First extraction, cold pressed",
        price: "₹899",
        img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=200&q=80",
      },
      {
        name: "Herb Bundle",
        desc: "Rosemary, thyme, basil",
        price: "₹149",
        img: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&w=200&q=80",
      },
    ],
  },
};

export default function MockupFrame() {
  const { businessType, brandName, primaryColor } = usePlayground();
  const content = verticalData[businessType];
  const displayName = brandName.trim() || "Your Storefront";

  return (
    <div className="relative flex justify-center">
      {/* Dynamic glow that matches brand color */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-[50px] blur-3xl opacity-20 scale-90 pointer-events-none"
        style={{ backgroundColor: primaryColor }}
      />

      {/* Phone frame — fluid width capped at 300px */}
      <div
        className="relative w-full max-w-[260px] sm:max-w-[300px] rounded-[40px] sm:rounded-[44px] border-[7px] sm:border-[8px] border-[#d1d1ca] bg-[#e5e5e0] shadow-2xl overflow-hidden"
        style={{ aspectRatio: "9/19.5" }}
        role="img"
        aria-label={`Live preview of ${displayName} storefront`}
      >
        {/* Dynamic island / notch */}
        <div
          aria-hidden="true"
          className="absolute top-2 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-4 sm:h-5 bg-[#e5e5e0] rounded-full z-30 flex items-center justify-center"
        >
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#bfbfb8]" />
        </div>

        {/* Screen */}
        <div className="flex-1 bg-white overflow-y-auto h-full scrollbar-none flex flex-col pt-6">
          {/* Header */}
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

          {/* Search bar */}
          <div className="px-3 py-1.5 shrink-0">
            <div className="flex items-center gap-1.5 bg-gray-100 rounded-xl px-2 py-1.5">
              <Search size={9} className="text-gray-400 shrink-0" />
              <span className="text-[8px] sm:text-[9px] text-gray-400">Search items...</span>
            </div>
          </div>

          {/* Animated content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={businessType}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.28 }}
              className="flex-1 overflow-y-auto px-2.5 sm:px-3 pb-3 scrollbar-none"
            >
              {/* Hero image */}
              <div className="relative h-24 sm:h-28 rounded-xl overflow-hidden mb-2.5 sm:mb-3 bg-gray-100">
                <img
                  src={content.heroImg}
                  alt={content.category}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-1.5 left-2 right-2 flex items-end justify-between">
                  <span className="text-white text-[8px] sm:text-[9px] font-black">{content.category}</span>
                  <span
                    className="text-white text-[7px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-md backdrop-blur-sm"
                    style={{ backgroundColor: `${primaryColor}cc` }}
                  >
                    {content.badge}
                  </span>
                </div>
              </div>

              {/* Rating row */}
              <div className="flex items-center gap-3 mb-2.5 sm:mb-3 text-[8px] sm:text-[9px] text-gray-500">
                <span className="flex items-center gap-1">
                  <Star size={8} className="fill-amber-400 text-amber-400" />
                  4.9 (120+)
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={8} />
                  20–30 min
                </span>
              </div>

              {/* Items */}
              <div className="space-y-1.5 sm:space-y-2">
                {content.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 p-1.5 sm:p-2 rounded-xl border border-gray-100 bg-white"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover shrink-0 bg-gray-100"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-[9px] sm:text-[10px] text-gray-900 truncate">{item.name}</p>
                      <p className="text-[7px] sm:text-[8px] text-gray-400 truncate">{item.desc}</p>
                      <p className="font-black text-[9px] sm:text-[10px] text-gray-900 mt-0.5">{item.price}</p>
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

          {/* Bottom checkout bar */}
          <div className="px-2.5 sm:px-3 py-2 bg-white border-t border-gray-100 shrink-0">
            <motion.div
              style={{ backgroundColor: primaryColor }}
              className="w-full py-2 sm:py-2.5 rounded-xl text-center text-white text-[9px] sm:text-[10px] font-black shadow-md"
              animate={{ backgroundColor: primaryColor }}
              transition={{ duration: 0.3 }}
            >
              View Cart · ₹398
            </motion.div>
          </div>

          {/* Bottom nav */}
          <div className="flex items-center justify-around py-1.5 sm:py-2 border-t border-gray-100 bg-white shrink-0">
            {[
              { icon: Home, label: "Home", active: true },
              { icon: Search, label: "Search", active: false },
              { icon: Heart, label: "Saved", active: false },
            ].map(({ icon: Icon, label, active }) => (
              <div key={label} className="flex flex-col items-center gap-0.5">
                <Icon
                  size={11}
                  className={active ? "" : "text-gray-400"}
                  style={active ? { color: primaryColor } : {}}
                />
                <span
                  className={`text-[6px] sm:text-[7px] ${active ? "font-bold" : "text-gray-400"}`}
                  style={active ? { color: primaryColor } : {}}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
