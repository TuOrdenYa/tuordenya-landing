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
    howItWorks: string;
    products: string;
    faq: string;
    demo: string;
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
  contactSection: {
    title: string;
    subtitle: string;
    bullets: string[];
  };
};
