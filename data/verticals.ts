import type { Faq } from "@/data/landing";

export type VerticalId = "restaurant" | "retail" | "homeservice";

export type LiveStorePreview = {
  name: string;
  vertical: string;
  href: string;
  emoji: string;
};

export type AdminMenuItem = {
  name: string;
  price: string;
  on: boolean;
};

export type AdminOrder = {
  id: string;
  name: string;
  items: string;
  total: string;
  status: "New" | "Preparing" | "Done";
};

export interface VerticalConfig {
  id: VerticalId;
  label: string;
  emoji: string;
  ownerLabel: string;
  competitorLabel: string;
  catalogLabel: string;
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    subcopy: string;
    steps: [string, string, string];
    brandPlaceholder: string;
    defaultBrand: string;
    orderNotification: { label: string; amount: string };
    secondaryCta: string;
    painLine: string;
  };
  trustStrip: string[];
  proof: {
    heading: string;
    subheading: string;
    commissionLabel: string;
    lossLabel: string;
    compareAppsName: string;
    calculator: {
      monthlyOrders: number;
      avgOrderValue: number;
      commission: number;
    };
    liveStores: LiveStorePreview[];
  };
  admin: {
    businessName: string;
    catalogTab: string;
    storeSlug: string;
    menuItems: AdminMenuItem[];
    orders: AdminOrder[];
    topSeller: string;
    sectionSubcopy: string;
  };
  testimonials: {
    heading: string;
    subheading: string;
    featuredTitles: string[];
    scenarioTitles: string[];
  };
  faqs: Faq[];
  footer: {
    headline: string;
    subcopy: string;
  };
  pricingHint: string;
}

const sharedFaqs: Pick<Faq, "question" | "answer">[] = [
  {
    question: "Does Torq Orbit charge any commission on orders?",
    answer:
      "No. Torq Orbit charges zero commission on every order — you keep 100% of what your customers pay. The only optional cost is a 2% payment-gateway fee on the Growth plan if you use built-in online payments.",
  },
  {
    question: "Do I need a website or any technical skills?",
    answer:
      "Not at all. If you can fill in a simple form, you can run a Torq Orbit store. Hosting, your store link, and the QR code are set up for you automatically.",
  },
];

