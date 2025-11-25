import type { HomeContent } from "../types";

export const homeEn: HomeContent = {
  navbar: {
    subtitle: "Menus and ordering for restaurants",
    howItWorks: "How it works",
    products: "Our products",
    faq: "FAQs",
    demo: "Book a demo",
    light: "Light — Digital menu + QR",
    plus: "Plus — Orders and reports",
    pro: "Pro — Full operation",
  },
  hero: {
    badge: "Start with Light, grow into Plus and Pro",
    title: "Digital menus and full operations",
    highlight: "for restaurants of any size.",
    description:
      "TuOrdenYa has three levels for every stage of your business: Light (menu + QR), Plus (orders and basic reports) and Pro (full dining room and kitchen operations). Start where you are and upgrade when you need it.",
    planCtaLabel: {
      Light: "I want my digital menu (Light)",
      Plus: "I want to talk about Plus",
      Pro: "I want to talk about Pro",
    },
    secondaryCta: "See Light / Plus / Pro products",
    segments: [
      "☕ Coffee shops, food trucks and small venues (Light)",
      "🍽️ Dine-in restaurants with more volume (Plus)",
      "🏬 Chains and dark kitchens (Pro)",
    ],
  },
  productsSection: {
    title: "Products designed for you",
    subtitle:
      "Start with the basics and scale as your restaurant grows. All products include hosting, technical domain and basic support.",
    products: [
      {
        id: "light",
        variant: "light",
        label: "Light",
        title: "Menu + QR + WhatsApp",
        description:
          "Perfect for coffee shops, food trucks and small businesses that want to move away from paper menus.",
        bullets: [
          "Responsive digital menu.",
          "QR code per location.",
          "“Order via WhatsApp” button.",
          "Basic branding to match your style.",
        ],
        bottomNote: "👉 Fast and affordable starting point.",
      },
      {
        id: "plus",
        variant: "plus",
        label: "Plus",
        title: "Basic orders + reports",
        description:
          "For restaurants with higher volume that need simple sales insights.",
        bullets: [
          "Everything in Light.",
          "Basic order tracking.",
          "Simple sales reports.",
          "Better visibility over operations.",
        ],
        bottomNote: "👉 Ideal once you move past “menu only”.",
      },
      {
        id: "pro",
        variant: "pro",
        label: "Pro",
        title: "Full operations",
        description:
          "Built for day-to-day operations: tables, kitchen, bills, timing and reports.",
        bullets: [
          "Everything in Light and Plus.",
          "Orders by table and channel.",
          "Kitchen and bar workflow.",
          "Bills, tips and closing.",
          "Key operational reports.",
        ],
        recommended: true,
        ctaLabel: "Get a Pro quote",
        ctaHref: "#contacto",
      },
    ],
  },
  contactSection: {
    title: "Let’s talk about your restaurant",
    subtitle:
      "Leave your details and we’ll show you how TuOrdenYa can help you sell more and operate better.",
    bullets: [
      "• Short call to understand your operation.",
      "• Demo adapted to your type of business.",
      "• Clear recommendation: Light, Plus or Pro.",
    ],
  },
};
