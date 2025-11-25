"use client";

import { motion } from "framer-motion";

import MarketingLayout from "../components/layout/MarketingLayout";
import LeadForm from "../components/LeadForm";

import { fadeUp, staggerContainer } from "../components/landing/animations";
import HeroSection from "../components/landing/HeroSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import ProDetailsSection from "../components/landing/ProDetailsSection";
import IntegrationsSection from "../components/landing/IntegrationsSection";
import ProductsSection from "../components/landing/ProductsSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import FAQSection from "../components/landing/FAQSection";

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
      <section
        id="contacto"
        className="py-12 border-t border-slate-800/70 mb-10"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-[1.1fr,1fr] gap-8 items-start"
        >
          <motion.div variants={fadeUp}>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">
              Conversemos sobre tu restaurante
            </h2>

            <p className="text-sm text-slate-400 mb-4">
              Déjanos tus datos y te contactamos para mostrarte cómo TuOrdenYa
              puede ayudarte a vender más y operar mejor.
            </p>

            <ul className="text-xs text-slate-400 space-y-1">
              <li>• Hacemos una llamada corta para entender tu operación.</li>
              <li>• Te mostramos un demo adaptado a tu tipo de negocio.</li>
              <li>• Te proponemos un plan claro (Light, Plus o Pro).</li>
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <LeadForm
              page="landing_home"
              defaultInterest="Solo menú digital (Light)"
              whatsappNumber="573227921640"
            />
          </motion.div>
        </motion.div>
      </section>
    </MarketingLayout>
  );
}
