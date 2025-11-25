"use client";

import MarketingLayout from "../components/layout/MarketingLayout";

import HeroSection from "../components/landing/HeroSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import ProDetailsSection from "../components/landing/ProDetailsSection";
import IntegrationsSection from "../components/landing/IntegrationsSection";
import ProductsSection from "../components/landing/ProductsSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import FAQSection from "../components/landing/FAQSection";
import ContactSection from "../components/landing/ContactSection";

export default function LandingPage() {
  return (
    <MarketingLayout>
      {/* HERO */}
      <HeroSection />

      {/* BENEFICIOS */}
      <BenefitsSection />

      {/* CÓMO FUNCIONA */}
      <HowItWorksSection />

      {/* PRO DETALLADO */}
      <ProDetailsSection />

      {/* INTEGRACIONES */}
      <IntegrationsSection />

      {/* PRODUCTOS */}
      <ProductsSection />

      {/* TESTIMONIOS */}
      <TestimonialsSection />

      {/* FAQ */}
      <FAQSection />

      {/* CONTACTO */}
      <ContactSection />
    </MarketingLayout>
  );
}
