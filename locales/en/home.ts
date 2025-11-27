// locales/en/home.ts
import type { HomeContent } from "../types";

export const homeEn: HomeContent = {
  navbar: {
    subtitle: "Menus and orders for restaurants",
    howItWorks: "How it works",
    products: "Our products",
    faq: "FAQs",
    demo: "Book a demo",
    light: "Light — Menu + QR",
    plus: "Plus — Orders & reports",
    pro: "Pro — Full operations",
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

  benefitsSection: {
    title: "What you get with TuOrdenYa",
    subtitle:
      "You move from a printed menu to a digital experience that connects orders, operations and data in one place.",
    columns: [
      {
        items: [
          "• Guests see your menu by scanning a QR code.",
          "• You receive orders via WhatsApp or directly from the system.",
          "• Update prices and dishes without printing new menus.",
        ],
      },
      {
        items: [
          "• Basic reports in Plus and full operations in Pro.",
          "• Scalable: start with Light and upgrade to Plus/Pro as you grow.",
          "• Ready to integrate with your current flow (POS, kitchen, etc.).",
        ],
      },
    ],
  },

  integrationsSection: {
    title: "Integrations and ecosystem",
    subtitle:
      "TuOrdenYa is designed to connect with other tools you already use in your restaurant. We start simple and grow with you.",
    cards: [
      {
        title: "Order channels",
        description:
          "QR, WhatsApp and dining room orders. Designed to add more channels in the future.",
      },
      {
        title: "Payments and billing",
        description:
          "Future integration with payment gateways and/or POS systems. The architecture is already prepared for that.",
      },
      {
        title: "Data and reports",
        description:
          "Database ready to feed dashboards and advanced reports (Plus and Pro).",
      },
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
    form: {
      nameLabel: "Full name",
      namePlaceholder: "e.g. John Doe",
      restaurantLabel: "Restaurant name",
      restaurantPlaceholder: "e.g. La Parrilla 24",
      whatsappLabel: "WhatsApp",
      whatsappPlaceholder: "e.g. +57 300 000 0000",
      emailLabel: "Email",
      emailPlaceholder: "e.g. name@tuordenya.com",
      interestLabel: "What are you interested in?",
      interestPlaceholder: "Select an option",
      interestOptions: [
        { value: "light", label: "Digital menu only (Light)" },
        {
          value: "plus",
          label: "Menu + orders and reports (Plus)",
        },
        {
          value: "pro",
          label: "Full operation (Pro)",
        },
        {
          value: "unsure",
          label: "Not sure, I’d like advice",
        },
      ],
      notesLabel: "Tell us a bit about your operation",
      notesPlaceholder: "Number of tables, locations, if you use a POS, etc.",
      submitLabel: "Send message",
      submitLabelLoading: "Sending...",
      privacyNotice:
        "We respect your time: no spam, only relevant information for your restaurant.",
    },
  },

  faqSection: {
    title: "Frequently asked questions",
    subtitle:
      "If you have specific questions about your operation, tell us and we’ll adapt the implementation to your case.",
    items: [
      {
        question: "How long does implementation take?",
        answer:
          "It depends on the complexity of your menu and operations, but we usually talk about days, not months. Light can be ready very quickly; Pro requires a bit more coordination.",
      },
      {
        question: "Do I need to replace my current POS?",
        answer:
          "Not necessarily. TuOrdenYa can live alongside your current POS while we define the level of integration that makes sense for your business.",
      },
      {
        question: "Can I start with Light and upgrade later?",
        answer:
          "Yes. The whole idea is that you start with the basics and upgrade to Plus or Pro when your restaurant’s volume justifies it.",
      },
    ],
  },

  howItWorksSection: {
    title: "How TuOrdenYa works",
    subtitle:
      "Three levels designed for different stages of your restaurant. Start simple and scale when you need it.",
    steps: [
      {
        label: "1",
        title: "Light — Menu + QR + WhatsApp",
        description:
          "We digitize your menu, generate a QR per location and connect orders via WhatsApp. Perfect for coffee shops and smaller venues.",
      },
      {
        label: "2",
        title: "Plus — Basic orders + reports",
        description:
          "When volume grows, you activate order tracking and simple reports to understand what sells, at what times, and how your operation is doing.",
      },
      {
        label: "3",
        title: "Pro — Full operations",
        description:
          "For restaurants with dining rooms, kitchen and higher rotation. Manage orders by table and channel, prep times, bills, tips and daily closing.",
      },
    ],
  },

  proDetailsSection: {
    title: "Pro in detail: full front-of-house and kitchen operations",
    subtitle:
      "When your restaurant handles more tables, more locations or more channels, Pro helps you keep daily operations under control.",
    cards: [
      {
        title: "Tables, dining room and channels",
        badge: "Front-of-house",
        description:
          "Organize your tables, dining areas and service types (dine-in, delivery, takeout) in one place.",
        bullets: [
          "Assign orders by table or ticket number.",
          "Overview of table occupation and rotation.",
          "Support for multiple sales channels in parallel.",
        ],
      },
      {
        title: "Kitchen and bar connected",
        badge: "Production",
        description:
          "What the waiter records is sent to kitchen and bar with the right information and in the right order.",
        bullets: [
          "Tickets split by area (kitchen, bar, desserts).",
          "Clearer preparation times for the team.",
          "Fewer back-and-forth trips between dining room and kitchen.",
        ],
      },
      {
        title: "Bills, closing and reports",
        badge: "Control",
        description:
          "More organized closing at the end of the shift and better visibility of the day-to-day.",
        bullets: [
          "Bills per table, split checks and tips.",
          "Closing by shift, cash drawer or responsible person.",
          "Basic operational reports ready to review.",
        ],
      },
    ],
    note: "Pro is designed to grow with you: we start with basic operations and can later enable more advanced integrations (POS, payments, etc.).",
  },
};
