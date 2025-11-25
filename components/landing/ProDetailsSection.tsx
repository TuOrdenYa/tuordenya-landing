"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

export default function ProDetailsSection() {
  const features = [
    {
      title: "Órdenes por mesa y canal",
      desc: "Control de órdenes en salón, domicilio y para llevar. Clientes, mesa y estado de cada pedido.",
    },
    {
      title: "Flujo cocina y barra",
      desc: "Envío de órdenes a cocina/bar, estados por preparación y alertas de demora.",
    },
    {
      title: "Cuentas y pagos",
      desc: "Divide cuentas, agrega productos, maneja propinas y deja todo listo para POS o caja.",
    },
    {
      title: "Reportes operativos",
      desc: "Órdenes por franja horaria, platos más vendidos y desempeño por canal.",
    },
  ];

  const bullets = [
    "Restaurantes con varias mesas y rotación constante.",
    "Cadenas pequeñas o marcas con más de una sede.",
    "Dark kitchens con alto volumen de pedidos.",
    "Negocios que ya usan POS y quieren conectar la operación.",
  ];

  return (
    <section id="pro" className="py-12 border-t border-slate-800/70">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-[1.1fr,1fr] gap-8 items-start"
      >
        <motion.div variants={fadeUp}>
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            RestOrder Pro: operación completa
          </h2>
          <p className="text-sm text-slate-400 mb-4 max-w-xl">
            Cuando tu restaurante crece, necesitas algo más que un menú
            digital. Pro está pensado para manejar órdenes, tiempos de cocina,
            cuentas por mesa y reportes de operación.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            {features.map((item) => (
              <div key={item.title} className="space-y-2">
                <p className="font-semibold">{item.title}</p>
                <p className="text-slate-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="rounded-3xl border border-[#4A90E2] bg-gradient-to-br from-slate-900 to-slate-950 p-5 text-sm"
        >
          <p className="text-xs font-semibold text-[#4A90E2] mb-2">
            ¿Para quién es Pro?
          </p>
          <ul className="space-y-2 text-xs">
            {bullets.map((b) => (
              <li key={b}>• {b}</li>
            ))}
          </ul>
          <a
            href="#contacto"
            className="inline-flex mt-4 px-4 py-2 rounded-full bg-[#4A90E2] text-slate-50 text-xs font-semibold hover:bg-[#5fa3ff]"
          >
            Quiero hablar de la versión Pro
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
