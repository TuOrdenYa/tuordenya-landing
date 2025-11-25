"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

export default function HowItWorksSection() {
  const steps = [
    {
      step: "Paso 1",
      title: "Configura tu menú",
      desc: "Cargamos tu carta, categorías, modificadores y combos. Ajustamos a tu marca para que se vea como tu restaurante.",
    },
    {
      step: "Paso 2",
      title: "Imprime tus QR",
      desc: "Te entregamos los códigos QR listos para mesas, empaques y puntos de venta. Opcional: diseño en tu línea gráfica.",
    },
    {
      step: "Paso 3",
      title: "Empiezas a recibir pedidos",
      desc: "Los clientes ordenan desde su celular. Tú ves pedidos, tiempos y cuentas desde una vista única.",
    },
  ];

  return (
    <section id="como-funciona" className="py-12">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          variants={fadeUp}
          className="text-xl sm:text-2xl font-semibold mb-6"
        >
          Cómo funciona
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-5 text-sm">
          {steps.map((item) => (
            <motion.div
              key={item.step}
              variants={fadeUp}
              className="rounded-2xl border border-slate-800/70 bg-slate-900/60 p-4"
            >
              <p className="text-xs text-slate-400">{item.step}</p>
              <p className="font-semibold mt-1 mb-2">{item.title}</p>
              <p className="text-slate-400 text-xs">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
