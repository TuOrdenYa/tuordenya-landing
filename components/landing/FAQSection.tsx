"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

const faqs = [
  {
    q: "¿Cuánto se demora la implementación?",
    a: "Depende de la complejidad de tu carta y operación, pero normalmente tomamos días, no meses. Light puede quedar listo muy rápido; Pro requiere un poco más de coordinación.",
  },
  {
    q: "¿Necesito cambiar mi POS actual?",
    a: "No necesariamente. TuOrdenYa puede convivir con tu POS actual mientras definimos el nivel de integración que tenga sentido para tu negocio.",
  },
  {
    q: "¿Puedo empezar con Light y luego subir?",
    a: "Sí. Justamente la idea es que empieces con lo básico y puedas migrar a Plus o Pro cuando el volumen de tu restaurante lo justifique.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-12 border-t border-slate-800/70">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-3xl"
      >
        <motion.h2
          variants={fadeUp}
          className="text-xl sm:text-2xl font-semibold mb-2"
        >
          Preguntas frecuentes
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-sm text-slate-400 mb-6"
        >
          Si tienes dudas específicas de tu operación, cuéntanos y adaptamos
          la implementación a tu caso.
        </motion.p>

        <motion.div variants={fadeUp} className="space-y-4 text-sm">
          {faqs.map((item) => (
            <details
              key={item.q}
              className="group rounded-2xl border border-slate-800/70 bg-slate-900/60 px-4 py-3"
            >
              <summary className="cursor-pointer list-none flex justify-between items-center">
                <span>{item.q}</span>
                <span className="text-xs text-slate-500 group-open:hidden">
                  +
                </span>
                <span className="text-xs text-slate-500 hidden group-open:inline">
                  –
                </span>
              </summary>
              <p className="mt-2 text-xs text-slate-400">{item.a}</p>
            </details>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
