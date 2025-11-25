"use client";

import { motion } from "framer-motion";

import MarketingLayout from "../components/layout/MarketingLayout";
import LeadForm from "../components/LeadForm";

import ProductCard from "../components/landing/ProductCard";
import { productsData } from "../components/landing/productsData";
import { fadeUp, staggerContainer } from "../components/landing/animations";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import ProDetailsSection from "../components/landing/ProDetailsSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import FAQSection from "../components/landing/FAQSection";
import HeroSection from "../components/landing/HeroSection";
import BenefitsSection from "../components/landing/BenefitsSection";
import IntegrationsSection from "../components/landing/IntegrationsSection";

export default function LandingPage() {
  return (
    <MarketingLayout>
      {/* HERO (nuevo componente) */}
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
      <section id="productos" className="py-12 border-t border-slate-800/70">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={fadeUp}
            className="text-xl sm:text-2xl font-semibold mb-2"
          >
            Productos pensados para ti
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-sm text-slate-400 mb-6"
          >
            Comienza con lo básico y escala a medida que tu restaurante crece.
            Todos los productos incluyen hosting, dominio técnico y soporte
            básico.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-5 text-sm">
            {productsData.map((product) => (
              <motion.div key={product.id} variants={fadeUp}>
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

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
