"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { fadeUp, staggerContainer } from "./animations";
import { useI18n } from "@/components/i18n/useI18n";

type Plan = "Light" | "Plus" | "Pro";

export default function HeroSection() {
  const { hero } = useI18n("home");

  const [selectedPlan, setSelectedPlan] = useState<Plan>("Light");
  const [isPlanMenuOpen, setIsPlanMenuOpen] = useState(false);

  const planLabelMap = hero.planCtaLabel;

  const handlePrimaryClick = () => {
    const section = document.getElementById("contacto");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.hash = "#contacto";
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid lg:grid-cols-[1.2fr,1fr] gap-10 items-center"
      >
        {/* COLUMNA IZQUIERDA */}
        <motion.div variants={fadeUp} className="space-y-5">

          {/* BADGE */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF6F3C] bg-[#FFD5C2] px-3 py-1 text-xs font-medium text-[#FF6F3C]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF6F3C]" />
            {hero.badge}
          </span>

          {/* TÍTULO */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            {hero.title}{" "}
            <span className="text-[#FF6F3C]">{hero.highlight}</span>
          </h1>

          {/* DESCRIPCIÓN */}
          <p className="text-sm sm:text-base text-slate-400 max-w-xl">
            {hero.description}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3">

            {/* BOTÓN PRINCIPAL + SELECTOR */}
            <div className="relative inline-flex">
              <button
                type="button"
                onClick={handlePrimaryClick}
                className="px-5 py-2.5 text-sm rounded-l-full rounded-r-none bg-[#FF6F3C] text-slate-950 font-semibold hover:bg-[#FF814F] transition-colors whitespace-nowrap"
              >
                {planLabelMap[selectedPlan]}
              </button>

              <button
                type="button"
                onClick={() => setIsPlanMenuOpen((open) => !open)}
                className="px-3 py-2.5 text-sm rounded-r-full rounded-l-none bg-[#FF6F3C] border-l border-[#FF814F] text-slate-950 font-semibold hover:bg-[#FF814F] transition-colors"
              >
                ▾
              </button>

              {isPlanMenuOpen && (
                <div className="absolute z-20 mt-1 w-full min-w-[260px] rounded-2xl border border-slate-800 bg-slate-950 shadow-lg overflow-hidden">
                  {(["Light", "Plus", "Pro"] as Plan[]).map((plan) => (
                    <button
                      key={plan}
                      type="button"
                      onClick={() => {
                        setSelectedPlan(plan);
                        setIsPlanMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-xs hover:bg-slate-900 ${
                        selectedPlan === plan ? "bg-slate-900" : ""
                      }`}
                    >
                      {planLabelMap[plan]}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA SECUNDARIA */}
            <a
              href="#productos"
              className="px-5 py-2.5 text-sm rounded-full border border-slate-700/70 hover:border-[#FF6F3C] hover:text-[#FF6F3C] transition-colors"
            >
              {hero.secondaryCta}
            </a>
          </div>

          {/* SEGMENTOS */}
          <div className="flex flex-wrap gap-2 pt-2 text-[11px] text-slate-400">
            {hero.segments.map((segment, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full bg-slate-900/60 border border-slate-800/80"
              >
                {segment}
              </span>
            ))}
          </div>
        </motion.div>

        {/* COLUMNA DERECHA - (Se mantiene igual porque NO tiene textos dinámicos aún) */}
        <motion.div
          variants={fadeUp}
          className="rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900 to-slate-950 p-5 sm:p-6 flex flex-col gap-4 shadow-xl"
        >
          <div className="flex items-center justify-between mb-1">
            <div>
              <p className="text-xs text-slate-400">Suite TuOrdenYa</p>
              <p className="text-lg font-semibold">
                Elige el nivel para tu restaurante
              </p>
            </div>
            <span className="text-[10px] rounded-full px-3 py-1 bg-slate-900/80 border border-slate-700/80 text-slate-300">
              Escalable por etapas
            </span>
          </div>

          {/* Aquí no movimos textos porque estos vienen de estructuras fijas */}
          {/* Luego si quieres los pasamos a i18n también */}
        </motion.div>
      </motion.div>
    </section>
  );
}
