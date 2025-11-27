// locales/types.ts

// Idiomas soportados
export type Locale = "es" | "en";

// Variantes de producto
export type ProductVariant = "light" | "plus" | "pro";

export type ProductContent = {
  id: string;
  variant: ProductVariant;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  bottomNote?: string;
  recommended?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
};

// ──────────────────────────────
// Navbar
// ──────────────────────────────
export type NavbarContent = {
  subtitle: string;
  howItWorks: string;
  products: string;
  faq: string;
  demo: string;
  light: string; // texto opción Light del menú
  plus: string;  // texto opción Plus del menú
  pro: string;   // texto opción Pro del menú
};

// ──────────────────────────────
// Hero
// ──────────────────────────────
export type HeroContent = {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  planCtaLabel: {
    Light: string;
    Plus: string;
    Pro: string;
  };
  secondaryCta: string;
  segments: string[];
};

// ──────────────────────────────
// Productos (tarjetas Light / Plus / Pro)
// ──────────────────────────────
export type ProductsSectionContent = {
  title: string;
  subtitle: string;
  products: ProductContent[];
};

// ──────────────────────────────
// Contacto
// ──────────────────────────────
export type ContactSectionFormContent = {
  nameLabel: string;
  namePlaceholder: string;
  restaurantLabel: string;
  restaurantPlaceholder: string;
  whatsappLabel: string;
  whatsappPlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  interestLabel: string;
  interestPlaceholder: string;
  interestOptions: {
    value: string; // ej: "light", "plus", "pro"
    label: string; // texto visible en el <option>
  }[];
  notesLabel: string;
  notesPlaceholder: string;
  submitLabel: string;
};

export type ContactSectionContent = {
  title: string;
  subtitle: string;
  bullets: string[];
  form: ContactSectionFormContent;
};

// ──────────────────────────────
// Contenido completo del Home
// ──────────────────────────────
export type HomeContent = {
  navbar: NavbarContent;
  hero: HeroContent;
  productsSection: ProductsSectionContent;
  contactSection: ContactSectionContent;
};
