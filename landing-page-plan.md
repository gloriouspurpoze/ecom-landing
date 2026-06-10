```python
import os

markdown_content = """# Implementation Plan: Interactive SaaS Landing Page with Dynamic Mockup

This document outlines a structured, step-by-step implementation plan for a senior developer or Cursor/Windsurf AI agent to build a high-converting, highly interactive SaaS landing page. 

## Architectural & Tech Stack Overview
- **Framework:** Next.js 14+ (App Router) for hybrid SSR/Client-side rendering.
- **Styling:** Tailwind CSS (utility-first, high-contrast, premium dark/light adaptive mode).
- **Animations:** Framer Motion for premium fluid transitions, drag mechanics, and real-time template morphing.
- **Icons:** Lucide React.
- **State Management:** React Context or pure hooks for low-latency live preview sync.

---

## Phase 1: Project Setup & Baseline Structure

### Step 1.1: Initialize Next.js App
Set up a clean Next.js architecture with TypeScript and Tailwind CSS.

```

```text
File written successfully: generated/cursor_agent_plan.md

```bash
npx create-next-app@latest SaaS-interactive-landing --typescript --tailwind --app --src-dir --import-alias "@/*"
cd SaaS-interactive-landing
npm install framer-motion lucide-react

```

### Step 1.2: Establish Design System Configuration

Update `tailwind.config.ts` to reflect a premium theme: rich slate/charcoal backgrounds, crisp typography, and fluid transitions.

```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#0a0a0a",
          card: "#141414",
          border: "#262626",
          accent: "#ff5a1f", // Default Warm Crimson
        }
      }
    },
  },
  plugins: [],
};
export default config;

```

---

## Phase 2: State Management & Layout Framework

### Step 2.1: Create Interactive Playground Context

Create a unified state provider to handle user configurations (`@/src/context/PlaygroundContext.tsx`). This allows the selector buttons in the Hero section to broadcast live updates to the Mockup Preview block.

```typescript
"use client";
import React, { createContext, useContext, useState } from "react";

export type BusinessType = "restaurant" | "retail" | "homeservice";

interface PlaygroundState {
  businessType: BusinessType;
  brandName: string;
  primaryColor: string;
  setBusinessType: (type: BusinessType) => void;
  setBrandName: (name: string) => void;
  setPrimaryColor: (color: string) => void;
}

const PlaygroundContext = createContext<PlaygroundState | undefined>(undefined);

