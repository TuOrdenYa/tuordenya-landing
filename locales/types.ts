export type Locale = "es" | "en";

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

export type HomeContent = {
  navbar: {
    subtitle: string;
    howItWorks: string;
    products: string;
    faq: string;
    demo: string;
    light: string;
    plus: string;
    pro: string;
  };
  hero: {
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
  productsSection: {
    title: string;
    subtitle: string;
    products: ProductContent[];
  };
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
    value: string;   // p.ej. "light", "plus", "pro"
    label: string;   // texto visible en el <option>
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

export type HomeContent = {
  navbar: NavbarContent;
  hero: HeroContent;
  productsSection: ProductsSectionContent;
  contactSection: ContactSectionContent;
};
};
