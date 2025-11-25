"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "./animations";

export default function BenefitsSection() {
  return (
    <section className="py-10 border-t border-slate-800/70">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-6"
      >
        {/* Título + descripción */}
        <motion.div variants={fadeUp} className="md:col-span-1">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3">
            ¿Qué ganas con TuOrdenYa?
          </h2>
          <p className="text-sm text-slate-400">
            Pasas de un menú impreso a una experiencia digital que conecta
            pedidos, operación y datos en un solo lugar.
          </p>
        </motion.div>

        {/* Lista de beneficios */}
        <motion.div
          variants={fadeUp}
          className="md:col-span-2 grid sm:grid-cols-2 gap-4 text-sm"
        >
          <ul className="space-y-2">
            <li>• Los clientes ven tu carta escaneando un código QR.</li>
            <li>
              • Recibes pedidos por WhatsApp o directamente desde el sistema.
            </li>
            <li>• Actualizas precios y platos sin reimprimir menús.</li>
          </ul>

          <ul className="space-y-2">
            <li>• Reportes básicos desde Plus y operación completa en Pro.</li>
            <li>
              • Escalable: comienza con Light y migra a Plus/Pro cuando creces.
            </li>
            <li>
              • Base lista para integrarse con tu flujo actual (POS, cocina, etc.).
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  );
}
