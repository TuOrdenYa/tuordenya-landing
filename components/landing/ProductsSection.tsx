// components/landing/ProDetailsSection.tsx
"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";
import { useI18n } from "@/components/i18n/LanguageContext";

export default function ProDetailsSection() {
  const { home } = useI18n();
  const { proDetailsSection } = home;

  return (
    <section className="py-12 border-t border-slate-800/70">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-6"
      >
        <motion.div variants={fadeUp} className="max-w-3xl">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            {proDetailsSection.title}
          </h2>
          <p className="text-sm text-slate-400">
            {proDetailsSection.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="grid md:grid-cols-3 gap-4 text-sm"
        >
          {proDetailsSection.cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4 flex flex-col gap-2"
            >
              <div className="flex items-center justify-between mb-1">
                <p className="font-semibold text-sm">{card.title}</p>
                {card.badge && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-200">
                    {card.badge}
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 mb-2">
                {card.description}
              </p>
              <ul className="text-xs text-slate-400 space-y-1">
                {card.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {proDetailsSection.note && (
          <motion.p
            variants={fadeUp}
            className="text-[11px] text-slate-500 max-w-3xl"
          >
            {proDetailsSection.note}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