export const PlaygroundProvider = ({ children }: { children: React.ReactNode }) => {
  const [businessType, setBusinessType] = useState<BusinessType>("restaurant");
  const [brandName, setBrandName] = useState("");
  const [primaryColor, setPrimaryColor] = useState("#FF5A1F"); // Initial Warm Crimson

  return (
    <PlaygroundContext.Provider value={{ businessType, brandName, primaryColor, setBusinessType, setBrandName, setPrimaryColor }}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export const usePlayground = () => {
  const context = useContext(PlaygroundContext);
  if (!context) throw new Error("usePlayground must be used within a PlaygroundProvider");
  return context;
};

```

---

## Phase 3: Component Assembly & UI Development

### Step 3.1: Build the Hero Section with Step 1 Selector

File: `@/src/components/Hero.tsx`

* **Focus:** Bold, SEO-optimized semantic headers (`H1`), clarity of value proposition, and an interactive segmented selector block.
* **Conversion Trigger:** Urgent, high-contrast banner showcasing the "45 days free trial for 1st 10 Businesses" deal.

```typescript
"use client";
import { usePlayground, BusinessType } from "@/src/context/PlaygroundContext";
import { Utensils, ShoppingBag, Truck } from "lucide-react";

export default function Hero() {
  const { businessType, setBusinessType } = usePlayground();

  const types: { id: BusinessType; label: string; icon: any }[] = [
    { id: "restaurant", label: "Restaurant & Cafe", icon: Utensils },
    { id: "retail", label: "E-Commerce", icon: ShoppingBag },
    { id: "homeservice", label: "Home Services", icon: Truck },
  ];

  return (
    <section className="relative pt-24 pb-16 px-4 max-w-6xl mx-auto text-center">
      {/* Urgency Callout */}
      <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full text-xs font-medium mb-8 animate-pulse">
        ⚡ 45-Day Free Trial for the first 10 businesses • <span className="font-bold underline">7 slots left</span>
      </div>

      {/* Semantic SEO Headers */}
      <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white max-w-4xl mx-auto leading-tight">
        Take back control of your business. <br/>
        <span className="bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Zero commission. Pure growth.</span>
      </h1>
      
      <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
        Build your independent online store in seconds. Keep 100% of your profits, own your customer data, and eliminate aggregator apps.
      </p>

      {/* STEP 1: Core Selection Grid */}
      <div className="mt-12 max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Step 1: Choose your industry vertical</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {types.map((type) => {
            const Icon = type.icon;
            const isSelected = businessType === type.id;
            return (
              <button
                key={type.id}
                onClick={() => {
                  setBusinessType(type.id);
                  document.getElementById("playground")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-300 transform active:scale-98 ${
                  isSelected 
                    ? "bg-neutral-900 border-orange-500 shadow-lg shadow-orange-500/10 text-white" 
                    : "bg-neutral-900/40 border-neutral-800 text-gray-400 hover:border-neutral-700 hover:bg-neutral-900/60"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2.5 rounded-xl ${isSelected ? "bg-orange-500 text-white" : "bg-neutral-800 text-gray-400"}`}>
                    <Icon size={20} />
                  </div>
                  <span className="font-semibold text-base">{type.label}</span>
                </div>
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${isSelected ? "border-orange-500 bg-orange-500" : "border-neutral-700"}`}>
                  {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

```

### Step 3.2: Build the Core Value Proposition Matrix (SEO Friendly)

File: `@/src/components/Features.tsx`

* **Focus:** Address deep psychological pain points (20-30% food aggregator taxes, data opacity, restrictive dashboards) with static, fully semantic markup structured for indexability.

```typescript
import { ShieldCheck, Database, Sliders } from "lucide-react";

export default function Features() {
  const points = [
    {
      title: "No Hefty 20-30% App Taxes",
      description: "Stop giving away your hard-earned margins to third-party delivery grids. Keep 100% of every transactional value completely inside your platform.",
      icon: ShieldCheck,
    },
    {
      title: "Own Your Customer Data",
      description: "Uncover native transaction tracking and visual sales patterns. Extract email arrays and profiles directly, avoiding middleman firewalls.",
      icon: Database,
    },
    {
      title: "Instant Menu & Offer Control",
      description: "Modify dynamic pricing, adjust availability catalogs, or toggle seasonal multi-tier offers instantly from a modern standalone panel.",
      icon: Sliders,
    },
  ];

  return (
    <section className="py-20 border-y border-neutral-900 bg-neutral-950/40 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center tracking-tight">
          Engineered to protect your margins.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {points.map((p, i) => (
            <div key={i} className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-neutral-700/60 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6">
                <p.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

```

### Step 3.3: Build the Live Dynamic Playground Component

File: `@/src/components/Playground.tsx`

* **Focus:** Standard desktop split-screen interface displaying custom variable configurations dynamically mapped to an abstract interactive template frame.

```typescript
"use client";
import { usePlayground } from "@/src/context/PlaygroundContext";
import MockupFrame from "./MockupFrame";

export default function Playground() {
  const { brandName, setBrandName, primaryColor, setPrimaryColor } = usePlayground();

  const customColorPresets = [
    { hex: "#FF5A1F", label: "Warm Crimson" },
    { hex: "#10B981", label: "Eco Vibrant" },
    { hex: "#6366F1", label: "Midnight Premium" },
    { hex: "#F59E0B", label: "Amber Gold" },
  ];

  return (
    <section id="playground" className="py-16 px-4 max-w-6xl mx-auto scroll-mt-6">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">Step 2: Customize Your Custom App Frame</h2>
        <p className="text-gray-400 text-sm mt-2">Observe changes reflected on your custom storefront preview in real time.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-neutral-900/30 border border-neutral-900 rounded-3xl p-6 md:p-10 backdrop-blur-sm">
        {/* Left Input Configuration Settings Console */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Specify Your Brand Name</label>
            <input
              type="text"
              maxLength={22}
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="e.g., Spice Craft Bistro"
              className="w-full bg-neutral-950 border border-neutral-800 focus:border-orange-500 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 outline-none transition-colors text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">Choose Your Brand Vibe Palette</label>
            <div className="grid grid-cols-2 gap-3">
              {customColorPresets.map((color) => (
                <button
                  key={color.hex}
                  onClick={() => setPrimaryColor(color.hex)}
                  className={`flex items-center gap-3 p-3 rounded-xl border text-left transition-all ${
                    primaryColor === color.hex 
                      ? "bg-neutral-900 border-neutral-700 text-white" 
                      : "bg-neutral-950 border-neutral-900 text-gray-400 hover:border-neutral-800"
                  }`}
                >
                  <span className="w-4 h-4 rounded-full block shrink-0" style={{ backgroundColor: color.hex }} />
                  <span className="text-xs font-medium truncate">{color.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-neutral-900">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 flex items-center justify-center gap-2 transform active:scale-99">
              Claim Your 45-Day Free Trial
            </button>
            <p className="text-center text-xs text-gray-500 mt-3">Zero configuration charges. Setup updates ready in 120 seconds.</p>
          </div>
        </div>

        {/* Right Preview Interactive Canvas Rendering Screen */}
        <div className="lg:col-span-7 w-full flex justify-center">
          <MockupFrame />
        </div>
      </div>
    </section>
  );
}

```

### Step 3.4: Build the Storefront Mockup Preview Component

File: `@/src/components/MockupFrame.tsx`

* **Focus:** Render real-time content changes using structured dummy dataset configurations. Employs Framer Motion animations to transition cleanly across vertical options.

```typescript
"use client";
import { usePlayground } from "@/src/context/PlaygroundContext";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Star, Clock } from "lucide-react";

const verticalContentData = {
  restaurant: {
    heroImg: "[https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80](https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80)",
    category: "Gourmet Kitchen",
    items: [
      { name: "Smash Avocado Burger", desc: "Toasted brioche, double cheese, heirloom relish", price: "₹249" },
      { name: "Truffle Parmesan Fries", desc: "Hand-cut sea salt spuds infused with white truffle oil", price: "₹149" }
    ]
  },
  retail: {
    heroImg: "[https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80](https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80)",
    category: "Summer Collective",
    items: [
      { name: "Minimalist Linen Overshirt", desc: "100% organic structural fiber weave fit", price: "₹1,899" },
      { name: "Raw Selvedge Denim Slacks", desc: "Unwashed indigo tailoring with copper rivets", price: "₹3,499" }
    ]
  },
  grocery: {
    heroImg: "[https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80](https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80)",
    category: "Fresh Farm Produce",
    items: [
      { name: "Hydroponic Berry Assembly", desc: "Pesticide-free seasonal sweet berries", price: "₹299" },
      { name: "Organic Cold Pressed Olive Blend", desc: "First extraction culinary finishing asset", price: "₹899" }
    ]
  }
};

export default function MockupFrame() {
  const { businessType, brandName, primaryColor } = usePlayground();
  const content = verticalContentData[businessType];

  return (
    <div className="w-full max-w-[340px] aspect-[9/19] rounded-[42px] border-[10px] border-neutral-950 bg-neutral-950 shadow-2xl relative overflow-hidden flex flex-col ring-4 ring-neutral-800/40">
      {/* Phone Camera Notch Overlay */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-neutral-950 rounded-full z-30" />

      {/* Frame Screen Content Container Scroll Blocks */}
      <div className="flex-1 bg-white overflow-y-auto text-neutral-900 scrollbar-none pt-6">
        {/* Dynamic Mockup App Brand Navbar Header Component */}
        <div className="p-4 flex justify-between items-center border-b border-gray-100">
          <span className="font-black text-sm tracking-tight text-neutral-900 transition-all">
            {brandName.trim() || "Your Storefront"}
          </span>
          <ShoppingCart size={16} className="text-neutral-700" />
        </div>

        {/* Dynamic Frame Context Changes View Component */}
        <AnimatePresence mode="wait">
          <motion.div
            key={businessType}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="p-3"
          >
            {/* Visual Header Feature Card Image banner */}
            <div className="relative h-32 rounded-xl overflow-hidden mb-4 bg-gray-100">
              <img src={content.heroImg} alt="industry category display" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-2 left-3 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-md">
                  {content.category}
                </span>
              </div>
            </div>

            {/* Quick Metrics Tag Info Row */}
            <div className="flex gap-4 mb-4 px-1 text-[11px] font-medium text-gray-500">
              <div className="flex items-center gap-1"><Star size={12} className="fill-amber-400 text-amber-400" /> 4.9 (120+)</div>
              <div className="flex items-center gap-1"><Clock size={12} /> 20-30 mins</div>
            </div>

            {/* Dynamic Items Product Map Block Rows */}
            <div className="space-y-3">
              {content.items.map((item, index) => (
                <div key={index} className="p-3 border border-gray-100 rounded-xl flex justify-between items-center gap-3 hover:bg-neutral-50/50 transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-xs text-gray-900 truncate">{item.name}</p>
                    <p className="text-[10px] text-gray-400 line-clamp-1 mt-0.5">{item.desc}</p>
                    <p className="font-black text-xs mt-2 text-gray-900">{item.price}</p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    style={{ backgroundColor: primaryColor }}
                    className="text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm shrink-0 transition-colors"
                  >
                    Add
                  </motion.button>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Floating Checkout Button Mockup Widget */}
      <div className="p-3 bg-white border-t border-gray-100 z-10">
        <div style={{ backgroundColor: primaryColor }} className="w-full py-2.5 rounded-xl text-center text-white text-xs font-bold shadow-md flex items-center justify-center gap-2">
          View Basket Summary
        </div>
      </div>
    </div>
  );
}

```

### Step 3.5: Final Conversion Action Block Footer

File: `@/src/components/FooterCTA.tsx`

```typescript
export default function FooterCTA() {
  return (
    <section className="py-24 text-center px-4 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
        Ready to launch your independent store?
      </h2>
      <p className="mt-4 text-gray-400 text-base md:text-lg max-w-xl mx-auto">
        Setup takes less than 2 minutes. No hidden processing cards required. Risk-free evaluation platform access.
      </p>
      <div className="mt-8">
        <button 
          onClick={() => document.getElementById("playground")?.scrollIntoView({ behavior: "smooth" })}
          className="bg-white hover:bg-neutral-100 text-neutral-950 font-bold px-8 py-4 rounded-xl transition-all shadow-xl hover:scale-102 transform"
        >
          Start Your 45-Day Free Trial
        </button>
      </div>
    </section>
  );
}

```

---

## Phase 4: Main Entry Point Assembly

### Step 4.1: Integrate Framework Context Elements inside Global Application Page

File: `@/src/app/page.tsx`

```typescript
import { PlaygroundProvider } from "@/src/context/PlaygroundContext";
import Hero from "@/src/components/Hero";
import Playground from "@/src/components/Playground";
import Features from "@/src/components/Features";
import FooterCTA from "@/src/components/FooterCTA";

export const metadata = {
  title: "Commission-Free Independent Digital Storefront SaaS Engine",
  description: "Eliminate hefty 20-30% food aggregator taxes. Secure end-to-end customer details arrays, adjust catalogs, and operate completely custom native storefront tools.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <PlaygroundProvider>
        <Hero />
        <Playground />
        <Features />
        <FooterCTA />
      </PlaygroundProvider>
    </main>
  );
}

```

---

## Phase 5: Verification Checklist for AI Agent

Before concluding development tasks, ensure the following steps complete successfully:

1. Run `npm run build` to verify there are no compilation or layout type exceptions.
2. Verify that dynamic inputs accurately synchronize variables to the `MockupFrame` client window layout without throwing race condition loops.
3. Validate typography alignment hierarchy, ensuring elements use semantic structure tags (`h1`, `h2`, `h3`, `section`) to keep performance and SEO optimal.
"""

os.makedirs('generated', exist_ok=True)
with open('generated/cursor_agent_plan.md', 'w') as f:
f.write(markdown_content)

print("File written successfully: generated/cursor_agent_plan.md")

```
Your markdown implementation file is ready and structured specifically for an AI code agent (like Cursor or Windsurf) to execute sequentially.

[file-tag: code-generated-file-0-1780829440315986960]

### Key Structural Highlights built into this plan:
* **Step 1 Connection:** When a business category is clicked in the Hero section, it updates the state, updates the mockup, and smoothly auto-scrolls down to reveal the editing panel.
* **Granular Copy-Paste Ready Code blocks:** Components use modular patterns with custom Tailwind classes (`bg-brand-dark`, `border-neutral-800`) to match a clean, dark, high-contrast premium aesthetic.
* **Optimized State Pipeline:** State properties share values perfectly between input parameters and real-time interactive previews without creating unnecessary re-renders.
* **SEO Clean Split:** Highly detailed value matrices are cleanly decoupled as indexable static server-side markup components.

```