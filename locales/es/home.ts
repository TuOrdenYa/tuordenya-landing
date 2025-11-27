// locales/es/home.ts
import type { HomeContent } from "../types";

export const homeEs: HomeContent = {
  navbar: {
    subtitle: "Menús y órdenes para restaurantes",
    howItWorks: "Cómo funciona",
    products: "Nuestros productos",
    faq: "FAQs",
    demo: "Agenda una demo",
    light: "Light — Menú + QR",
    plus: "Plus — Pedidos y reportes",
    pro: "Pro — Operación completa",
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

  benefitsSection: {
    title: "¿Qué ganas con TuOrdenYa?",
    subtitle:
      "Pasas de un menú impreso a una experiencia digital que conecta pedidos, operación y datos en un solo lugar.",
    columns: [
      {
        items: [
          "• Los clientes ven tu carta escaneando un código QR.",
          "• Recibes pedidos por WhatsApp o directamente desde el sistema.",
          "• Actualizas precios y platos sin reimprimir menús.",
        ],
      },
      {
        items: [
          "• Reportes básicos desde Plus y operación completa en Pro.",
          "• Escalable: comienza con Light y migra a Plus/Pro cuando creces.",
          "• Base lista para integrarse con tu flujo actual (POS, cocina, etc.).",
        ],
      },
    ],
  },

  integrationsSection: {
    title: "Integraciones y ecosistema",
    subtitle:
      "TuOrdenYa está diseñado para conversar con otras herramientas que ya usas en tu restaurante. Empezamos simple y vamos creciendo contigo.",
    cards: [
      {
        title: "Canales de pedido",
        description:
          "QR, WhatsApp y órdenes desde salón. Diseñado para sumar otros canales en el futuro.",
      },
      {
        title: "Pagos y facturación",
        description:
          "Integración futura con pasarelas y/o POS. La arquitectura ya está pensada para eso.",
      },
      {
        title: "Datos y reportes",
        description:
          "Base de datos preparada para alimentar tableros e informes avanzados (Plus y Pro).",
      },
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
    form: {
      nameLabel: "Nombre completo",
      namePlaceholder: "Ej: Juan Pérez",
      restaurantLabel: "Nombre del restaurante",
      restaurantPlaceholder: "Ej: La Parrilla 24",
      whatsappLabel: "WhatsApp",
      whatsappPlaceholder: "Ej: +57 300 000 0000",
      emailLabel: "Correo electrónico",
      emailPlaceholder: "Ej: nombre@tuordenya.com",
      interestLabel: "¿Qué te interesa?",
      interestPlaceholder: "Selecciona una opción",
      interestOptions: [
        { value: "light", label: "Solo menú digital (Light)" },
        {
          value: "plus",
          label: "Menú + pedidos y reportes (Plus)",
        },
        {
          value: "pro",
          label: "Operación completa (Pro)",
        },
        {
          value: "unsure",
          label: "No estoy seguro, quiero que me asesoren",
        },
      ],
      notesLabel: "Cuéntanos un poco de tu operación",
      notesPlaceholder: "Número de mesas, sedes, si usas POS, etc.",
      submitLabel: "Enviar mensaje",
      submitLabelLoading: "Enviando...",
      privacyNotice:
        "Respetamos tu tiempo: nada de spam, solo información relevante para tu restaurante.",
    },
  },

  faqSection: {
    title: "Preguntas frecuentes",
    subtitle:
      "Si tienes dudas específicas de tu operación, cuéntanos y adaptamos la implementación a tu caso.",
    items: [
      {
        question: "¿Cuánto se demora la implementación?",
        answer:
          "Depende de la complejidad de tu carta y operación, pero normalmente tomamos días, no meses. Light puede quedar listo muy rápido; Pro requiere un poco más de coordinación.",
      },
      {
        question: "¿Necesito cambiar mi POS actual?",
        answer:
          "No necesariamente. TuOrdenYa puede convivir con tu POS actual mientras definimos el nivel de integración que tenga sentido para tu negocio.",
      },
      {
        question: "¿Puedo empezar con Light y luego subir?",
        answer:
          "Sí. Justamente la idea es que empieces con lo básico y puedas migrar a Plus o Pro cuando el volumen de tu restaurante lo justifique.",
      },
    ],
  },
};
