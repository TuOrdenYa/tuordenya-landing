"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

const testimonials = [
  {
    name: "Café Alameda",
    role: "Cafetería de barrio",
    text: "“Con el menú digital y los QR dejamos de imprimir cartas cada vez que subían los precios. Hoy cambiamos todo en minutos.”",
  },
  {
    name: "La Parrilla 24",
    role: "Restaurante familiar",
    text: "“Plus nos permitió ver qué platos se mueven más por horario y tomar decisiones de menú más rápido.”",
  },
  {
    name: "Bistro Central",
    role: "Restaurante de alta rotación",
    text: "“Con Pro tenemos control de las mesas, tiempos y cuentas sin estar corriendo con papeles.”",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12">
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
          Lo que dicen los restaurantes
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-sm text-slate-400 mb-6"
        >
          Aún si hoy estás en papel o en WhatsApp, TuOrdenYa te ayuda a
          estandarizar tu operación paso a paso.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-5 text-xs">
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4"
            >
              <p className="mb-3 text-slate-200">{t.text}</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-slate-400">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
