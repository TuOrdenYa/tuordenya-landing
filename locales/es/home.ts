import type { HomeContent } from "../types";

export const homeEs: HomeContent = {
  navbar: {
    howItWorks: "Cómo funciona",
    products: "Nuestros productos",
    faq: "FAQs",
    demo: "Agenda una demo",
  },
  hero: {
    badge: "Empieza con Light, escala a Plus y Pro cuando crezcas",
    title: "Menús digitales y operación completa",
    highlight: "para restaurantes de cualquier tamaño.",
    description:
      "TuOrdenYa tiene tres niveles pensados para cada etapa de tu negocio: Light (menú + QR), Plus (pedidos y reportes básicos) y Pro (operación completa en salón y cocina). Empiezas donde estás y escalas cuando lo necesites.",
    planCtaLabel: {
      Light: "Quiero mi menú digital (Light)",
      Plus: "Quiero hablar de Plus",
      Pro: "Quiero hablar de Pro",
    },
    secondaryCta: "Ver productos Light / Plus / Pro",
    segments: [
      "☕ Cafeterías, food trucks y locales pequeños (Light)",
      "🍽️ Restaurantes con salón y mayor volumen (Plus)",
      "🏬 Cadenas y dark kitchens (Pro)",
    ],
  },
  productsSection: {
    title: "Productos pensados para ti",
    subtitle:
      "Comienza con lo básico y escala a medida que tu restaurante crece. Todos los productos incluyen hosting, dominio técnico y soporte básico.",
    products: [
      {
        id: "light",
        variant: "light",
        label: "Light",
        title: "Menú + QR + WhatsApp",
        description:
          "Ideal para cafeterías, food trucks y negocios pequeños que quieren salir del papel.",
        bullets: [
          "Menú digital responsive.",
          "Código QR por local.",
          "Botón “Ordenar por WhatsApp”.",
          "Ajuste básico a tu marca.",
        ],
        bottomNote: "👉 Punto de partida rápido y económico.",
      },
      {
        id: "plus",
        variant: "plus",
        label: "Plus",
        title: "Pedidos básicos + reportes",
        description:
          "Para restaurantes que empiezan a manejar más volumen y necesitan ver datos simples.",
        bullets: [
          "Todo lo de Light.",
          "Registro de pedidos básicos.",
          "Reportes de ventas sencillos.",
          "Mejor visibilidad de operación.",
        ],
        bottomNote: "👉 Ideal cuando ya superaste la fase “solo menú”.",
      },
      {
        id: "pro",
        variant: "pro",
        label: "Pro",
        title: "Operación completa",
        description:
          "Pensado para la operación diaria: mesas, cocina, cuentas, tiempos y reportes.",
        bullets: [
          "Todo lo de Light y Plus.",
          "Órdenes por mesa y canal.",
          "Flujo de cocina y barra.",
          "Cuentas, propinas y cierres.",
          "Reportes operativos clave.",
        ],
        recommended: true,
        ctaLabel: "Quiero cotizar Pro",
        ctaHref: "#contacto",
      },
    ],
  },
  contactSection: {
    title: "Conversemos sobre tu restaurante",
    subtitle:
      "Déjanos tus datos y te contactamos para mostrarte cómo TuOrdenYa puede ayudarte a vender más y operar mejor.",
    bullets: [
      "• Hacemos una llamada corta para entender tu operación.",
      "• Te mostramos un demo adaptado a tu tipo de negocio.",
      "• Te proponemos un plan claro (Light, Plus o Pro).",
    ],
  },
};
