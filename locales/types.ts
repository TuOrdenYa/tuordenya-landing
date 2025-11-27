// locales/types.ts

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

export type NavbarContent = {
  subtitle: string;
  howItWorks: string;
  products: string;
  faq: string;
  demo: string;
  light: string;
  plus: string;
  pro: string;
};

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

export type BenefitsSectionColumn = {
  items: string[];
};

export type BenefitsSectionContent = {
  title: string;
  subtitle: string;
  columns: BenefitsSectionColumn[];
};

export type IntegrationsCardContent = {
  title: string;
  description: string;
};

export type IntegrationsSectionContent = {
  title: string;
  subtitle: string;
  cards: IntegrationsCardContent[];
};

export type ProductsSectionContent = {
  title: string;
  subtitle: string;
  products: ProductContent[];
};

export type ContactSectionFormInterestOption = {
  value: string; // "light" | "plus" | "pro" | "unsure"
  label: string;
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
  interestOptions: ContactSectionFormInterestOption[];
  notesLabel: string;
  notesPlaceholder: string;
  submitLabel: string;
  submitLabelLoading?: string;
  privacyNotice: string;
};

export type ContactSectionContent = {
  title: string;
  subtitle: string;
  bullets: string[];
  form: ContactSectionFormContent;
};

export type FAQItemContent = {
  question: string;
  answer: string;
};

export type FAQSectionContent = {
  title: string;
  subtitle: string;
  items: FAQItemContent[];
};

export type HowItWorksStepContent = {
  label: string; // "1", "2", "3"
  title: string;
  description: string;
};

export type HowItWorksSectionContent = {
  title: string;
  subtitle: string;
  steps: HowItWorksStepContent[];
};

export type ProDetailsCardContent = {
  title: string;
  badge?: string;
  description: string;
  bullets: string[];
};

export type ProDetailsSectionContent = {
  title: string;
  subtitle: string;
  cards: ProDetailsCardContent[];
  note?: string;
};

export type HomeContent = {
  navbar: NavbarContent;
  hero: HeroContent;
  benefitsSection: BenefitsSectionContent;
  integrationsSection: IntegrationsSectionContent;
  productsSection: ProductsSectionContent;
  contactSection: ContactSectionContent;
  faqSection: FAQSectionContent;
  howItWorksSection: HowItWorksSectionContent;
  proDetailsSection: ProDetailsSectionContent;
};