export const VERTICALS: Record<VerticalId, VerticalConfig> = {
  restaurant: {
    id: "restaurant",
    label: "Restaurant",
    emoji: "🍽️",
    ownerLabel: "restaurant owners",
    competitorLabel: "delivery apps",
    catalogLabel: "menu",
    hero: {
      badge: "Zero commission · Keep 100%",
      headline: "Your kitchen.",
      headlineAccent: "Zero commission.",
      subcopy: "Branded menu + WhatsApp orders. Stop losing 20–30% to Swiggy & Zomato.",
      steps: ["Build menu", "Share link", "Get orders"],
      brandPlaceholder: "e.g. Spice Craft Bistro",
      defaultBrand: "Spice Craft Bistro",
      orderNotification: { label: "New order on WhatsApp", amount: "+ ₹420" },
      secondaryCta: "See the math",
      painLine: "Stop losing 20–30% to delivery apps.",
    },
    trustStrip: [
      "₹0 commission",
      "WhatsApp orders",
      "QR on every table",
      "Daily menu updates",
      "No app needed",
    ],
    proof: {
      heading: "See why restaurants switch.",
      subheading: "Drag the sliders to match your monthly orders — see what delivery apps cost you.",
      commissionLabel: "Delivery-app commission",
      lossLabel: "You hand over to delivery apps",
      compareAppsName: "Delivery apps",
      calculator: { monthlyOrders: 400, avgOrderValue: 450, commission: 25 },
      liveStores: [
        { name: "Cakes & Bakes", vertical: "Home bakery", href: "/cakes-and-bakes", emoji: "🎂" },
        { name: "Priya's Tiffin", vertical: "Tiffin service", href: "/priyas-tiffin", emoji: "🥗" },
      ],
    },
    admin: {
      businessName: "Spice Craft Bistro",
      catalogTab: "Menu",
      storeSlug: "spice-craft-bistro",
      menuItems: [
        { name: "Smash Burger", price: "₹249", on: true },
        { name: "Truffle Fries", price: "₹149", on: true },
        { name: "Mango Lassi", price: "₹99", on: false },
      ],
      orders: [
        { id: "#1042", name: "Riya S.", items: "2× Tres Leches", total: "₹1,700", status: "New" },
        { id: "#1041", name: "Amit K.", items: "Full Tiffin", total: "₹420", status: "Preparing" },
        { id: "#1040", name: "Table QR", items: "3× Chai", total: "₹90", status: "Done" },
      ],
      topSeller: "Smash Burger · 18 orders",
      sectionSubcopy:
        "The same admin your restaurant tenants use — menu, orders, QR & analytics. No app install.",
    },
    testimonials: {
      heading: "Restaurants like yours, already live.",
      subheading: "Real demo menus from Mumbai kitchens — no fabricated reviews.",
      featuredTitles: ["Cakes and Bakes", "Priya's Tiffin"],
      scenarioTitles: ["Cloud kitchen", "Cafe or tapri"],
    },
    faqs: [
      sharedFaqs[0],
      {
        question: "How long does it take to set up my food menu?",
        answer:
          "Under 30 minutes. Add dishes, photos and prices, pick your brand colours, and start receiving WhatsApp orders the same day — no website or developer.",
      },
      sharedFaqs[1],
      {
        question: "Can I mark items sold-out during the day?",
        answer:
          "Yes. Toggle any dish available or sold-out in real time from your phone — perfect for daily specials, tiffin menus, and end-of-day stock.",
      },
    ],
    footer: {
      headline: "Own your orders. Not the apps.",
      subcopy: "Set up your restaurant menu in 2 minutes. Free forever plan available.",
    },
    pricingHint: "Less than what delivery apps take on 3 orders.",
  },

  retail: {
    id: "retail",
    label: "Retail",
    emoji: "🛍️",
    ownerLabel: "retail shop owners",
    competitorLabel: "marketplaces",
    catalogLabel: "catalogue",
    hero: {
      badge: "Your shop online · ₹0 commission",
      headline: "Your catalogue.",
      headlineAccent: "Your margins.",
      subcopy: "Sell on WhatsApp & your own link — without Amazon or Instagram DM chaos.",
      steps: ["Add products", "Share link", "Take orders"],
      brandPlaceholder: "e.g. Urban Threads",
      defaultBrand: "Urban Threads",
      orderNotification: { label: "New order on WhatsApp", amount: "+ ₹1,899" },
      secondaryCta: "Calculate marketplace fees",
      painLine: "Stop losing margin to marketplace commissions.",
    },
    trustStrip: [
      "₹0 commission",
      "WhatsApp orders",
      "Product catalogue",
      "Share one link",
      "Works on any phone",
    ],
    proof: {
      heading: "See why retail shops switch.",
      subheading: "Model what marketplaces take vs keeping sales on your own store.",
      commissionLabel: "Marketplace commission",
      lossLabel: "You hand over to marketplaces",
      compareAppsName: "Marketplaces",
      calculator: { monthlyOrders: 120, avgOrderValue: 1200, commission: 18 },
      liveStores: [
        { name: "Cakes & Bakes", vertical: "Home bakery · retail", href: "/cakes-and-bakes", emoji: "🎂" },
      ],
    },
    admin: {
      businessName: "Urban Threads",
      catalogTab: "Products",
      storeSlug: "urban-threads",
      menuItems: [
        { name: "Linen Overshirt", price: "₹1,899", on: true },
        { name: "Canvas Tote", price: "₹599", on: true },
        { name: "Summer Dress", price: "₹2,499", on: false },
      ],
      orders: [
        { id: "#2041", name: "Neha P.", items: "Linen Overshirt ×1", total: "₹1,899", status: "New" },
        { id: "#2040", name: "Rahul M.", items: "Tote + Dress", total: "₹3,098", status: "Preparing" },
        { id: "#2039", name: "Instagram", items: "Canvas Tote ×2", total: "₹1,198", status: "Done" },
      ],
      topSeller: "Linen Overshirt · 9 orders",
      sectionSubcopy:
        "Manage products, inventory toggles, orders & customer list — built for retail without a full e-commerce team.",
    },
    testimonials: {
      heading: "Retail businesses like yours.",
      subheading: "Product catalogues on WhatsApp — no full website build required.",
      featuredTitles: ["Cakes and Bakes"],
      scenarioTitles: ["Boutique store"],
    },
    faqs: [
      sharedFaqs[0],
      {
        question: "Can I sell physical products, not just food?",
        answer:
          "Yes. Torq Orbit supports retail shops, boutiques, home brands, and lifestyle sellers — list products with photos, variants, and prices; share one link on WhatsApp.",
      },
      sharedFaqs[1],
      {
        question: "How do customers order from my catalogue?",
        answer:
          "They browse your store link, add items to cart, and tap to order. A structured WhatsApp message with products and quantities lands on your phone — no back-and-forth DMs.",
      },
    ],
    footer: {
      headline: "Your shop. Your link. Your customers.",
      subcopy: "Launch your product catalogue in 2 minutes. No marketplace lock-in.",
    },
    pricingHint: "Cheaper than one month of marketplace referral fees.",
  },

  homeservice: {
    id: "homeservice",
    label: "Home Services",
    emoji: "🏠",
    ownerLabel: "service professionals",
    competitorLabel: "aggregator platforms",
    catalogLabel: "services",
    hero: {
      badge: "Get booked on WhatsApp · ₹0 lead fee",
      headline: "Your services.",
      headlineAccent: "Your bookings.",
      subcopy: "List services with clear pricing. Customers enquire & book on WhatsApp — you keep the job.",
      steps: ["List services", "Share link", "Get bookings"],
      brandPlaceholder: "e.g. QuickFix Plumbing",
      defaultBrand: "QuickFix Plumbing",
      orderNotification: { label: "New booking on WhatsApp", amount: "AC service" },
      secondaryCta: "See platform fees",
      painLine: "Stop paying 15–30% to aggregator platforms.",
    },
    trustStrip: [
      "₹0 commission",
      "WhatsApp bookings",
      "Service price list",
      "Your own link",
      "No app for customers",
    ],
    proof: {
      heading: "See why service pros switch.",
      subheading: "Calculate what aggregator platforms cost you in lead fees each year.",
      commissionLabel: "Platform lead fee",
      lossLabel: "You hand over to aggregators",
      compareAppsName: "Aggregator apps",
      calculator: { monthlyOrders: 80, avgOrderValue: 800, commission: 20 },
      liveStores: [],
    },
    admin: {
      businessName: "QuickFix Plumbing",
      catalogTab: "Services",
      storeSlug: "quickfix-plumbing",
      menuItems: [
        { name: "AC Service (split)", price: "₹599", on: true },
        { name: "Tap repair", price: "₹349", on: true },
        { name: "Full wiring check", price: "₹999", on: true },
      ],
      orders: [
        { id: "#3042", name: "Anil S.", items: "AC service · Andheri", total: "₹599", status: "New" },
        { id: "#3041", name: "Priya K.", items: "Tap repair", total: "₹349", status: "Preparing" },
        { id: "#3040", name: "Society WA", items: "Wiring check", total: "₹999", status: "Done" },
      ],
      topSeller: "AC Service · 14 bookings",
      sectionSubcopy:
        "Service listings, booking requests & customer history — run your local service business from one panel.",
    },
    testimonials: {
      heading: "Service businesses like yours.",
      subheading: "Clear pricing, WhatsApp bookings, zero aggregator lock-in.",
      featuredTitles: [],
      scenarioTitles: ["Home services"],
    },
    faqs: [
      sharedFaqs[0],
      {
        question: "Can I list plumbing, electrical, or cleaning services?",
        answer:
          "Yes. Add each service with description and price, share your link on WhatsApp or Google Business, and receive structured booking requests — ideal for plumbers, electricians, cleaners, and tutors.",
      },
      sharedFaqs[1],
      {
        question: "Do customers need to install an app?",
        answer:
          "No. Customers open your link in the browser, pick a service, and send a WhatsApp message. You confirm the slot and price — simple for local Indian customers.",
      },
    ],
    footer: {
      headline: "Own your bookings. Not the platform.",
      subcopy: "List your services in 2 minutes. Free forever plan available.",
    },
    pricingHint: "One saved lead fee pays for months of Torq Orbit.",
  },
};

export const VERTICAL_LIST = Object.values(VERTICALS);

export function getVerticalConfig(id: VerticalId): VerticalConfig {
  return VERTICALS[id];
}

export function parseVerticalParam(value: string | null): VerticalId | null {
  if (value === "restaurant" || value === "retail" || value === "homeservice") {
    return value;
  }
  return null;
}
