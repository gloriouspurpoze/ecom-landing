/**
 * Single source of truth for marketing content that is rendered on the page
 * AND emitted as structured data (JSON-LD). Keeping them in one place
 * guarantees visible content always matches the schema — a hard requirement
 * for valid FAQ / Review rich results.
 */

export const SITE = {
  name: "Torq Orbit",
  /** Marketing / landing site (subdomain) */
  url: "https://orbit.torqstudio.com",
  /** Customer storefront links use this domain */
  storeDomain: "torqorbit.in",
  tagline: "Zero-commission online ordering for Indian local businesses",
} as const;

export const CONTACT = {
  email: "connect@torqstudio.com",
  whatsapp: "917977148243",
  whatsappDisplay: "+91 79771 48243",
  address: "Mumbai, Maharashtra, India",
  supportHours: "Mon–Sat, 10am–7pm IST",
} as const;

export type Step = {
  step: string;
  title: string;
  description: string;
  tag: string;
};

export const STEPS: Step[] = [
  {
    step: "01",
    title: "Build your menu in minutes",
    description:
      "Add dishes, upload photos, set prices, and toggle daily availability. No website, no developer, no technical setup.",
    tag: "Under 10 minutes",
  },
  {
    step: "02",
    title: "Share your link everywhere",
    description:
      "Get a clean menu page at torqorbit.in/yourkitchen plus a QR code. Drop it in your Instagram bio, WhatsApp status, or print it for your counter.",
    tag: "Works on any phone",
  },
  {
    step: "03",
    title: "Orders land on your WhatsApp",
    description:
      "Customers send a structured order — items, quantities, and notes — straight to your WhatsApp. You confirm and cook. Zero commission, ever.",
    tag: "No app to install",
  },
  {
    step: "04",
    title: "Grow with your own customers",
    description:
      "Every order builds your own customer list so you can drive repeat orders, share offers, and stop renting your audience from delivery apps.",
    tag: "You own the data",
  },
];

export type UseCase = {
  title: string;
  vertical: string;
  quote: string;
  href?: string;
  cta?: string;
};

/** Scenario stories — not fabricated individual reviews. Live demos link to real example menus. */
export const USE_CASES: UseCase[] = [
  {
    title: "Cakes and Bakes",
    vertical: "Home bakery · Mumbai",
    quote:
      "A clean menu page customers can browse and order from — instead of screenshot price lists in Instagram DMs.",
    href: "/cakes-and-bakes",
    cta: "View live menu",
  },
  {
    title: "Priya's Tiffin",
    vertical: "Tiffin service · Mumbai",
    quote:
      "Daily lunch items with sold-out toggles and a WhatsApp order button — perfect for subscription-style food businesses.",
    href: "/priyas-tiffin",
    cta: "View live menu",
  },
  {
    title: "Cloud kitchen",
    vertical: "Restaurant & delivery",
    quote:
      "Stop losing 20–30% per order to delivery apps. Send regulars to your own branded link and keep the full margin.",
  },
  {
    title: "Boutique store",
    vertical: "E-commerce & retail",
    quote:
      "Showcase products with photos and prices, share one link on WhatsApp, and take orders without building a full website.",
  },
  {
    title: "Home services",
    vertical: "Plumbers, electricians & more",
    quote:
      "List your services with clear pricing, let customers book via WhatsApp, and manage enquiries from one place.",
  },
  {
    title: "Cafe or tapri",
    vertical: "Quick-service food",
    quote:
      "QR codes on every table so customers scan, order, and pay — without waiting for staff or paying platform commission.",
  },
];

export type Faq = {
  question: string;
  answer: string;
};

/** Top 4 conversion FAQs shown on the homepage — must match visible FAQ section for JSON-LD. */
export const HOMEPAGE_FAQS: Faq[] = [
  {
    question: "Does Torq Orbit charge any commission on orders?",
    answer:
      "No. Torq Orbit charges zero commission on every order — you keep 100% of what your customers pay. The only optional cost is a 2% payment-gateway fee, and that applies only if you use the built-in online payments on the Growth plan.",
  },
  {
    question: "How long does it take to set up my store?",
    answer:
      "Your store can go live in under 30 minutes. Add your items, photos and prices, pick your brand name and colour, and start receiving orders on WhatsApp the same day.",
  },
  {
    question: "Do I need a website or any technical skills?",
    answer:
      "Not at all. If you can fill in a simple form, you can run a Torq Orbit store. Hosting, your store link, and the QR code are all set up for you automatically.",
  },
  {
    question: "Is there really a free plan?",
    answer:
      "Yes. The Free plan is free forever with unlimited items, WhatsApp order alerts, a QR code, and full catalogue management. Paid plans add online payments, dashboards and branding, with a 28-day free trial — no credit card required.",
  },
];

export const FAQS: Faq[] = [
  {
    question: "Does Torq Orbit charge any commission on orders?",
    answer:
      "No. Torq Orbit charges zero commission on every order — you keep 100% of what your customers pay. The only optional cost is a 2% payment-gateway fee, and that applies only if you use the built-in online payments on the Growth plan.",
  },
  {
    question: "How long does it take to set up my food menu?",
    answer:
      "Your store can go live in under 30 minutes. Add your dishes, photos and prices, pick your brand name and colour, and you can start receiving orders on WhatsApp the same day. No website or developer needed.",
  },
  {
    question: "Do I need a website or any technical skills?",
    answer:
      "Not at all. If you can fill in a simple form, you can run a Torq Orbit store. Hosting, your menu link, and the QR code are all set up for you automatically.",
  },
  {
    question: "How does WhatsApp ordering work?",
    answer:
      "Customers browse your menu, add items, and tap to order. A structured message with the items, quantities and notes is sent straight to your WhatsApp number, so you can confirm and prepare it right away.",
  },
  {
    question: "What types of food businesses can use Torq Orbit?",
    answer:
      "Torq Orbit is built for Indian restaurants, cafes, home kitchens, tiffin and dabba services, cloud kitchens, home bakers, and dessert and health-food brands of any size.",
  },
  {
    question: "Can I update my menu and prices every day?",
    answer:
      "Yes. You can change prices, add or remove dishes, run flash deals, and mark items available or sold-out in real time from any phone — as often as you like.",
  },
  {
    question: "Is there really a free plan?",
    answer:
      "Yes. The Free plan is free forever with unlimited menu items, WhatsApp order alerts, a QR code, and full menu management. Paid plans add online payments, dashboards and branding, and start with a 28-day free trial — no credit card required.",
  },
  {
    question: "Can I accept online payments from customers?",
    answer:
      "Yes. On the Growth plan you can collect online payments through the built-in gateway (2% gateway fee), with money settled directly to you and order status updates sent to your customers on WhatsApp.",
  },
];
